import { Container, Title, Text, Button } from '@mantine/core';
import classes from './HeroBullets.module.css';

export function HeroBullets() {
  return (
    <div className={classes.root} style={{ backgroundImage: `url(${'https://i.pinimg.com/564x/69/ae/9d/69ae9ddef4631a407efe8de462a19d66.jpg'})` }}>
      <Container size="lg">
        <div className={classes.inner}>
          <div className={classes.content}>
            <Title className={classes.title}>
              A{' '}
              <Text
                component="span"
                inherit
                variant="gradient"
                gradient={{ from: 'blue', to: 'blue' }}
              >
                Quality Medicare
              </Text>{' '}
              to life for the whole family
            </Title>

            <Text className={classes.description} mt={30}>
            Say goodbye to waiting at hospitals to have consultation with your doctor. <br/> Book the appointment in InstaMedi and get <br/> your doctor at your home to have consultation at your convenient time.
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