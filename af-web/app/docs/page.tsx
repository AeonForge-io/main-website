import classes from '/styles/Home.module.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Aeon Forge - Docs',
  description: 'Aeon Forge',
}

export default function Docs() {
  return (
        <main className={classes.main}>
          White Papers and Documentation
        </main>
  );
};