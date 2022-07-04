import { ColorModeScript } from '@chakra-ui/react'
import NextDocument, { Html, Head, Main, NextScript } from 'next/document'
import theme from '../lib/theme'

class Document extends NextDocument {
  render() {
    return (
      <Html lang='en'>
        <Head>
          {/* Snipcart */}
          <link rel='preconnect' href='https://app.snipcart.com' />
          <link rel='preconnect' href='https://cdn.snipcart.com' />
          <link
            rel='stylesheet'
            href='https://cdn.snipcart.com/themes/v3.3.1/default/snipcart.css'
          />
        </Head>
        <body>
          <ColorModeScript initialColorMode={theme.config.initialColorMode} />
          <Main />
          <NextScript />
          <script
            async
            src='https://cdn.snipcart.com/themes/v3.3.1/default/snipcart.js'
          />
          <div
            id='snipcart'
            // data-config-modal-style='side'
            data-api-key='OWE5NGMxY2ItZTg3MS00MWFkLThlMWUtYzU0ODI1MWVhMzg2NjM3ODA4MjM3MjU4MTc0MDY3'
            hidden
          />
        </body>
      </Html>
    )
  }
}

export default Document
