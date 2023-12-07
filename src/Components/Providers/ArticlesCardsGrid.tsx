import { SimpleGrid, Card, Image, Text, Container, AspectRatio } from '@mantine/core';
import classes from './ArticlesCardsGrid.module.css';

const mockdata = [
  {
    title: '"Beyond consultations, we connect you to a world of smiles and cutting-edge SERGERIES, ensuring your journey is seamless and comprehensive across various domains."',
    image:
      'https://images.unsplash.com/photo-1684607633217-462056580c3c?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    date: 'Surgery Bookings',
  },
  {
    title: '"Embark on the future of healthcare with us: Virtual consultations, personalized meets, and a brighter, healthier world just a click away!"',
    image:
      'https://media.istockphoto.com/id/1252880925/photo/african-doctor-in-video-conference-call-talking.jpg?s=612x612&w=0&k=20&c=-BvFAZC08GyE7J14h3hsEGYtMpQmLowBxQAqm09cbQE=',
    date: 'Virtual Consultation and Examination',
  },
  {
    title: '"Unlocking a healthier tomorrow: Your health records at your fingertips, empowering you to take control of your well-being with ease and precision."',
    image:
      'https://media.istockphoto.com/id/1335050732/photo/businessman-using-a-computer-to-document-management-concept-online-documentation-database-and.jpg?s=612x612&w=0&k=20&c=5zAzuOclaBXMudc56RisW9yNyGxLt3wO8Xh2wtShmo0=',
    date: 'Health Records ',
  },
  {
    title: '"Manage prescriptions, access health resources, and receive medications through secure and user-friendly online platforms"',
    image:
      'https://media.istockphoto.com/id/1325914413/photo/portrait-of-professional-black-male-pharmacist-holding-box-with-best-deal-face-masks-looking.jpg?s=612x612&w=0&k=20&c=GrNAANdZ66raAwbCF3vQ3A1vfk1sGuKOXV4DnnWgbDY=',
    date: 'Online Pharmacy',
  },
];

export function ArticlesCardsGrid() {
  const cards = mockdata.map((article) => (
    <Card key={article.title} p="md" radius="md" component="a" href="#" className={classes.card}>
      <AspectRatio ratio={1920 / 1080}>
        <Image src={article.image} />
      </AspectRatio>
      <Text c="dimmed" size="xs" tt="uppercase" fw={700} mt="md">
        {article.date}
      </Text>
      <Text className={classes.title} mt={5}>
        {article.title}
      </Text>
    </Card>
  ));

  return (
    <Container py="xl">
      <SimpleGrid cols={{ base: 1, sm: 2 }}>{cards}</SimpleGrid>
    </Container>
  );
}