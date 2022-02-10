/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import { GetStaticProps } from "next";
import { SubscriberButton } from "../components/SubscribeButton";
import styles from "./home.module.scss";
import { stripe } from "../services/stripe";

interface HomeProps {
  product: {
    priceId: string;
    amount: number;
  };
}

export default function Home({ product }: HomeProps) {
  return (
    <>
      <Head>
        <title>Home | news</title>
      </Head>
      <main className={styles.contentContainer}>
        <section className={styles.hero}>
          <span>👏 Hey, Welcome</span>
          <h1>
            News about the <span>React</span> world
          </h1>

          <p>
            Get access to all publications <br />
            <span>for {product.amount} month</span>
          </p>
          <SubscriberButton priceId={product.priceId} />
        </section>
        <img src="/images/avatar.svg" alt="Girl codding" />
      </main>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const price = await stripe.prices.retrieve("price_1JCqc6DFdkIXdS0f22wmkqI3", {
    expand: ["product"],
  });

  const product = {
    priceId: price.id,
    amount: price.unit_amount / 100,
  };
  return {
    props: {
      product,
    },
    revalidate: 60 * 60 * 24, //24h
  };
};
