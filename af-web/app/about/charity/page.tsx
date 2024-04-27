import classes from '/styles/Home.module.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Aeon Forge - Charity',
  description: 'Aeon Forge',
}

export default function Charity() {
  return (
        <main className={classes.main}>
          Charity Stuff Here
        </main>
  );
};