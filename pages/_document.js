import { Navbar } from '@/components'
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <title>Desa Kemuning Legok</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.png" />
      </Head>
      <body style={{overflow:'hidden'}}>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
