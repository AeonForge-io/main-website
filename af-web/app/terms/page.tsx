import classes from '/styles/Home.module.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Aeon Forge - Terms of Use',
  description: 'Aeon Forge',
}

export default function Terms() {
  return (
        <main className={classes.main}>
          Terms of Use
        </main>
  );
};