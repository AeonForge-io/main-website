import { Grid } from '@mantine/core';
import classes from '/styles/Home.module.css';

export function maincontent() {
  return (
    <Grid className={classes.grid}>
      <Grid.Col span={2}></Grid.Col>
      <Grid.Col span={5}>
        <div className={classes.title}>Welcome to Aeon Forge!</div>
        <p>Where creativity, community, and compassion converge in the dynamic world of blockchain technology. As a pioneering crypto firm specializing in NFTs, tokens, and DApps, we're not just about pushing boundaries; we're about making a positive impact.</p>
        <p>At Aeon Forge, we're committed to more than just innovation. With every project, we dedicate a portion of all proceeds to charitable causes, ensuring that our success ripples outward to benefit those in need. We want our contributions to extend far beyond the digital realm.</p>
        <p>Join us on this transformative journey as we forge connections between creators and collectors, all while making a difference in the world. Explore our platform, engage with our community, and discover how together, we can shape a future where creativity, technology, and compassion thrive. Welcome to Aeon Forge - where innovation meets empathy.</p></Grid.Col>
      <Grid.Col span={3} style={{ maxHeight: '60vh'}}><img src="AF.png" width="auto" height="100%"></img></Grid.Col>
      <Grid.Col span={2}></Grid.Col>
    </Grid>
    
  );
}

export default maincontent;