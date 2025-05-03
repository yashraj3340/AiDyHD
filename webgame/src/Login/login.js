import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [isError, setIsError] = useState(false); // New state to track error or success
  const [redirect, setRedirect] = useState(false);

  const authenticateCredentials = () => {
    fetch("http://localhost:8000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username: username, password: password }),
    })
      .then((res) => res.json())
      .then((data) => {
        setMessage(data.message);
        if (data.message === "Authentication Successful!") {
          setIsError(false); // Success
          setRedirect(true);
        } else {
          setIsError(true); // Error
        }
      })
      .catch((error) => {
        console.error("Error sending message:", error);
        setMessage("An error occurred. Please try again.");
        setIsError(true); // Error
      });
  };

  const handleLogin = () => {
    if (redirect) {
      window.location.href = '/profile';
    }
  };

  return (
    <div
      className="container-fluid d-flex align-items-center justify-content-center"
      style={{
        background: `linear-gradient(135deg, #6E48AA, #4776E6)`, // Modern Gradient Energy background
        minHeight: '100vh',
        color: `#FFFFFF`,
      }}
    >
      <div
        className="col-md-4 p-4"
        style={{
          backgroundColor: '#2D2D2D', // Deep Charcoal background
          borderRadius: '10px',
          boxShadow: '0 10px 30px rgba(207, 255, 71, 0.5)', // Electric Lime shadow
          padding: '30px',
        }}
      >
        <h2
          className="text-center mb-4"
          style={{
            color: `#CFFF47`, // Electric Lime text
            fontWeight: `700`,
            fontFamily: 'Arial, sans-serif',
            textShadow: `0 0 7px #CFFF47`,
          }}
        >
          SIGN IN
        </h2>
        <input
          type="text"
          placeholder="Username"
          value={username}
          style={{
            borderRadius: '5px',
            padding: '10px',
            border: '1px solid #CFFF47', // Electric Lime border
            marginBottom: '15px',
            width: '100%',
            backgroundColor: '#333333', // Dark input background
            color: '#FFFFFF',
          }}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          style={{
            borderRadius: '5px',
            padding: '10px',
            border: '1px solid #CFFF47', // Electric Lime border
            marginBottom: '15px',
            width: '100%',
            backgroundColor: '#333333', // Dark input background
            color: '#FFFFFF',
          }}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className="d-flex justify-content-end mb-3">
          <Link
            to="/register"
            style={{
              textDecoration: 'none',
              color: '#CFFF47', // Updated to Electric Lime
              fontWeight: 'bold',
              fontSize: '0.9em',
            }}
          >
            Signup
          </Link>
        </div>
        <button
          onClick={() => {
            authenticateCredentials();
            handleLogin();
          }}
          className="btn login-btn fw-bold"
          style={{
            borderRadius: '5px',
            width: '100%',
            padding: '10px',
            backgroundColor: '#CFFF47', // Electric Lime button
            color: '#333333', // Charcoal text
            fontWeight: '700',
            transition: 'transform 0.5s ease, box-shadow 0.5s ease', // Smooth transition
          }}
        >
          Login
        </button>
        {message && (
          <h5
            className="text-center mt-3"
            style={{
              backgroundColor: isError ? '#FF4D4D' : '#4776E6', // Red for error, Blue for success
              padding: `10px`,
              borderRadius: `8px`,
              fontWeight: `600`,
              fontFamily: `monospace`,
              color: '#FFFFFF', // White text for contrast
            }}
          >
            {message}
          </h5>
        )}
      </div>

      {/* Hover Effect Styles */}
      <style>
        {`
          .login-btn:hover {
            transform: scale(1.1); /* Slightly larger on hover */
            box-shadow: 0 10px 20px rgba(207, 255, 71, 0.5); /* Electric Lime shadow */
          }
        `}
      </style>
    </div>
  );
}