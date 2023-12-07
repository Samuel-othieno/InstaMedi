import { Avatar, Badge, Table, Group, Text, Select } from '@mantine/core';

const data = [
  {
    avatar:
      'https://i.pinimg.com/564x/12/aa/cc/12aacc1947ae1db37487a8512a6a7a6f.jpg',
    name: 'Robert Matovu',
    job: 'Medical Doctor',
    email: 'rob_wolf@gmail.com',
    role: '+256-77848484',
    lastActive: 'Medical Doctor',
    active: true,
  },
  {
    avatar:
      'https://media.istockphoto.com/id/1149511236/photo/you-wont-need-a-second-opinion-with-her-expertise.jpg?s=612x612&w=0&k=20&c=C1EDhKdnngyggavKzcJST0kFaxapsxfFPq9eHeJIgKM=',
    name: 'James Kajjoba',
    job: 'Medical Doctor',
    email: 'jj@breaker.com',
    role: '+256-758848487',
    lastActive: 'Medical Doctor',
    active: true,
  },
  {
    avatar:
      'https://media.istockphoto.com/id/1325914527/photo/professional-confident-black-pharmacist-wearing-lab-coat-and-glasses-crosses-arms-and-looks.jpg?s=612x612&w=0&k=20&c=EX5yKXKzBA5U9WqmWVZGMzxN4zC5ZvyTp_vDPQShay0=',
    name: 'Henry Sserugga',
    job: 'Medical Doctor',
    email: 'henry@silkeater.io',
    role: '+256-747474644',
    lastActive: 'Medical Doctor',
    active: false,
  },
  {
    avatar:
      'https://media.istockphoto.com/id/1468678603/photo/portrait-of-a-black-woman-doctor-happy-with-internship-opportunity-healthcare-career-and.jpg?s=612x612&w=0&k=20&c=t0VMbPOYv8YKezQoegsKibwKPOnaomBemK6MIEgYmjY=',
    name: 'Bill Atuhaise',
    job: 'Medical Doctor',
    email: 'bhorsefighter@gmail.com',
    role: '+256-724774747',
    lastActive: 'Medical Doctor',
    active: true,
  },
  {
    avatar:
      'https://media.istockphoto.com/id/472898220/photo/attractive-confident-african-doctor.jpg?s=612x612&w=0&k=20&c=McVt9A1R-T_eca6eOiorW02nkQJa-HcxnB4huAsCEuw=',
    name: 'Jeremy Nakunda',
    job: 'Medical Doctor',
    email: 'jeremy@foot.dev',
    role: '+256-70474735544',
    lastActive: 'Medical Doctor',
    active: false,
  },
];

const rolesData = ['+256-774646473', 'Goolge Meet'];


const natureOfMeetColumnStyles = {
  width: 50, // Adjust the width as needed
};

const googleMeetLink = 'https://meet.google.com/rad-qkfk-veb';

export function UsersRolesTable() {
  const rows = data.map((item) => (
    <Table.Tr key={item.name}>
      <Table.Td>
        <Group gap="sm">
          <Avatar
            size={window.innerWidth >= 800 ? 80 : 60}
            src={item.avatar}
            radius={40}
            style={{ border: '2px solid blue' }} // Add blue border
          />
          <div>
            <Text fz={window.innerWidth >= 800 ? 'md' : 'sm'} fw={500}>
              {item.name}
            </Text>
            <Text fz={window.innerWidth >= 800 ? 'sm' : 'xs'} c="dimmed">
              {item.email}
            </Text>
          </div>
        </Group>
      </Table.Td>

      <Table.Td>
        <Select
          data={['', ...rolesData]} 
          placeholder="Choose Meet Method"
          defaultValue={item.role}
          variant="unstyled"
          allowDeselect={false}
          onChange={(value) => handleRoleChange(value)}
        />
      </Table.Td>

      <Table.Td styles={natureOfMeetColumnStyles}>
        {item.lastActive}
      </Table.Td>

      <Table.Td>
        {item.active ? (
          <Badge fullWidth variant="light">
            Active
          </Badge>
        ) : (
          <Badge color="gray" fullWidth variant="light">
            Offline
          </Badge>
        )}
      </Table.Td>
    </Table.Tr>
  ));

  const handleRoleChange = (value) => {
    if (value === 'Goolge Meet') {
      window.open(googleMeetLink, '_blank');
    } else if (/^\+\d{3}-\d+$/.test(value)) {
      // Check if the value matches the phone number pattern
      window.open(`tel:${value}`, '_blank');
    }
    // Add additional handling for other roles if needed
  };

  return (
    <Table.ScrollContainer minWidth={800}>
      <Table verticalSpacing="sm">
        <Table.Thead>
          <Table.Tr>
            <Table.Th>Health Provider</Table.Th>
            <Table.Th styles={natureOfMeetColumnStyles}>
              Nature of Meet
            </Table.Th>
            
            <Table.Th>Role</Table.Th>
            <Table.Th>Status</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>{rows}</Table.Tbody>
      </Table>
    </Table.ScrollContainer>
  );
}