import { Html, Head, Main, NextScript } from 'next/document'
import { CssBaseline } from '@nextui-org/react'

export default function Document() {
  return (
    <Html lang="es">
      <Head>
        {CssBaseline.flush()}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

/* class MyDocument extends Document {

  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }

  }

  render() {
    return (
      <Html lang="es">
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
} */
