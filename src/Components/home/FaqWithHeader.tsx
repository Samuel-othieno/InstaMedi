import { Title, Container, Text, UnstyledButton, Overlay, SimpleGrid } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks'; // Import useMediaQuery
import classes from './FaqWithHeader.module.css';
import { ArticleCardImage } from './ArticleCardImage';

const categories = [
  // ... (your existing categories array)
];

export function FaqWithHeader() {
  const isLargeScreen = useMediaQuery('(min-width: 768px)'); // Adjust the breakpoint as needed

  const items = categories.map((category) => (
    <UnstyledButton
      style={{ backgroundImage: `url(${category.image})` }}
      className={classes.categoryCard}
      key={category.label}
    >
      <Overlay color="#000" opacity={0.6} zIndex={1} />
      <Text size="xl" ta="center" fw={700} className={classes.categoryLabel}>
        {category.label}
      </Text>
    </UnstyledButton>
  ));

  return (
    <Container className={classes.wrapper} size="lg">
      <div className={classes.header}>
        <div>
          <Title className={classes.title}>Get the best experience.</Title>
          <Title className={classes.titleOverlay} role="presentation">
            INSTAMEDIC
          </Title>
        </div>

        <div className={classes.contact}>
          <Text size="xl" fw={500} className={classes.contactTitle}>
            You can book that surgery as early as possible.
          </Text>

          {isLargeScreen && <ArticleCardImage />} {/* Conditionally render based on screen size */}
        </div>
      </div>

      <SimpleGrid cols={{ base: 1, sm: 3 }}>{items}</SimpleGrid>
    </Container>
  );
}
