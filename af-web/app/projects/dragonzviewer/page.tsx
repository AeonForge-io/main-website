import classes from '/styles/Home.module.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Aeon Forge - DragonZ Viewer',
  description: 'Aeon Forge',
}

export default function DragonZViewer() {
  return (
        <main className={classes.main}>
          DragonZ Viewer will be here
        </main>
  );
};