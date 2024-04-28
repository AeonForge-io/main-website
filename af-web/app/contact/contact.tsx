'use client';

import { Paper, Text, TextInput, Textarea, Button, Group, SimpleGrid } from '@mantine/core';
import { ContactIconsList } from './contacticons';
import bg from '/public/bg.svg';
import classes from './Contact.module.css';

export function Contact() {
  return (
    <Paper shadow="md" radius="lg">
      <div className={classes.wrapper}>
        <div className={classes.contacts} style={{ backgroundImage: `url(${bg.src})` }}>
          <Text fz="lg" fw={700} className={classes.title} c="#fff">
            Contact Information
          </Text>

          <ContactIconsList />
        </div>

        <form className={classes.form} onSubmit={(event) => event.preventDefault()}>
          <Text fz="lg" fw={700} className={classes.title}>
            Get in touch with us
          </Text>

          <div className={classes.fields}>
            <SimpleGrid cols={{ base: 1, sm: 2 }}>
              <TextInput label="Your name" placeholder="Not our name"  required/>
              <TextInput label="Your email" placeholder="your@email.com" required />
            </SimpleGrid>

            <TextInput mt="md" label="Subject" placeholder="The Deets" required />

            <Textarea
              mt="md"
              label="Your message"
              placeholder="How can we help you?"
              minRows={3}
              required
            />

            <Group justify="flex-end" mt="md">
              <Button type="submit" className={classes.control}>
                Send Message
              </Button>
            </Group>
          </div>
        </form>
      </div>
    </Paper>
  );
}
