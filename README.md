## News

Este projeto feito com [React](https://pt-br.reactjs.org/)

O projeto e um site de post de artigos sobre tecnologia IG.news produzido em conjuntado com o curso do ignite da (rockseat).

## tecnologia

- [Next.js](https://nextjs.org)
- [prismic](https://prismic.io)
- [axios](https://github.com/axios/axios)
- [faunaDb](https://fauna.com)
- [next-auth](https://next-auth.js.org)
- [sass](https://sass-lang.com)
- [stripe](https://stripe.com/docs)

o site usa o github para fazer login so site.
o stripe e para fazer um simulação de assinatura.
o faunaDb e um bando de dado

## Pré-requisitos

Para executar o projeto é necessário ter as seguintes dependências instaladas no seu ambiente:

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/)

## Primeiros Passos

Crie um arquivo .env.local para adicionar as variável de ambiente para o site ante de rota a app

```
# striper public
NEXT_PUBLIC_STRIPER_PUBLIC_KEY

# striper private
STRIPER_API_KEY
STRIPER_WEB_HOOKS
STRIPER_SUCCESS_URL=http://localhost:3000/posts
STRIPER_CANCEL_URL=http://localhost:3000/


# Github
GITHUB_CLIENT_ID
GITHUB_CLIENT_SECRET

# FaunasDB
FAUNA_DB_KEY

# prismic CMS
PRISMIC_ENDPOINT
PRISMIC_ACCESS_TOKEN
```

Siga os passos abaixo dentro da pasta após clonar ou baixar o projeto:

```bash
# Instalar as dependências do projeto
$ yarn install

ou

$ npm install
```

```bash
# Rodar o projeto
$ yarn start

ou

$ npm start
```

##

JAmsStack

=> javaScript
=> Api
=> Markup

CMS (content Management System)

- wordpress
- x drupal (nao utilizar)
- x Joomla (nao utilizar)
- Magento (E-commerce)

Headless CMS (Painel de administração + API HTTP, ...)

- Strapi (qualquer conteúdo)
- Ghost (Blog)
- Keystone (qualquer conteúdo)

pagos

- GraphCMS
- Prismic CMS
- ContentFul

E-commerce

- Shopify
- Saleor
