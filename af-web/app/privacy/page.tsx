import classes from '/styles/Home.module.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Aeon Forge - Privacy Policy',
  description: 'Aeon Forge',
}

export default function Privacy() {
  return (
        <main className={classes.main}>
          Privacy Policy
        </main>
  );
};