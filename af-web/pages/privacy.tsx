import type { NextPage } from 'next';
import HeaderMenu from '../components/HeaderMenu';
import FooterMenu from '../components/FooterMenu';
import { AppShell } from '@mantine/core';
import classes from '/styles/Home.module.css';
import { useEffect } from 'react';

const Privacy: NextPage = () => {
  useEffect(() => {
      document.title = 'Aeon Forge - Privacy Policy';
    }, []);
  return (
    <AppShell padding="0px" withBorder={false}>
      <AppShell.Header><HeaderMenu /></AppShell.Header>
      <AppShell.Main>
        <main className={classes.main}>
          Privacy Policy Here
        </main>
      </AppShell.Main>
      <AppShell.Footer><FooterMenu /></AppShell.Footer>
    </AppShell>
  );
};

export default Privacy;