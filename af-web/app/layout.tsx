import '@mantine/core/styles.css';
import '@rainbow-me/rainbowkit/styles.css';
import { Metadata } from 'next'
import { Providers } from './providers';
import { ColorSchemeScript } from '@mantine/core';

export const metadata: Metadata = {
  title: 'Mantine Next.js template',
  description: 'I am using Mantine with Next.js!',
}
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
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}