import React from "react";
import { Link } from "react-router-dom";

function Landing() {
    return (
        <div>
            <div
                className="container-fluid"
                style={{
                    background: `linear-gradient(135deg, #6E48AA, #4776E6)`,
                    padding: '50px 0',
                    color: `#FFFFFF`,
                }}
            >
                {/* Header Section */}
                <div className="text-center">
                    <h1 style={{ fontSize: `4em`, textShadow: `0 0 7px #CFFF47` }}>GAME BASED TRACKER FOR</h1>
                    <h1 style={{ fontSize: `8rem`, textShadow: `0 0 7px #CFFF47` }}>🦋ADHD🦋</h1>
                    <h2 style={{ fontSize: `2em`, textShadow: `0 0 7px #CFFF47` }}>Attention Deficit Hyperactive Disorder</h2>
                </div>

                {/* Features Section */}
                <div className="d-flex flex-column align-items-center mt-5">
                    <div
                        className="text-center p-3 feature-card"
                        style={{
                            backgroundColor: `#2D2D2D`, // Deep Charcoal
                            borderRadius: '10px',
                            margin: '10px 0',
                            width: '95%',
                            maxWidth: '800px',
                            padding: '20px',
                            transition: 'transform 0.5s ease, box-shadow 0.5s ease', // Smoother transition
                            color: `#FFFFFF`, // White text
                            border: `2px solid #CFFF47`, // Electric Lime border
                        }}
                    >
                        <span style={{ fontSize: `4em`, color: `#CFFF47` }}>🎮</span>
                        <h3 style={{ fontSize: `2em`, textShadow: `0 0 1px #CFFF47`, marginTop: '10px' }}>Play Games and Score!</h3>
                        <p style={{ fontSize: `1.2em` }}>Challenge yourself to games and develop your skills.</p>
                    </div>
                    <div
                        className="text-center p-3 feature-card"
                        style={{
                            backgroundColor: `#2D2D2D`, // Deep Charcoal
                            borderRadius: '10px',
                            margin: '10px 0',
                            width: '95%',
                            maxWidth: '800px',
                            padding: '20px',
                            transition: 'transform 0.5s ease, box-shadow 0.5s ease', // Smoother transition
                            color: `#FFFFFF`, // White text
                            border: `2px solid #CFFF47`, // Electric Lime border
                        }}
                    >
                        <span style={{ fontSize: `4em`, color: `#CFFF47` }}>🏆</span>
                        <h3 style={{ fontSize: `2em`, textShadow: `0 0 1px #CFFF47`, marginTop: '10px' }}>Win in Games and Life!</h3>
                        <p style={{ fontSize: `1.2em` }}>Watch your scores skyrocket and your attitude change!</p>
                    </div>
                    <div
                        className="text-center p-3 feature-card"
                        style={{
                            backgroundColor: `#2D2D2D`, // Deep Charcoal
                            borderRadius: '10px',
                            margin: '10px 0',
                            width: '95%',
                            maxWidth: '800px',
                            padding: '20px',
                            transition: 'transform 0.5s ease, box-shadow 0.5s ease', // Smoother transition
                            color: `#FFFFFF`, // White text
                            border: `2px solid #CFFF47`, // Electric Lime border
                        }}
                    >
                        <span style={{ fontSize: `4em`, color: `#CFFF47` }}>📈</span>
                        <h3 style={{ fontSize: `2em`, textShadow: `0 0 1px #CFFF47`, marginTop: '10px' }}>Note your Progress!</h3>
                        <p style={{ fontSize: `1.2em` }}>Be proud of how far you have come along!</p>
                    </div>
                </div>

                {/* Call-to-Action Section */}
                <div className="row mt-5">
                    <div className="col-12 text-center">
                        <Link
                            to="/login"
                            className="btn btn-lg get-started-btn"
                            style={{
                                fontWeight: `700`,
                                padding: '15px 30px',
                                borderRadius: '5px',
                                backgroundColor: `#CFFF47`,
                                color: `#333333`,
                                transition: 'transform 0.5s ease, box-shadow 0.5s ease', // Smooth transition
                            }}
                        >
                            GET STARTED
                        </Link>
                    </div>
                </div>
            </div>

            {/* Hover Effect Styles */}
            <style>
                {`
                    .feature-card:hover {
                        transform: scale(1.05);
                        box-shadow: 0 15px 30px rgba(207, 255, 71, 0.5); // Electric Lime shadow
                    }

                    .get-started-btn:hover {
                        transform: scale(1.1); /* Slightly larger on hover */
                        box-shadow: 0 10px 20px rgba(207, 255, 71, 0.5); /* Electric Lime shadow */
                    }
                `}
            </style>
        </div>
    );
}

export default Landing;