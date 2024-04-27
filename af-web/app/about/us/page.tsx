import classes from '/styles/Home.module.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Aeon Forge - About Us',
  description: 'Aeon Forge',
}

export default function Us() {
  return (
        <main className={classes.main}>
          About Us Stuff Here
        </main>
  );
};