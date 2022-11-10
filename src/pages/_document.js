/* eslint-disable react/function-component-definition */
/* eslint-disable react/jsx-filename-extension */
import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="manifest" href="manifest.json" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="application-name" content="Lakoste" />
        <meta name="apple-mobile-web-app-title" content="Lakoste" />
        <meta name="theme-color" content="#5B259F" />
        <meta name="msapplication-navbutton-color" content="#5B259F" />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />
        <meta name="msapplication-starturl" content="/login" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
