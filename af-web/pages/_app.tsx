import '../styles/globals.css';
import '@rainbow-me/rainbowkit/styles.css';
import type { AppProps } from 'next/app';
import '@mantine/core/styles.css';
import { createTheme, MantineProvider, ColorSchemeScript } from '@mantine/core';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { WagmiProvider } from 'wagmi';
import { getDefaultConfig, RainbowKitProvider, Chain, darkTheme, Theme } from '@rainbow-me/rainbowkit';
import merge from 'lodash.merge';
import Head from 'next/head';

const AeonForge = createTheme({
/* for future mantine overrides if needed */
});

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

function AeonForgeWeb({ Component, pageProps }: AppProps) {
  return (
    <MantineProvider theme={AeonForge} forceColorScheme="dark">
      <Head>
        <title>{pageProps.title || 'Aeon Forge'}</title>
        <meta name="description" content="Aeon Forge" />
        <link rel="shortcut icon" href="/AeonForgeLogo.ico" />
        <ColorSchemeScript forceColorScheme="dark" />
      </Head>
      <WagmiProvider config={config}>
        <QueryClientProvider client={client}>
          <RainbowKitProvider theme={rainbowkitAFTheme} initialChain={MainnetZ}>
            <Component {...pageProps} />
          </RainbowKitProvider>
        </QueryClientProvider>
      </WagmiProvider>
    </MantineProvider>  
  );
}

export default AeonForgeWeb;
