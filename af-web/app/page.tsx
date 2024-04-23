import { Home } from './home';
import type { Metadata } from 'next';

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