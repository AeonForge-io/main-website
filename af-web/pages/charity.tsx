import type { NextPage } from 'next';
import HeaderMenu from '../components/HeaderMenu';
import FooterMenu from '../components/FooterMenu';
import { AppShell } from '@mantine/core';

const Charity: NextPage = () => {
  return (
    <AppShell padding="0px" withBorder={false}>
      <AppShell.Header><HeaderMenu /></AppShell.Header>
      <AppShell.Main>
        Charity Stuff Here
      </AppShell.Main>
      <AppShell.Footer><FooterMenu /></AppShell.Footer>
    </AppShell>
  );
};

export default Charity;