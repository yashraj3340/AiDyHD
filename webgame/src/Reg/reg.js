import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Reg() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [age, setAge] = useState("");
  const [message, setMessage] = useState("");
  const [isError, setIsError] = useState(false); // New state to track error or success
  const [redirect, setRedirect] = useState(false);

  const registerUser = () => {
    fetch("http://localhost:8000/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username: username, password: password, age: age }), // Send both username and password in the request body
    })
      .then((res) => res.json())
      .then((data) => {
        setMessage(data.message);
        if (data.message === "User Registered Successfully!") {
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

  const handleReg = () => {
    if (redirect) {
      window.location.href = '/login';
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
        className="col-md-6 col-lg-5 p-5" // Increased size of the box
        style={{
          border: '2px solid #CFFF47', // Electric Lime border
          borderRadius: '15px',
          background: 'rgba(0, 0, 0, 0.6)', // Semi-transparent black
          backdropFilter: 'blur(15px)',
          padding: '40px',
        }}
      >
        <h2
          className="text-center"
          style={{
            color: `#CFFF47`, // Electric Lime text
            fontWeight: `700`,
            fontFamily: 'Arial, sans-serif',
            textShadow: `0 0 7px #CFFF47`,
          }}
        >
          Register
        </h2>
        <input
          type="text"
          placeholder="Username"
          value={username}
          style={{
            borderRadius: '10px',
            padding: '15px',
            border: '2px solid #CFFF47', // Electric Lime border
            marginBottom: '20px',
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
            borderRadius: '10px',
            padding: '15px',
            border: '2px solid #CFFF47', // Electric Lime border
            marginBottom: '20px',
            width: '100%',
            backgroundColor: '#333333', // Dark input background
            color: '#FFFFFF',
          }}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type="number"
          placeholder="Age"
          value={age}
          style={{
            borderRadius: '10px',
            padding: '15px',
            border: '2px solid #CFFF47', // Electric Lime border
            marginBottom: '20px',
            width: '100%',
            backgroundColor: '#333333', // Dark input background
            color: '#FFFFFF',
          }}
          onChange={(e) => setAge(e.target.value)}
        />
        <button
          onClick={() => {
            registerUser();
            handleReg();
          }}
          className="btn register-btn fw-bold"
          style={{
            borderRadius: '10px',
            width: '100%',
            padding: '15px',
            backgroundColor: '#CFFF47', // Changed to Electric Lime
            color: '#333333', // Charcoal text
            fontWeight: '700',
            transition: 'transform 0.5s ease, box-shadow 0.5s ease', // Smooth transition
          }}
        >
          {redirect ? 'LOGIN' : 'REGISTER'}
        </button>
        <h6 className="text-center mt-3" style={{ color: '#FFFFFF' }}>
          Already have an account?
          <Link
            to="/login"
            style={{
              textDecoration: 'none',
              color: '#CFFF47', // Electric Lime
              paddingLeft: '5px',
              fontWeight: 'bolder',
            }}
          >
            Login here
          </Link>
        </h6>
        {message && (
          <h5
            className="text-center mt-3"
            style={{
              backgroundColor: isError ? '#FF4D4D' : '#4776E6', // Red for error, Blue for success
              padding: `15px`,
              borderRadius: `10px`,
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
          .register-btn:hover {
            transform: scale(1.1); /* Slightly larger on hover */
            box-shadow: 0 10px 20px rgba(207, 255, 71, 0.5); /* Electric Lime shadow */
          }
        `}
      </style>
    </div>
  );
}