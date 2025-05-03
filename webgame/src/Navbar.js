import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
    const [isLoggedIn, setIsLoggedIn] = useState(false); // State to track login status

    useEffect(() => {
        fetch("http://localhost:8000/logout")
            .then((res) => res.json())
            .then((data) => {
                setIsLoggedIn(data.success);
            })
            .catch((error) => {
                console.error("Error logging out:", error);
            });
    }, []);

    const handleLogout = () => {
        setIsLoggedIn(false);
        fetch("http://localhost:8000/logout", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ success: true }), // Send message in the request body
        });
    };

    return (
        <div>
            <nav
                className="navbar navbar-expand-sm navbar-dark"
                style={{
                    background: `linear-gradient(135deg, #6E48AA, #4776E6)`, // Gradient background
                    padding: '10px 20px',
                }}
            >
                <div className="container">
                    <a className="navbar-brand" href="/" style={{ color: `#CFFF47`, fontWeight: '700' }}>
                        AiDyHD
                    </a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="nav navbar-nav ms-auto">
                            <li className="navitem">
                                {isLoggedIn ? (
                                    <div>
                                        <Link
                                            to="/profile"
                                            className="btn"
                                            style={{
                                                backgroundColor: `#CFFF47`, // Lime green button
                                                color: `#333333`,
                                                borderRadius: `10px`,
                                                marginLeft: '10px',
                                                fontWeight: '500',
                                                transition: 'transform 0.5s ease, box-shadow 0.5s ease', // Smooth transition
                                            }}
                                        >
                                            PROFILE
                                        </Link>
                                        <Link
                                            to="/"
                                            onClick={handleLogout}
                                            className="btn"
                                            style={{
                                                backgroundColor: `#FF4D4D`, // Red for logout
                                                color: `#FFFFFF`,
                                                borderRadius: `10px`,
                                                marginLeft: '10px',
                                                fontWeight: '500',
                                                transition: 'transform 0.5s ease, box-shadow 0.5s ease', // Smooth transition
                                            }}
                                        >
                                            LOGOUT
                                        </Link>
                                    </div>
                                ) : (
                                    <div>
                                        <Link to="/" className="text-decoration-none">
                                            <span
                                                className="align-middle p-4"
                                                style={{
                                                    color: `#FFFFFF`,
                                                    fontWeight: '500',
                                                }}
                                            >
                                                HOME
                                            </span>
                                        </Link>
                                        <Link
                                            to="/login"
                                            className="btn login-btn"
                                            style={{
                                                backgroundColor: `#CFFF47`, // Lime green button
                                                color: `#333333`,
                                                borderRadius: `10px`,
                                                marginLeft: '10px',
                                                fontWeight: '500',
                                                transition: 'transform 0.5s ease, box-shadow 0.5s ease', // Smooth transition
                                            }}
                                        >
                                            LOGIN
                                        </Link>
                                    </div>
                                )}
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

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