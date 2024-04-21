import {
  HoverCard,
  Group,
  Button,
  UnstyledButton,
  Text,
  SimpleGrid,
  ThemeIcon,
  Anchor,
  Divider,
  Center,
  Box,
  Burger,
  Drawer,
  Collapse,
  ScrollArea,
  rem,
  useMantineTheme,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import {
  IconCode,
  IconBook,
  IconFingerprint,
  IconCoin,
  IconChevronDown,
  IconTarget,
} from '@tabler/icons-react';
import classes from '/styles/HeaderMenu.module.css';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { url } from 'inspector';

const aboutdata = [
  {
    icon: IconCode,
    title: 'Aeon Forge',
    description: 'Find out more about us and what we do.',
    url: '#',
    target: '_self',
  },
  {
    icon: IconCoin,
    title: 'Our Team',
    description: 'Meet our team of talented individuals.',
    url: '#',
    target: '_self',
  },
  {
    icon: IconBook,
    title: 'Charity',
    description: 'Learn more about the Charities we support.',
    url: 'charity',
    target: '_self',
  },
  {
    icon: IconFingerprint,
    title: 'MainnetZ',
    description: 'We are proud to be a part of the MainnetZ ecosystem.',
    url: 'https://mainnetz.io/',
    target: '_blank',
  },
];

const projectdata = [
  {
    icon: IconCode,
    title: 'DragonZ - Series 1',
    description: 'Thar be some cute DragonZ on MainnetZ!',
    url: '#',
    target: '_self',
  },
  {
    icon: IconCoin,
    title: 'DragonZ Viewer',
    description: 'Take a look at the entire DragonZ collection.',
    url: '#',
    target: '_self',
  },
];

export function headermenu() {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] = useDisclosure(false);
  const [projectLinksOpened, { toggle: toggleProjectLinks }] = useDisclosure(false);
  const [aboutLinksOpened, { toggle: toggleAboutLinks }] = useDisclosure(false);
  const theme = useMantineTheme();

  const projectLinks = projectdata.map((item) => (
    <a href={item.url} key={item.title} target={item.target}> 
      <UnstyledButton className={classes.subLink} key={item.title}>
        <Group wrap="nowrap" align="flex-start">
          <ThemeIcon size={34} variant="default" radius="md">
            <item.icon style={{ width: rem(22), height: rem(22) }} color={theme.colors.blue[6]} />
          </ThemeIcon>
          <div>
            <Text size="sm" fw={500}>
              {item.title}
            </Text>
            <Text size="xs" c="dimmed">
              {item.description}
            </Text>
          </div>
        </Group>
      </UnstyledButton>
    </a>
  ));

  const aboutLinks = aboutdata.map((item) => (
    <a href={item.url} key={item.title} target={item.target}>
      <UnstyledButton className={classes.subLink} key={item.title}>
        <Group wrap="nowrap" align="flex-start">
          <ThemeIcon size={34} variant="default" radius="md">
            <item.icon style={{ width: rem(22), height: rem(22) }} color={theme.colors.blue[6]} />
          </ThemeIcon>
          <div>
            <Text size="sm" fw={500}>
              {item.title}
            </Text>
            <Text size="xs" c="dimmed">
              {item.description}
            </Text>
          </div>
        </Group>
      </UnstyledButton>
    </a>
  ));

  return (
    <Box>
      <header className={classes.header}>
        <Group justify="space-between" h="100%">
          <img src='AF64.png' height={30}/>

          <Group h="100%" gap={0} visibleFrom="sm">
            <a href="/" className={classes.link}>
              Home
            </a>
            <HoverCard width={600} position="bottom" radius="md" shadow="md" withinPortal>
              <HoverCard.Target>
                <a href="#" className={classes.link}>
                  <Center inline>
                    <Box component="span" mr={5}>
                      Projects
                    </Box>
                    <IconChevronDown
                      style={{ width: rem(16), height: rem(16) }}
                      color={theme.colors.blue[6]}
                    />
                  </Center>
                </a>
              </HoverCard.Target>

              <HoverCard.Dropdown style={{ overflow: 'hidden' }}>
                <Group justify="space-between" px="md">
                  <Text fw={500}>Projects</Text>
                </Group>

                <Divider my="sm" />

                <SimpleGrid cols={2} spacing={0}>
                  {projectLinks}
                </SimpleGrid>

                <div className={classes.dropdownFooter}>
                  <Group justify="space-between">
                    <div>
                      <Text fw={500} fz="sm">
                        White Papers
                      </Text>
                      <Text size="xs" c="dimmed">
                        Looking for more in-depth information on one of our projects?
                      </Text>
                    </div>
                    <a href="#">
                      <Button variant="default">White Papers</Button>
                    </a>
                  </Group>
                </div>
              </HoverCard.Dropdown>
            </HoverCard>
            <HoverCard width={600} position="bottom" radius="md" shadow="md" withinPortal>
              <HoverCard.Target>
                <a href="#" className={classes.link}>
                  <Center inline>
                    <Box component="span" mr={5}>
                      About Us
                    </Box>
                    <IconChevronDown
                      style={{ width: rem(16), height: rem(16) }}
                      color={theme.colors.blue[6]}
                    />
                  </Center>
                </a>
              </HoverCard.Target>

              <HoverCard.Dropdown style={{ overflow: 'hidden' }}>
                <Group justify="space-between" px="md">
                  <Text fw={500}>About Us</Text>
                </Group>

                <Divider my="sm" />

                <SimpleGrid cols={2} spacing={0}>
                  {aboutLinks}
                </SimpleGrid>

              </HoverCard.Dropdown>
            </HoverCard>
            <a href="#" className={classes.link}>
              Roadmap
            </a>
          </Group>

          <Group visibleFrom="sm">
            <ConnectButton />
          </Group>

          <Burger opened={drawerOpened} onClick={toggleDrawer} hiddenFrom="sm" />
        </Group>
      </header>

      <Drawer
        opened={drawerOpened}
        onClose={closeDrawer}
        size="100%"
        padding="md"
        title="Navigation"
        hiddenFrom="sm"
        zIndex={1000000}
      >
        <ScrollArea h={`calc(100vh - ${rem(80)})`} mx="-md">
          <Divider my="sm" />

          <a href="#" className={classes.link}>
            Home
          </a>
          <UnstyledButton className={classes.link} onClick={toggleProjectLinks}>
            <Center inline>
              <Box component="span" mr={5}>
                Projects
              </Box>
              <IconChevronDown
                style={{ width: rem(16), height: rem(16) }}
                color={theme.colors.blue[6]}
              />
            </Center>
          </UnstyledButton>
          <Collapse in={projectLinksOpened}>{projectLinks}</Collapse>
          <UnstyledButton className={classes.link} onClick={toggleAboutLinks}>
            <Center inline>
              <Box component="span" mr={5}>
                About Us
              </Box>
              <IconChevronDown
                style={{ width: rem(16), height: rem(16) }}
                color={theme.colors.blue[6]}
              />
            </Center>
          </UnstyledButton>
          <Collapse in={aboutLinksOpened}>{aboutLinks}</Collapse>
          <a href="#" className={classes.link}>
            Roadmap
          </a>
          
          <Divider my="sm" />

          <Group justify="center" grow pb="xl" px="md">
            <ConnectButton />
          </Group>
        </ScrollArea>
      </Drawer>
    </Box>
  );
}

export default headermenu;