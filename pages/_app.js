import { AppContextProvider } from "@/components/context/AppContext";
import Layout from "@/layout";
import "@/styles/globals.css";
import Head from "next/head";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

export default function App({ Component, pageProps }) {
  if (Component.getLayout) {
    return (
      <>
        <Head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
          />
        </Head>
        <ToastContainer autoClose={2000} position="top-center" />
        {Component.getLayout(<Component {...pageProps} />)}
      </>
    );
  }
  return (
    <AppContextProvider>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
        />
      </Head>
      <Layout>
        <ToastContainer autoClose={2000} position="top-center" />
        <div className="screen-container">
          <Component {...pageProps} />
        </div>
      </Layout>
    </AppContextProvider>
  );
}
