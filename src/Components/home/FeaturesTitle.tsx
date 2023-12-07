import { Title, SimpleGrid, Text, Button, ThemeIcon, Grid, rem } from '@mantine/core';
import { IconCloudComputing, IconPill, IconMessages, IconDental } from '@tabler/icons-react';
import classes from './FeaturesTitle.module.css';

const features = [
  {
    icon: IconDental,
    title: 'Remote Monitoring',
    description: 'Monitor patients vital signs and health metrics remotely. This is particularly useful for managing chronic conditions or post-operative care.',
  },
  {
    icon: IconCloudComputing,
    title: 'Virtual Consultations',
    description: ' Patients can have real-time video or audio consultations with healthcare providers, allowing them to discuss medical concerns, receive diagnoses, and get treatment recommendations.',
  },
  {
    icon: IconPill,
    title: 'Digital Prescriptions',
    description:
      ' Healthcare professionals can electronically prescribe medications, making it convenient for patients to obtain necessary drugs without visiting a physical pharmacy.',
  },
  {
    icon: IconMessages,
    title: 'Secure Communication',
    description:
      'Prioritize the security and privacy of patient information, ensuring compliance with healthcare regulations. Secure messaging and video conferencing tools protect the confidentiality of medical discussions.',
  },
  {
    icon: IconMessages,
    title: 'Secure Communication',
    description:
      'Prioritize the security and privacy of patient information, ensuring compliance with healthcare regulations. Secure messaging and video conferencing tools protect the confidentiality of medical discussions.',
  },
];

export function FeaturesTitle() {
  const items = features.map((feature) => (
    <div key={feature.title}>
      <ThemeIcon
        size={44}
        radius="md"
        variant="gradient"
        gradient={{ deg: 133, from: 'blue', to: 'cyan' }}
      >
        <feature.icon style={{ width: rem(26), height: rem(26) }} stroke={1.5} />
      </ThemeIcon>
      <Text fz="lg" mt="sm" fw={500}>
        {feature.title}
      </Text>
      <Text c="dimmed" fz="sm">
        {feature.description}
      </Text>
    </div>
  ));

  return (
    <div className={classes.wrapper}>
      <Grid gutter={80}>
        <Grid.Col span={{ base: 12, md: 5 }} >
          <Title className={classes.title} order={2}>
          Book hassle-free online doctor appointments. <br/>
          
          </Title>
          <Text c="dimmed" >
          Online doctor consultation from the comfort of your home. 
          Find and book appointment with doctors near you.
          <br/>Welcome to InstaMedi, your comprehensive telehealth platform. We bring quality healthcare to your fingertips, making it easy and convenient to connect with experienced doctors from the comfort of your home.
          </Text>

          <Button
            variant="gradient"
            gradient={{ deg: 133, from: 'blue', to: 'cyan' }}
            size="lg"
            radius="md"
            mt="xl"
          >
            Get started
          </Button>
        </Grid.Col>
        <Grid.Col span={{ base: 12, md: 7 }}>
          <SimpleGrid cols={{ base: 1, md: 2 }} spacing={30}>
            {items}
          </SimpleGrid>
        </Grid.Col>
      </Grid>
    </div>
  );
}