import classes from '/styles/Home.module.css';
import type { Metadata } from 'next';
import { Contact } from './contact';

export const metadata: Metadata = {
  title: 'Aeon Forge - Contact Us',
  description: 'Aeon Forge',
}

export default function ContactUs() {
  return (
        <main className={classes.main}>
          <Contact />
        </main>
  );
};