import React from "react";
import { UsersRolesTable } from "./Providers/UsersRolesTable";
import { HeroBullets2 } from "./Providers/HeroBullets2";

function Providers() {
    return (
        <>
        <HeroBullets2 />
        <UsersRolesTable/>
        </>
    );
}

export default Providers;



/*// App.js
import React, { useState } from "react";
import Providers from "./Providers";
import SignUpPage from "./SignUpPage";
import LogInPage from "./LogInPage";

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isSigningUp, setIsSigningUp] = useState(false);
  
    // Function to set the logged-in state
    const handleLogin = () => {
      setIsLoggedIn(true);
    };
  
    // Function to set the signed-up state and switch to login view
    const handleSignUp = () => {
      setIsLoggedIn(true);
      setIsSigningUp(false);
    };
  
    // Function to switch to signup view
    const showSignUp = () => {
      setIsSigningUp(true);
    };
  
    // Function to switch to login view
    const showLogin = () => {
      setIsSigningUp(false);
    };

  return (
    <>
      {!isLoggedIn ? (
        <>
         <div className="flex justify-end mt-4 space-x-4">
  <button
    onClick={showSignUp}
    className="bg-blue-500 text-white px-4 py-2 rounded"
  >
    Sign Up
  </button>
  <button
    onClick={showLogin}
    className="bg-gray-500 text-white px-4 py-2 rounded"
  >
    Log In
  </button>
</div>

          {isSigningUp ? (
            <SignUpPage onSignUp={handleSignUp} />
          ) : (
            <LogInPage onLogin={handleLogin} />
          )}
         
        </>
      ) : (
        <Providers />
      )}
    </>
  );
}

export default App;
*/