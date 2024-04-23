'use client';

import HeaderMenu from '../components/HeaderMenu';
import FooterMenu from '../components/FooterMenu';
import { AppShell, Grid } from '@mantine/core';
import classes from '/styles/Home.module.css';

export function Home() {
  return (
    <AppShell padding="0px" withBorder={false}>
      <AppShell.Header><HeaderMenu /></AppShell.Header>
      <AppShell.Main>
        <main className={classes.main}>
          <Grid className={classes.grid}>
            <Grid.Col span={7} style={{ paddingRight: '50px' }}>
              <div className={classes.title}>Welcome to Aeon Forge!</div>
              <p>Where creativity, community, and compassion converge in the dynamic world of blockchain technology. As a pioneering crypto firm specializing in NFTs, tokens, and DApps, we're not just about pushing boundaries; we're about making a positive impact.</p>
              <p>At Aeon Forge, we're committed to more than just innovation. With every project, we dedicate a portion of all proceeds to charitable causes, ensuring that our success ripples outward to benefit those in need. We want our contributions to extend far beyond the digital realm.</p>
              <p>Join us on this transformative journey as we forge connections between creators and collectors, all while making a difference in the world. Explore our platform, engage with our community, and discover how together, we can shape a future where creativity, technology, and compassion thrive. Welcome to Aeon Forge - where innovation meets empathy.</p></Grid.Col>
            <Grid.Col span={5} style={{ maxHeight: '60vh', maxWidth: '500px'}}><img src="AF.png" style={{ maxWidth: '100%', maxHeight: '100%' }}></img></Grid.Col>
          </Grid>
        </main>
      </AppShell.Main>
      <AppShell.Footer><FooterMenu /></AppShell.Footer>
    </AppShell>
  );
};