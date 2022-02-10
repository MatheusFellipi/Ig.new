import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import { getSession, useSession } from "next-auth/client";
import { RichText } from "prismic-dom";
import { getPrismicClient } from "../../../services/prismic-config";
import styles from "../post.module.scss";
import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { route } from "next/dist/next-server/server/router";

interface PostsPreviewProps {
  post: {
    slug: string;
    title: string;
    content: string;
    updateAt: string;
  };
}
export default function PostPreview({ post }: PostsPreviewProps) {
  const [session] = useSession();
  const router = useRouter();

  useEffect(() => {
    if (session.userActiveSubscription) {
      router.push(`/posts/${post.slug}`);
    }
  }, [session]);

  return (
    <>
      <Head>
        <title>{post.title} | news</title>
      </Head>
      <main className={styles.container}>
        <article className={styles.post}>
          <h1>{post.title}</h1>
          <time>{post.updateAt}</time>
          <div
            className={`${styles.postContent} ${styles.previewContent}`}
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
          <div className={styles.continueReading}>
            Wanna continue reading?
            <Link href="/">
              <a>Subscriber now 🤗</a>
            </Link>
          </div>
        </article>
      </main>
    </>
  );
}
export const getStaticPaths = async () => {
  // para terdermina os post que vao ser gerando na build ou nao
  // assim fazerndo um build com html staticos
  // mas tambem pode fazer o post da pagina que eu quiser de forma staticas
  //passando nada eu gero a forma static toda fez que alguem acessa a pagina
  // podemos fazer a chama dos post mais recente passando o slug para gerar o statico durante a build
  return {
    paths: [],
    fallback: "blocking",
  };
  // fallback : true false blocking
  // true => gera o posts pelo o nado do cliente causa layout bugs carrega o layout mais nao o conteudo
  // false => retorn 404 caso nao voi gerado de for static ainda
  // blocking => ele vai carregar o conteúdo apos carregar o conteudo da requisicao
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params;

  const prismic = getPrismicClient();
  const response = await prismic.getByUID("publicati", String(slug), {});

  const post = {
    slug,
    title: RichText.asText(response.data.title),
    content: RichText.asHtml(response.data.content.splice(0, 3)),
    updateAt: new Date(response.last_publication_date).toLocaleDateString(
      "pt-br",
      {
        day: "2-digit",
        month: "long",
        year: "numeric",
      }
    ),
  };

  return {
    props: { post },
  };
};
