import type { Metadata } from 'next';
import Home from './home';

export const metadata: Metadata = {
  title: 'Aeon Forge',
  description: 'Aeon Forge',
}
export default function HomePage() {
  return (
    <>
      <Home />
    </>
  );
}