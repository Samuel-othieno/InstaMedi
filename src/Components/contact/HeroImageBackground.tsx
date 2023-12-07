import cx from 'clsx';
import { Title, Text, Container, Button, Overlay } from '@mantine/core';
import classes from './HeroImageBackground.module.css';

export function HeroImageBackground() {
  return (
    <div className={classes.wrapper}>
      <Overlay color="#000" opacity={0.65} zIndex={1} />

      <div className={classes.inner}>
        <Title className={classes.title}>
        Escape the waiting room and experience healthcare on your terms.{' '}
          <Text component="span" inherit className={classes.highlight}>
          
          </Text>
        </Title>

        <Container size={640}>
          <Text size="lg" className={classes.description}>
          Whether you need a virtual consultation, prescription refills, or 
          specialist advice, InstaMedi is here for you. Our dedicated 
          team is committed to providing personalized care tailored to your unique needs.
          </Text>
        </Container>

        <div className={classes.controls}>
          <Button className={classes.control} variant="white" size="lg">
            Asks us or give us feed.
          </Button>
          <Button className={cx(classes.control, classes.secondaryControl)} size="lg">
            on these Meetings.
          </Button>
        </div>
      </div>
    </div>
  );
}