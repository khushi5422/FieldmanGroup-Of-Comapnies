import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="shortcut icon" href="/favicon.png" />
        <link rel='canonical' href='Link' />
        <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossOrigin="anonymous"></link>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:site_name" content="Fieldman Group Of Companies" />
        <meta property="og:title" content="Title" />
        <meta property="og:description" content=" Description" />
        <meta property="og:image" content="bg_long_2.svg" />
        <meta property="og:type" content="website" />
      </Head>
      <body>
        <div id="globalLoader">
          <img src="loader.svg" alt="loader" loading="lazy" />
        </div>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
