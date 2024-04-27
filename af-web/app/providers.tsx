'use client';

import '@mantine/core/styles.css';
import '@rainbow-me/rainbowkit/styles.css';
import '/styles/globals.css';
import { MantineProvider, ColorSchemeScript } from '@mantine/core';
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
  appName: 'AeonForge',
  projectId: '6171d3a54e3f3fea9abd2dc659b9ccde',
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
        <ColorSchemeScript defaultColorScheme='dark' />
        <link rel="icon" href="/favicon.ico" />
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