import Head from "next/head"
import React from "react"

interface HeadTitleProps {
  title: string
}

const metaDescription =
  'A pokédex in card style. Explore and swipe through pokemon cards or play "who\'s that pokemon?".'
const metaIMG = "./screen.gif"

const HeadTitle: React.FC<HeadTitleProps> = ({ title }) => {
  return (
    <Head>
      <title>{title}</title>
      <link rel="icon" href="/favicon.svg" />
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <title>{title}</title>
      <meta name="title" content="Pokénex" />
      <meta name="description" content={metaDescription} />
      <meta name="image" content={metaIMG} />
      <meta name="og:title" content="Pokénex" />
      <meta name="og:description" content={metaDescription} />
      <meta name="og:image" content={metaIMG} />
      <meta name="twitter:title" content="Pokénex" />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={metaIMG} />
    </Head>
  )
}

export default HeadTitle
