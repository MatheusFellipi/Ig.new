import "../styles/globals.scss";
import { Header } from "../components/Header/index";
import { Provider as NextAuthProvider } from "next-auth/client";
function MyApp({ Component, pageProps }) {
  return (
    <NextAuthProvider session={pageProps.session}>
      <Header />
      <Component {...pageProps} />
    </NextAuthProvider>
  );
}

export default MyApp;
