import Document, { Html, Head, Main, NextScript } from 'next/document'
import { NAV_BAR_COLOR } from '../GlobalVariables'

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link
            href="https://use.typekit.net/vog4rbu.css"
            rel="stylesheet"
          />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
          <link href="https://fonts.googleapis.com/css2?family=Mrs+Saint+Delafield&display=swap" rel="stylesheet" />
        </Head>
        <body>
        <meta name="theme-color" content={NAV_BAR_COLOR} />
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument