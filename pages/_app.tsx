import Head from "next/head"
import type { AppProps } from "next/app"
import "../styles/styles.scss"
import Nav from "@components/Nav/Nav"

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
