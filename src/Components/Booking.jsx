import React, { useState } from 'react';
import { useDisclosure } from '@mantine/hooks';
import { Modal, Button, TextInput, Text, Title, Select } from '@mantine/core';

function Booking() {
  const [opened, { open, close }] = useDisclosure(false);

  // State variables for form inputs
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [preferredDate, setPreferredDate] = useState('');
  const [preferredTime, setPreferredTime] = useState('');
  const [healthSpecialty, setHealthSpecialty] = useState('');

  const handleBooking = () => {
    // Perform booking logic here
    // You can send data to a server, update state, etc.
    // For now, let's just close the modal
    close();
  };

  return (
    <>
      <Modal opened={opened} onClose={close} title="Book an Appointment">
        {/* Modal content */}
        <Title order={4}>Patient Information</Title>
        <TextInput
          label="Full Name"
          placeholder="Enter your full name"
          value={fullName}
          onChange={(event) => setFullName(event.target.value)}
        />
        <TextInput
          label="Email"
          placeholder="Enter your email"
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <TextInput
          label="Phone Number"
          placeholder="Enter your phone number"
          type="tel"
          value={phoneNumber}
          onChange={(event) => setPhoneNumber(event.target.value)}
        />

        <Title order={4} mt="lg">
          Appointment Details
        </Title>
        <TextInput
          label="Preferred Date"
          type="date"
          value={preferredDate}
          onChange={(event) => setPreferredDate(event.target.value)}
        />
        <TextInput
          label="Preferred Time"
          type="time"
          value={preferredTime}
          onChange={(event) => setPreferredTime(event.target.value)}
        />
        <Select
          label="Health Specialty"
          placeholder="Select health specialty"
          data={['Dentist','Mid-Wife','Tharapist','Optician','Gynacologist','Cardiology', 'Dermatology', 'Orthopedics', 'Other']}
          value={healthSpecialty}
          onChange={(value) => setHealthSpecialty(value)}
        />

        {/* Additional booking form fields can be added as needed */}

        <Button
          onClick={handleBooking}
          style={{ marginTop: '20px' }}
          color="blue"
          fullWidth
        >
          Book Appointment
        </Button>
      </Modal>

      <Button onClick={open}>Book Now</Button>
    </>
  );
}

export default Booking;
