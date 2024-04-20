import '../styles/globals.css';
import '@rainbow-me/rainbowkit/styles.css';
import type { AppProps } from 'next/app';
import '@mantine/core/styles.css';
import { createTheme, MantineProvider } from '@mantine/core';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { WagmiProvider } from 'wagmi';
import { getDefaultConfig, RainbowKitProvider, Chain, darkTheme, midnightTheme } from '@rainbow-me/rainbowkit';

const AeonForge = createTheme({
  /** Put your mantine theme override here */
});

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

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={client}>
        <RainbowKitProvider theme={darkTheme()} initialChain={MainnetZ}>
          <MantineProvider theme={AeonForge} defaultColorScheme="dark">
            <Component {...pageProps} />
          </MantineProvider>
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}

export default MyApp;
