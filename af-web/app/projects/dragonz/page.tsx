import classes from '/styles/Home.module.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Aeon Forge - DragonZ',
  description: 'Aeon Forge',
}

export default function DragonZ() {
  return (
        <main className={classes.main}>
          DragonZ Stuff Here
        </main>
  );
};