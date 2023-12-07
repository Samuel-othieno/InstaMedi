import React, { useState } from 'react';
import {
  Paper,
  TextInput,
  PasswordInput,
  Checkbox,
  Button,
  Title,
  Text,
  Anchor,
} from '@mantine/core';

export function DoctorLogIn({onSignUpClick}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleLogin = () => {
    
    console.log('Logging in with:', email, password, rememberMe);
  };

  return (
    <div className="flex min-h-screen">
      {/* Image Container */}
      <div
        className="flex-1 bg-cover"
        style={{
          backgroundImage: 'url(https://wallpaperaccess.com/full/3718212.jpg)',
        }}
      ></div>

      {/* Form Container */}
      <div className="flex-1 border-r border-gray-300 p-10">
        <Paper radius={0} p={10} className="max-w-md mx-auto">
          <Title order={2} className="text-center mb-6">
            Doctor's Login
          </Title>

          <TextInput
            label="Email address"
            placeholder="hello@gmail.com"
            size="md"
            className="mb-4"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <PasswordInput
            label="Password"
            placeholder="Your password"
            mt="md"
            size="md"
            className="mb-4"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
          <Checkbox
            label="Remember me"
            mt="xl"
            size="md"
            className="mb-4"
            checked={rememberMe}
            onChange={(event) => setRememberMe(event.target.checked)}
          />
          <div className="flex justify-center mb-4">
            <Button
              fullWidth
              size="md"
              onClick={handleLogin}
              color="dark-blue"
              style={{
                backgroundColor: "#3498db", // Blue color
                color: "#fff",
                width: "50%",
                borderRadius: "7%",
              }}
            >
              Login
            </Button>
          </div>

          
        </Paper>
      </div>
    </div>
  );
}

export default DoctorLogIn;
