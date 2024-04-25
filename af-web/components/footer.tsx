'use client';

import { Anchor, Group, ActionIcon, rem } from '@mantine/core';
import { IconBrandTwitter, IconBrandDiscord, IconBrandGithub } from '@tabler/icons-react';
import classes from '/styles/FooterMenu.module.css';

const links = [
  { link: '/terms', label: 'Terms of Use' },
  { link: '/privacy', label: 'Privacy Policy' },
  { link: '/docs', label: 'White Papers' },
  { link: '/contact', label: 'Contact' },
];

export default function Footer() {
  const items = links.map((link) => (
    <Anchor
      c="dimmed"
      key={link.label}
      href={link.link}
      lh={1}
      size="sm"
    >
      {link.label}
    </Anchor>
  ));

  return (
    <div className={classes.footer}>
      <div className={classes.inner}>
        <Group>© 2024 Aeon Forge Solutions</Group>

        <Group className={classes.links}>{items}</Group>

        <Group gap="xs" justify="flex-end" wrap="nowrap">
          <a href="https://discord.gg/a2apYnzv" target="_blank">
            <ActionIcon size="lg" variant="default" radius="xl">
              <IconBrandDiscord style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
            </ActionIcon>
          </a>
          <a href="https://twitter.com/AeonForgeio" target="_blank">
            <ActionIcon size="lg" variant="default" radius="xl">
              <IconBrandTwitter style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
            </ActionIcon>
          </a>
          <a href="https://github.com/AeonForge-io" target="_blank">
            <ActionIcon size="lg" variant="default" radius="xl">
              <IconBrandGithub style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
            </ActionIcon>
          </a>
        </Group>
      </div>
    </div>
  );
}