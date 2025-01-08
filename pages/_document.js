import Document, { Html, Head, Main, NextScript } from 'next/document'
import { NAV_BAR_COLOR } from '../GlobalVariables'
import { DocumentContext, DocumentInitialProps } from "next/document";
import { ServerStyleSheet } from "styled-components";
import Script from 'next/script';

class MyDocument extends Document {

  // Fix for Flash Of Unstyled Content (FOUC)
  static async getInitialProps(ctx) {
      const sheet = new ServerStyleSheet();
      const originalRenderPage = ctx.renderPage;

      try {
          ctx.renderPage = () =>
              originalRenderPage({
                  enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />),
              });

          const initialProps = await Document.getInitialProps(ctx);
          return {
              ...initialProps,
              styles: [initialProps.styles, sheet.getStyleElement()],
          };
      } finally {
          sheet.seal();
      }
  }
  //////////////
    
  render() {
    return (
      <Html>
        <Head>
          <Script id='hotjar'
            strategy='afterInteractive'
            dangerouslySetInnerHTML={{
              __html: `
              (function(h,o,t,j,a,r){
                h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
                h._hjSettings={hjid:4998998,hjsv:6};
                a=o.getElementsByTagName('head')[0];
                r=o.createElement('script');r.async=1;
                r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
                a.appendChild(r);
            })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
              `,
            }}>

          </Script>
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