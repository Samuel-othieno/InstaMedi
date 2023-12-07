import React, { useState } from "react";
import {
  Paper,
  TextInput,
  PasswordInput,
  Checkbox,
  Button,
  Title,
} from "@mantine/core";

export function SignUpPage({ onSignInClick }) {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [nin, setNIN] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [agreeToTerms, setAgreeToTerms] = useState(false);

  const handleSignUp = () => {
    console.log("Signing up with:", {
      fullName,
      email,
      nin,
      password,
      confirmPassword,
      agreeToTerms,
    });
  };

  return (
    <div className="flex min-h-screen">
      {/* Image Container */}
      <div
        className="flex-1 bg-contain bg-no-repeat hidden sm:block" // Hide on small screens
        style={{
          backgroundImage: `url(https://wallpaperaccess.com/full/3718212.jpg)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      ></div>

      {/* Form Container */}
      <div className="flex-1 border-r border-gray-300 p-10">
        <Paper radius={0} p={10} className="max-w-md mx-auto">
          <Title order={2} className="text-center mb-6">
            Create a Patient's Account
          </Title>

          {/* Full Name Input */}
          <TextInput
            label="Full Name"
            placeholder="John Doe"
            size="md"
            className="mb-4 sm:block" // Show on big screens, hide on small screens
            value={fullName}
            onChange={(event) => setFullName(event.target.value)}
          />

          {/* Email Input */}
          <TextInput
            label="Email address"
            placeholder="hello@gmail.com"
            size="md"
            className="mb-4 sm:block" // Show on big screens, hide on small screens
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />

          {/* NIN Input */}
          <TextInput
            label="NIN"
            placeholder="Your National Identification Number"
            size="md"
            className="mb-4 sm:block" // Show on big screens, hide on small screens
            value={nin}
            onChange={(event) => setNIN(event.target.value)}
          />

          {/* Password Input */}
          <PasswordInput
            label="Password"
            placeholder="Your password"
            mt="md"
            size="md"
            className="mb-4 sm:block" // Show on big screens, hide on small screens
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />

          {/* Confirm Password Input */}
          <PasswordInput
            label="Confirm Password"
            placeholder="Confirm your password"
            mt="md"
            size="md"
            className="mb-4 sm:block" // Show on big screens, hide on small screens
            value={confirmPassword}
            onChange={(event) => setConfirmPassword(event.target.value)}
          />

          <Checkbox
            label="I agree to the terms and conditions"
            mt="xl"
            size="md"
            className="mb-4 sm:block" // Show on big screens, hide on small screens
            checked={agreeToTerms}
            onChange={(event) => setAgreeToTerms(event.target.checked)}
          />

          <div className="flex justify-center mb-4">
            <Button
              fullWidth
              size="md"
              onClick={handleSignUp}
              color="dark-blue"
              style={{
                backgroundColor: "#3498db", // Blue color
                color: "#fff",
                width: "50%",
                borderRadius: "7%",
              }}
            >
              Sign Up
            </Button>
          </div>
        </Paper>
      </div>
    </div>
  );
}

export default SignUpPage;
