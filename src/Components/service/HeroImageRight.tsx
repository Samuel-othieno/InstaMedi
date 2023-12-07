import { Container, Title, Text, Button } from '@mantine/core';
import classes from './HeroImageRight.module.css';

export function HeroImageRight() {
  return (
    <div className={classes.root}>
      <Container size="lg">
        <div className={classes.inner}>
          <div className={classes.content}>
            <Title className={classes.title}>
              
              Enjoy Convenient online medical services today
            </Title>

            <Text className={classes.description} mt={30}>
            Escape the waiting room and connect with an online doctor, when and where it suits you. <br/>
            InstaMedi doctors can provide a Number of different medical services and <br/>a dedicated to addressing your concerns from the comfort of your home.
            </Text>

            <Button
              variant="gradient"
              gradient={{ from: 'pink', to: 'yellow' }}
              size="xl"
              className={classes.control}
              mt={40}
            >
              Get started
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
}