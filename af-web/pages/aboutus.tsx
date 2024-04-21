import type { NextPage } from 'next';
import HeaderMenu from '../components/HeaderMenu';
import FooterMenu from '../components/FooterMenu';
import { AppShell } from '@mantine/core';
import classes from '/styles/Home.module.css';

const AboutUs: NextPage = () => {
  return (
    <AppShell padding="0px" withBorder={false}>
      <AppShell.Header><HeaderMenu /></AppShell.Header>
      <AppShell.Main>
        <main className={classes.main}>
          About Us Stuff Here
        </main>
      </AppShell.Main>
      <AppShell.Footer><FooterMenu /></AppShell.Footer>
    </AppShell>
  );
};

export default AboutUs;