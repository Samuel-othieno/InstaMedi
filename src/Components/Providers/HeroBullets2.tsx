import { Container, Title, Text, Button } from '@mantine/core';
import classes from './HeroBullets2.module.css';

export function HeroBullets2() {
  return (
    <div className={classes.root} style={{ backgroundImage: `url(${'https://i.pinimg.com/564x/69/ae/9d/69ae9ddef4631a407efe8de462a19d66.jpg'})` }}>
      <Container size="lg">
        <div className={classes.inner}>
          <div className={classes.content}>
            <Title className={classes.title}>
             {' '}
              <Text
                component="span"
                inherit
                variant="gradient"
                gradient={{ from: 'blue', to: 'blue' }}
              >
                A Health Team  of Medical Professionals
              </Text>{' '}
             
            </Title>

            <Text className={classes.description} mt={30} fw={700}>
  Tap on the arrow to get Links to suitable meet mode. <br />
  1. For Phone calls and WhatsApp use mobile No. <br />
  2. For video Meet tap on the Google Meet Link to join.
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