import React, { useState } from "react";
import backgroundImage from './bg1.png';
import {
  Paper,
  TextInput,
  PasswordInput,
  Checkbox,
  Button,
  Title,
  Text,
  Anchor,
} from "@mantine/core";
import { Link } from 'react-router-dom';

export function LogInPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const handleLogin = () => {
    console.log("Logging in with:", email, password, rememberMe);
    // login logic here
  };

  return (
    <div className="flex flex-col lg:flex-row items-stretch min-h-screen">
      {/* Image Container */}
      <div
        className="flex-1 w-full lg:w-1/2 h-96 lg:h-auto"
        style={{
          background: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>

      {/* Form Container */}
      <div className="flex-1 w-full lg:w-1/2 lg:border-r lg:border-gray-300 p-10">
        <Paper radius={0} p={10} className="max-w-md mx-auto">
          <Title order={2} className="text-center mb-6">
            Patient Login.
          </Title>

          <TextInput
            label="Email address"
            placeholder="hello@gmail.com"
            size="md"
            className="mb-4 border-b-2 border-gray-300"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <PasswordInput
            label="Password"
            placeholder="Your password"
            mt="md"
            size="md"
            className="mb-4 border-b-2 border-gray-300"
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
            {/* Forgot Password */}
            <div className="text-center mb-4">
            <Link to="forgot-password">Forgot Password?</Link>
          </div>
          
        </Paper>
      </div>
    </div>
  );
}

export default LogInPage;
