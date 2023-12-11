import React, { useState } from "react";
import { useDisclosure } from "@mantine/hooks";
import { Modal, Button, TextInput, Text, Title, Select } from "@mantine/core";
import "./Booking.css";
import emailjs from '@emailjs/browser';

function Booking() {
  const [opened, { open, close }] = useDisclosure(false);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [preferredDate, setPreferredDate] = useState("");
  const [preferredTime, setPreferredTime] = useState("");
  const [healthSpecialty, setHealthSpecialty] = useState("");

  const handleBooking = (e) => {
    e.preventDefault();

    const ModalData = {
      fullName: fullName,
      email: email,
      phoneNumber: phoneNumber,
      preferredDate: preferredDate,
      preferredTime: preferredTime,
      healthSpecialty: healthSpecialty,
    };
    emailjs
      .send(
        "service_m93uxom",
        "template_ya1c8ce",
        ModalData,
        "zURqvkfNFGbS0_327"
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
        },
        (error) => {
          console.log("FAILED...", error);
        }
      );
     
     
      e.target.reset()
  };

  return (
    <>
      <Modal opened={opened} onClose={close} title="Book an Appointment">
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
          data={[
            "Dentist",
            "Mid-Wife",
            "Therapist",
            "Optician",
            "Gynacologist",
            "Cardiology",
            "Dermatology",
            "Orthopedics",
            "Other",
          ]}
          value={healthSpecialty}
          onChange={(value) => setHealthSpecialty(value)}
        />

        { }

        <Button
          type="submit"
          onClick={handleBooking}
          className="bg-blue-900 m-auto"
          fullWidth
        >
          Book Appointment
        </Button>
      </Modal>

      <Button id="modal-button" onClick={open}>
        Book Now
      </Button>

     
    </>
  );
}

export default Booking;
