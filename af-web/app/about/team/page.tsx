import classes from '/styles/Home.module.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Aeon Forge - Team',
  description: 'Aeon Forge',
}

export default function Team() {
  return (
        <main className={classes.main}>
          Team Stuff Here
        </main>
  );
};