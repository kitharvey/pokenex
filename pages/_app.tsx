import Router from "next/router"
import type { AppProps } from "next/app"
import { Provider as ReduxProvider } from "react-redux"
import { Provider as NextAuthProvider } from "next-auth/client"
import ProgressBar from "@badrap/bar-of-progress"
import Nav from "@components/Nav/Nav"
import "@styles/styles.scss"
import { store } from "@utils/store"

const progress = new ProgressBar({
  size: 2,
  color: "#ff5a5f",
  className: "bar-of-progress",
  delay: 100,
})

Router.events.on("routeChangeStart", progress.start)
Router.events.on("routeChangeComplete", progress.finish)
Router.events.on("routeChangeError", progress.finish)

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <NextAuthProvider session={pageProps.session}>
      <ReduxProvider store={store}>
        <Nav />
        <div className="container mt-40">
          <Component {...pageProps} />
        </div>
      </ReduxProvider>
    </NextAuthProvider>
  )
}

export default MyApp
