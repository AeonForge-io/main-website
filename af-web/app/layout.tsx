import '@mantine/core/styles.css';
import '@rainbow-me/rainbowkit/styles.css';
import { Providers } from './providers';
import { ColorSchemeScript } from '@mantine/core';
import Header from '../components/header';
import Footer from '../components/footer';

export default function RootLayout({ children }: { children: any }) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
        <link rel="shortcut icon" href="/favicon.svg" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
      </head>
      <body>
        <Providers><Header />{children}<Footer /></Providers>
      </body>
    </html>
  );
}