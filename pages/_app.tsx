import Head from "next/head"
import Router from "next/router"
import type { AppProps } from "next/app"
import { Provider } from "react-redux"
import ProgressBar from "@badrap/bar-of-progress"
import Nav from "@components/Nav/Nav"
import "@styles/styles.scss"
import { store } from "@utils/store"

const progress = new ProgressBar({
  size: 2,
  color: "#072ac8",
  className: "bar-of-progress",
  delay: 100,
})

Router.events.on("routeChangeStart", progress.start)
Router.events.on("routeChangeComplete", progress.finish)
Router.events.on("routeChangeError", progress.finish)

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <Provider store={store}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="container">
        <Nav />
        <Component {...pageProps} />
      </div>
    </Provider>
  )
}

export default MyApp
