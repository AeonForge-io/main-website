'use client';

import '@mantine/core/styles.css';
import '@rainbow-me/rainbowkit/styles.css';
import { MantineProvider, ColorSchemeScript } from '@mantine/core';
import { Metadata } from 'next'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { WagmiProvider } from 'wagmi';
import { getDefaultConfig, RainbowKitProvider, Chain, darkTheme, Theme } from '@rainbow-me/rainbowkit';
import merge from 'lodash.merge';

/* override rainbow kit theme */
const rainbowkitAFTheme = merge(darkTheme(), {
  colors: {
    accentColor: '#4970B5',
  },
} as Theme);

/* add MainnetZ network */
const MainnetZ = {
  id: 2016,
  name: 'MainnetZ Mainnet',
  nativeCurrency: {
    decimals: 18,
    name: 'NetZ',
    symbol: 'NetZ',
  },
  rpcUrls: {
    default: { http: ['https://mainnet-rpc.mainnetz.io'] },
  },
  blockExplorers: {
    default: { name: 'NetzExplorer', url: 'https://netzexplorer.io' },
  },
  iconUrl: 'https://netzexplorer.io/assets/network_icon.png',
  testnet: false,
} as const satisfies Chain;

const config = getDefaultConfig({
  appName: 'Aeon Forge',
  projectId: 'aeonforge',
  chains: [
    MainnetZ,
  ],
  ssr: true,
});

const client = new QueryClient();

export function Providers({ children }: { children: any }) {
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
        <MantineProvider defaultColorScheme='dark'>
            <WagmiProvider config={config}>
                <QueryClientProvider client={client}>
                    <RainbowKitProvider theme={rainbowkitAFTheme} initialChain={MainnetZ}>
                        {children}
                    </RainbowKitProvider>
                </QueryClientProvider>
            </WagmiProvider>
        </MantineProvider>
      </body>
    </html>
  );
}