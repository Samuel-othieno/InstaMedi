import { ThemeIcon, Text, Title, Container, SimpleGrid, rem } from '@mantine/core';
import { IconGauge, IconCookie, IconUser, IconMessage2, IconLock } from '@tabler/icons-react';
import classes from './FeaturesGrid.module.css';

export const MOCKDATA = [
  {
    icon: IconGauge,
    title: 'Extreme performance',
    description:
      'Our telehealth platform delivers exceptional performance, ensuring seamless and high-quality video consultations. Experience the power of efficient and reliable virtual healthcare from the comfort of your own space.',
  },
  {
    icon: IconUser,
    title: 'Privacy focused',
    description:
      'Your privacy is our top priority. Our platform employs robust security measures to protect your health information during virtual consultations. Rest assured that your telehealth experience is as confidential as an in-person visit.',
  },
  {
    icon: IconCookie,
    title: 'No third parties',
    description:
      'We prioritize the security of your medical data. Unlike some platforms, we dont share your health information with third parties. Your telehealth sessions remain between you and your healthcare provider, maintaining the trust and integrity of your healthcare journey.',
  },
  {
    icon: IconLock,
    title: 'Secure by default',
    description:
      'Our telehealth platform is designed with security at its core. While it cant physically fly, rest assured that your data is safeguarded with outstanding security features. Your telehealth interactions are as secure as the unique capabilities of our platform.',
  },
  {
    icon: IconMessage2,
    title: '24/7 Support',
    description:
      'Access support whenever you need it. Our platform offers round-the-clock assistance to address your concerns and ensure a smooth telehealth experience. Whether youre casually connecting with healthcare professionals or urgently seeking medical advice, our support is just a click away.',
  },
];

interface FeatureProps {
  icon: React.FC<any>;
  title: React.ReactNode;
  description: React.ReactNode;
}

export function Feature({ icon: Icon, title, description }: FeatureProps) {
  return (
    <div>
      <ThemeIcon variant="light" size={40} radius={40}>
        <Icon style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
      </ThemeIcon>
      <Text mt="sm" mb={7}>
        {title}
      </Text>
      <Text size="sm" c="dimmed" lh={1.6}>
        {description}
      </Text>
    </div>
  );
}

export function FeaturesGrid() {
  const features = MOCKDATA.map((feature, index) => <Feature {...feature} key={index} />);

  return (
    <Container className={classes.wrapper}>
      <Title className={classes.title}>Addressing your concerns from the comfort of your home.</Title>

  
      <SimpleGrid
        mt={60}
        cols={{ base: 1, sm: 2, md: 3 }}
        spacing={{ base: 'xl', md: 50 }}
        verticalSpacing={{ base: 'xl', md: 50 }}
      >
        {features}
      </SimpleGrid>
    </Container>
  );
}