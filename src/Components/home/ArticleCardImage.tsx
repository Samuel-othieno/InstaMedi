import { Paper, Text, Title, Button } from '@mantine/core';
import classes from './ArticleCardImage.module.css';

export function ArticleCardImage() {
  return (
    <Paper shadow="md" p="xl" radius="md" className={classes.card}>
      <div>
        <Text className={classes.category} size="xs">
          INSTAMEDIC
        </Text>
        <Title order={3} className={classes.title} >
          Best Ooctors at your finger tips.
        </Title>
      </div>
      <Button variant="white" color="dark">
      Best Ooctors at your finger tips.
      </Button>
    </Paper>
  );
}