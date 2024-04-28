import { Card, Avatar, Text, Group, Button } from '@mantine/core';
import classes from './CardImage.module.css';

interface CardImageProps {
  username: string;
  quote: string;
  avatarSrc: string;
  backgroundImage: string;
  profileUrl: string;
}

export function CardImage({ username, quote, avatarSrc, backgroundImage, profileUrl }: CardImageProps) {
  return (
    <Card withBorder padding="xl" radius="md" className={classes.card}>
      <Card.Section
        h={140}
        style={{
          backgroundImage: `url(${backgroundImage})`,
        }}
      />
      <Avatar
        src={avatarSrc}
        size={100}
        radius={100}
        mx="auto"
        mt={-50}
        className={classes.avatar}
      />
      <Text ta="center" fz="lg" fw={700} mt="sm">
        {username}
      </Text>
      <Text ta="center" fz="md" fw={300} mt="sm">
        {quote}
      </Text>
      <a href={profileUrl} target="_blank" rel="noopener noreferrer" className={classes.button}>
        <Button fullWidth radius="md" mt="xl" size="md" variant="default">
          Follow
        </Button>
      </a>
    </Card>
  );
}