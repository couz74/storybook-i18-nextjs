import Head from "next/head";
import { Layout } from "../components/Layout";
import { appWithTranslation } from "next-i18next";


function App({ Component, pageProps }: AppProps) {
    return <Component {...pageProps} />
}

export default appWithTranslation(App);
