import '@mantine/core/styles.css';
import '@rainbow-me/rainbowkit/styles.css';
import { Providers } from './providers';
import Header from '../components/header';
import Footer from '../components/footer';

export default function RootLayout({ children }: { children: any }) {
  return (
    <Providers>
      <Header />
      {children}
      <Footer />
    </Providers>
  );
}