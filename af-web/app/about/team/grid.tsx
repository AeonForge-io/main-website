'use client';

import { Container, Grid, SimpleGrid, Skeleton, rem } from '@mantine/core';
import { CardImage } from './cardimage';

export function LeadGrid() {

  return (
    <Container>
      <SimpleGrid cols={{ base: 1, sm: 3 }} spacing="md">
        <CardImage
            username="Staxed"
            quote="Life's true gift is the capacity to enjoy enjoyment."
            avatarSrc="https://unavatar.io/twitter/staxedaf"
            backgroundImage="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80"
            profileUrl="https://twitter.com/intent/user?screen_name=staxedaf"
        />
        <CardImage
            username="H.C. Townes"
            quote="Every reality was once a dream. Never stop dreaming."
            avatarSrc="https://unavatar.io/twitter/hc_townes"
            backgroundImage="https://images.unsplash.com/photo-1474631245212-32dc3c8310c6?q=80&w=300&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            profileUrl="https://twitter.com/intent/user?screen_name=hc_townes"
        />
        <CardImage
            username="Joey"
            quote="When we strive to become better than we are, everything around us becomes better too."
            avatarSrc="https://unavatar.io/twitter/hoeybblessed"
            backgroundImage="https://images.unsplash.com/photo-1607703703520-bb638e84caf2?q=80&w=300&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            profileUrl="https://twitter.com/intent/user?screen_name=hoeybblessed"
        />
      </SimpleGrid>
    </Container>
  );
}