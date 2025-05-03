import React, { useState, useEffect, useRef } from "react";
import pfp from "../assets/profile.jpg";
import { DoughnutGraph } from "./Circular";
import { Link, useNavigate } from "react-router-dom";
import "./profile.css";
import Questionnaire from "../Quiz/Questionnaire";
import Popup from "reactjs-popup";

export default function Profile() {
  const [userData, setUserData] = useState({
    message: "",
    username: "",
    age: "",
    score: 0,
    hanoimoves: 0,
    hanoitime: 0,
    eightQueen: 0,
    numberpuzzlemoves: 0,
    numberpuzzletime: 0,
    memoryright: 0,
    memorywrong: 0,
    memorytime: 0,
  });
  const [renderQuiz, setRenderQuiz] = useState(false);
  const [showNewUserPrompt, setShowNewUserPrompt] = useState(false);
  const [memory, setMemory] = useState(0);
  const [focus, setFocus] = useState(0);
  const [patience, setPatience] = useState(0);
  const [hyperactivity, setHyperactivity] = useState(0);
  const [hoveredCard, setHoveredCard] = useState(null); // Track which card is hovered
  const [hoveredButton, setHoveredButton] = useState(null); // Track which button is hovered
  const navigate = useNavigate();

  const quizSectionRef = useRef(null);

  useEffect(() => {
    // Check if user is logged in
    const profileData = localStorage.getItem("profileData");
    if (!profileData) {
      navigate("/login");
      return;
    }

    try {
      // Set initial data from localStorage
      const initialData = JSON.parse(profileData);
      setUserData((prevData) => ({
        ...prevData,
        ...initialData,
      }));

      // Check if user is new (score is 0) and hasn't seen the prompt before
      const hasSeenPrompt = localStorage.getItem(
        `hasSeenPrompt_${initialData.username}`
      );
      if (initialData.score === 0 && !hasSeenPrompt) {
        setShowNewUserPrompt(true);
      }

      // Set up periodic refresh
      const intervalId = setInterval(refreshProfileData, 5000);
      return () => clearInterval(intervalId);
    } catch (error) {
      console.error("Error parsing profile data:", error);
      localStorage.removeItem("profileData");
      navigate("/login");
    }
  }, [navigate]);

  useEffect(() => {
    if (renderQuiz && quizSectionRef.current) {
      quizSectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [renderQuiz]);

  const handleQuizStart = () => {
    setShowNewUserPrompt(false);
    setRenderQuiz(true);
    // Mark that user has seen the prompt
    localStorage.setItem(`hasSeenPrompt_${userData.username}`, "true");
    if (quizSectionRef.current) {
      quizSectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleQuizSkip = () => {
    setShowNewUserPrompt(false);
    // Mark that user has seen the prompt
    localStorage.setItem(`hasSeenPrompt_${userData.username}`, "true");
  };

  const handleQuiz = () => {
    setRenderQuiz(!renderQuiz);
    if (!renderQuiz) {
      refreshProfileData();
    }
  };

  useEffect(() => {
    if (userData.score !== undefined) {
      updateMemory();
      updateFocus();
      updatePatience();
      updateHyperactivity();
    }
  }, [userData]);

  const updateMemory = () => {
    setMemory(2.5 * userData.memoryright);
  };

  const updateFocus = () => {
    let temp;
    let memorytime = userData.memorytime;
    let eightQueen = userData.eightQueen;
    let hanoimoves = userData.hanoimoves;
    if (memorytime < 60) {
      temp = 4;
    } else if (memorytime < 120) {
      temp = 3;
    } else if (memorytime < 180) {
      temp = 2;
    } else if (memorytime < 240) {
      temp = 1;
    } else {
      temp = 0;
    }
    let temp2 = 0;
    if (((30 - hanoimoves) * 8) / 15 > 0) {
      temp2 = ((30 - hanoimoves) * 8) / 15;
    }
    setFocus(eightQueen + temp2 + temp);
  };

  const updatePatience = () => {
    let temp = 5;
    let numberpuzzlemoves = userData.numberpuzzlemoves;
    let hanoimoves = userData.hanoimoves;
    if (numberpuzzlemoves < 100) {
      temp = 12;
    } else if (numberpuzzlemoves < 120) {
      temp = 11;
    } else if (numberpuzzlemoves < 140) {
      temp = 10;
    } else if (numberpuzzlemoves < 160) {
      temp = 9;
    } else if (numberpuzzlemoves < 200) {
      temp = 7;
    } else if (numberpuzzlemoves < 220) {
      temp = 6;
    } else if (numberpuzzlemoves < 300) {
      temp = 5;
    }
    let temp2 = 0;
    if (((30 - hanoimoves) * 8) / 15 > 0) {
      temp2 = ((30 - hanoimoves) * 8) / 15;
    }
    setPatience(temp2 + temp);
  };

  const updateHyperactivity = () => {
    let temp1 = 0;
    let memorywrong = userData.memorywrong;
    let numberpuzzlemoves = userData.numberpuzzlemoves;
    if (memorywrong <= 8) {
      temp1 = 10;
    } else {
      if (20 - (6 * memorywrong) / 5 > 0) {
        temp1 = 20 - (6 * memorywrong) / 5;
      }
    }
    let temp2;
    if (numberpuzzlemoves < 140) {
      temp2 = 10;
    } else if (numberpuzzlemoves < 160) {
      temp2 = 9;
    } else if (numberpuzzlemoves < 200) {
      temp2 = 7;
    } else if (numberpuzzlemoves < 220) {
      temp2 = 6;
    } else if (numberpuzzlemoves < 300) {
      temp2 = 5;
    } else {
      temp2 = 0;
    }
    setHyperactivity(temp1 + temp2);
  };

  const total_score =
    40 - userData.score + memory - hyperactivity + patience + focus;

  const handleMouseEnter = (cardId) => {
    setHoveredCard(cardId); // Set the hovered card ID
  };

  const handleMouseLeave = () => {
    setHoveredCard(null); // Reset the hovered card ID
  };

  const getCardStyle = (cardId) => ({
    backgroundColor: "#2D2D2D", // Deep Charcoal color for the card
    borderRadius: "15px",
    boxShadow:
      hoveredCard === cardId
        ? "0 8px 20px rgba(207, 255, 71, 0.6)"
        : "0 6px 15px rgba(0, 0, 0, 0.3)", // Glow on hover
    border: "2px solid #CFFF47", // Electric Lime accent border
    color: "#FFFFFF", // White text
    marginBottom: "25px", // Add spacing between cards
    transform: hoveredCard === cardId ? "scale(1.05)" : "scale(1)", // Slightly enlarge on hover
    transition: "transform 0.3s ease, box-shadow 0.3s ease", // Smooth hover effect
  });

  const getButtonStyle = (buttonId) => ({
    fontWeight: "500",
    backgroundColor: hoveredButton === buttonId ? "#AFFF80" : "#CFFF47", // Lighter Lime Green on hover
    color: "#000000", // Black text for contrast
    border: "none",
    transition: "background-color 0.3s ease", // Smooth hover effect
  });

  const refreshProfileData = () => {
    fetch("http://localhost:8000/profile")
      .then((res) => res.json())
      .then((data) => {
        setUserData((prevData) => ({
          ...prevData,
          ...data,
        }));
      })
      .catch((error) => {
        console.error("Error fetching profile data:", error);
      });
  };

  return (
    <div
      className="container-fluid"
      style={{
        background: "linear-gradient(135deg, #6E48AA, #4776E6)", // Purple to Blue gradient
        color: "#FFFFFF", // White text for contrast
      }}
    >
      {/* New User Questionnaire Prompt */}
      <Popup
        open={showNewUserPrompt}
        modal
        closeOnDocumentClick={false}
        contentStyle={{
          backgroundColor: "#2D2D2D",
          border: "2px solid #CFFF47",
          borderRadius: "10px",
          padding: "20px",
          color: "#FFFFFF",
          width: "80%",
          maxWidth: "500px",
        }}
      >
        <div className="text-center">
          <h3 style={{ color: "#CFFF47", marginBottom: "20px" }}>
            Welcome to AiDyHD!
          </h3>
          <p style={{ marginBottom: "20px" }}>
            To get started, we recommend taking our initial questionnaire to
            assess your current state. This will help us provide you with a
            personalized experience.
          </p>
          <div className="d-flex justify-content-center gap-3">
            <button
              onClick={handleQuizStart}
              style={{
                backgroundColor: "#CFFF47",
                color: "#333333",
                border: "none",
                padding: "10px 20px",
                borderRadius: "5px",
                fontWeight: "bold",
                cursor: "pointer",
              }}
            >
              Take Questionnaire
            </button>
            <button
              onClick={handleQuizSkip}
              style={{
                backgroundColor: "transparent",
                color: "#CFFF47",
                border: "2px solid #CFFF47",
                padding: "10px 20px",
                borderRadius: "5px",
                fontWeight: "bold",
                cursor: "pointer",
              }}
            >
              Skip for Now
            </button>
          </div>
        </div>
      </Popup>

      <div className="row p-5">
        <div
          className="col-md-6 text-white mx-5 py-3 px-4"
          style={{
            border: "1px solid #CFFF47", // Electric Lime accent border
            borderRadius: "10px",
            background: "transparent",
            backdropFilter: "blur(15px)",
          }}
        >
          <div className="row">
            <div className="col-md-5 text-center">
              <div>
                <DoughnutGraph
                  score={userData.score}
                  memory={memory}
                  focus={focus}
                  patience={patience}
                  hyperactivity={hyperactivity}
                />
              </div>
              <Link
                to="/training"
                className="btn btn-warning mt-3 text-center"
                style={getButtonStyle("train")}
                onMouseEnter={() => setHoveredButton("train")}
                onMouseLeave={() => setHoveredButton(null)}
              >
                TRAIN YOURSELF
              </Link>
            </div>
            <div className="col-md-7">
              <div
                className="text-center"
                style={{
                  fontSize: "1.5em",
                  textShadow: "0 0 10px #CFFF47", // Lime shadow for headlines
                }}
              >
                ⌛ GAMES PLAYED
              </div>
              <hr />
              <div>
                <div
                  className="px-2 py-1 text-white mb-1"
                  style={{
                    backgroundColor: "#440455",
                    borderRadius: "5px",
                  }}
                >
                  <div className="row">
                    <div>Tower of Hanoi</div>
                  </div>
                  <div className="row">
                    <div style={{ fontSize: "0.75em" }}>
                      Completed with {userData.hanoimoves} moves in{" "}
                      {userData.hanoitime} s.
                    </div>
                  </div>
                </div>
                <div
                  className="px-2 py-1 text-white mb-1"
                  style={{
                    backgroundColor: "#440455",
                    borderRadius: "5px",
                  }}
                >
                  <div className="row">
                    <div>Card Flip Game</div>
                  </div>
                  <div className="row">
                    <div style={{ fontSize: "0.75em" }}>
                      Completed in {userData.memorytime}s with{" "}
                      {userData.memoryright} rights and {userData.memorywrong}{" "}
                      wrongs.
                    </div>
                  </div>
                </div>
                <div
                  className="px-2 py-1 text-white mb-1"
                  style={{
                    backgroundColor: "#440455",
                    borderRadius: "5px",
                  }}
                >
                  <div className="row">
                    <div>Number Puzzle Game</div>
                  </div>
                  <div className="row">
                    <div style={{ fontSize: "0.75em" }}>
                      Completed with {userData.numberpuzzlemoves} moves in{" "}
                      {userData.numberpuzzletime}s.
                    </div>
                  </div>
                </div>
                <div
                  className="px-2 py-1 text-white"
                  style={{
                    backgroundColor: "#440455",
                    borderRadius: "5px",
                  }}
                >
                  <div className="row">
                    <div>Chess and Queens Game</div>
                  </div>
                  <div className="row">
                    <div style={{ fontSize: "0.75em" }}>
                      Placed {userData.eightQueen} queens.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="col-md-5 text-white"
          style={{
            border: "1px solid #CFFF47", // Lime accent border
            borderRadius: "10px",
            background: "rgba(68, 4, 85, 0.8)", // Semi-transparent purple
            backdropFilter: "blur(15px)",
          }}
        >
          <div className="row">
            <div className="col-md-5 text-center">
              <img
                src={pfp}
                alt="Profile"
                width={"70%"}
                style={{
                  margin: "20px",
                  borderRadius: "75px",
                  marginTop: "35px",
                }}
              />
              <h2
                className="mx-3 mb-1 zoom-letters"
                style={{
                  textShadow: "0 0 10px #CFFF47", // Lime shadow for headlines
                }}
              >
                {userData.username}
              </h2>
              <button
                className="btn btn-warning my-2 mb-3"
                onClick={handleQuiz}
                style={getButtonStyle("test")}
                onMouseEnter={() => setHoveredButton("test")}
                onMouseLeave={() => setHoveredButton(null)}
              >
                {renderQuiz ? "YAY! DONE." : "TEST YOURSELF"}
              </button>
            </div>
            <div className="col-md-7">
              <div className="mx-1 text-center">
                <p
                  className="mt-5"
                  data-bs-toggle="tooltip"
                  title="Your Real Age"
                  style={{
                    textShadow: "0 0 10px #CFFF47", // Lime shadow for headlines
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    className="bi bi-activity"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M6 2a.5.5 0 0 1 .47.33L10 12.036l1.53-4.208A.5.5 0 0 1 12 7.5h3.5a.5.5 0 0 1 0 1h-3.15l-1.88 5.17a.5.5 0 0 1-.94 0L6 3.964 4.47 8.171A.5.5 0 0 1 4 8.5H.5a.5.5 0 0 1 0-1h3.15l1.88-5.17A.5.5 0 0 1 6 2"
                    />
                  </svg>
                  <span
                    style={{
                      marginLeft: "10px",
                      fontSize: "23px",
                      fontWeight: "700",
                      cursor: "default",
                    }}
                  >
                    {userData.age}
                  </span>
                </p>
                <hr />
                <p
                  className="age"
                  data-bs-toggle="tooltip"
                  title="Your ADHD Score"
                  style={{
                    textShadow: "0 0 10px #CFFF47", // Lime shadow for headlines
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    fill="currentColor"
                    className="bi bi-123"
                    viewBox="0 0 16 16"
                  >
                    <path d="M2.873 11.297V4.142H1.699L0 5.379v1.137l1.64-1.18h.06v5.961zm3.213-5.09v-.063c0-.618.44-1.169 1.196-1.169.676 0 1.174.44 1.174 1.106 0 .624-.42 1.101-.807 1.526L4.99 10.553v.744h4.78v-.99H6.643v-.069L8.41 8.252c.65-.724 1.237-1.332 1.237-2.27C9.646 4.849 8.723 4 7.308 4c-1.573 0-2.36 1.064-2.36 2.15v.057zm6.559 1.883h.786c.823 0 1.374.481 1.379 1.179.01.707-.55 1.216-1.421 1.21-.77-.005-1.326-.419-1.379-.953h-1.095c.042 1.053.938 1.918 2.464 1.918 1.478 0 2.642-.839 2.62-2.144-.02-1.143-.922-1.651-1.551-1.714v-.063c.535-.09 1.347-.66 1.326-1.678-.026-1.053-.933-1.855-2.359-1.845-1.5.005-2.317.88-2.348 1.898h1.116c.032-.498.498-.944 1.206-.944.703 0 1.206.435 1.206 1.07.005.64-.504 1.106-1.2 1.106h-.75z" />
                  </svg>
                  <Popup
                    trigger={
                      <span
                        style={{
                          marginLeft: "10px",
                          fontSize: "23px",
                          fontWeight: "700",
                        }}
                      >
                        {total_score}
                      </span>
                    }
                    modal
                    closeOnDocumentClick
                  >
                    <div
                      className="m-3 p-4"
                      style={{
                        fontFamily: "Montserrat",
                        fontSize: "1.5em",
                        backgroundColor: "white",
                        borderRadius: "10px",
                        width: "700px",
                      }}
                    >
                      This is your <b style={{ color: `#64057e` }}>ADHD</b>{" "}
                      progression score. It is measured on various parameters
                      like{" "}
                      <i>
                        <b style={{ color: `#64057e` }}>attention span</b>
                      </i>
                      ,{" "}
                      <i>
                        <b style={{ color: `#64057e` }}>communication skills</b>
                      </i>
                      ,{" "}
                      <i>
                        <b style={{ color: `#64057e` }}>
                          working memory capacity
                        </b>
                      </i>
                      , and{" "}
                      <i>
                        <b style={{ color: `#64057e` }}>
                          hyperactivity tendency
                        </b>
                      </i>
                      . This score is updated based on your performance in the
                      training center and your choices made in the
                      questionnaire. This is just an{" "}
                      <b style={{ color: `#64057e` }}>indicative</b> score.
                      Everyone always gets better with time! <br /> <br /> Here,
                      a <b>0</b> denotes the highest severity of ADHD while{" "}
                      <b>100</b> denotes the lowest.
                    </div>
                  </Popup>
                </p>
                <hr />
                <p style={{ textAlign: "right" }}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    fill="currentColor"
                    className="bi bi-chat-right-heart-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M16 2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h9.586a1 1 0 0 1 .707.293l2.853 2.853a.5.5 0 0 0 .854-.353zM8 3.993c1.664-1.711 5.825 1.283 0 5.132-5.825-3.85-1.664-6.843 0-5.132" />
                  </svg>
                  <span style={{ marginLeft: "10px", fontSize: "1.1rem" }}>
                    {userData.message}
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {renderQuiz && (
        <div className="row" ref={quizSectionRef}>
          <div className="col-md-1"></div>
          <div
            className="col-md-10 m-3 p-5 mb-5"
            style={{
              color: `white`,
              border: "1px solid #440455",
              borderRadius: "20px",
              background: "#440455",
            }}
          >
            <Questionnaire />
          </div>
          <div className="col-md-1"></div>
        </div>
      )}
    </div>
  );
}
