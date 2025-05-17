import React, { useState } from "react";
import "./training.css";
import { Link } from "react-router-dom";

export default function Training() {
  const [hoveredCard, setHoveredCard] = useState(null);

  const handleFlip = (event) => {
    const target = event.currentTarget;
    target.classList.toggle("flipped");
  };

  const handleScrollDown = () => {
    window.scrollBy({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  const getCardStyle = (cardType, isHovered) => ({
    background: cardType === "charcoal" ? "#2D2D2D" : "#E0E0E0",
    color: cardType === "charcoal" ? "#FFFFFF" : "#333333",
    borderRadius: "15px",
    boxShadow: isHovered
      ? "0 10px 25px rgba(207, 255, 71, 0.6)"
      : "0 6px 15px rgba(0, 0, 0, 0.2)",
    transform: isHovered ? "scale(1.05)" : "scale(1)",
    transition: "all 0.3s ease",
    margin: "20px",
  });

  const getButtonStyle = () => ({
    fontWeight: "500",
    backgroundColor: "#CFFF47",
    color: "#000000",
    border: "none",
    transition: "background-color 0.3s ease",
  });

  return (
    <div>
      <div
        className="container-fluid"
        style={{ background: "linear-gradient(135deg, #6E48AA, #4776E6)" }}
      >
        <div className="row p-5">
          <div
            className="text-center hanoi-title"
            style={{
              fontSize: `4.5em`, // Increased font size for the title
              color: `#FFFFFF`,
              textShadow: "0 0 10px #CFFF47",
            }}
          >
            TRAINING CENTER
          </div>
          <div
            className="text-center mt-5"
            style={{ color: `#FFFFFF`, fontSize: `1.5em` }} // Increased font size for the description
          >
            This might just be your most favorite place or your sworn enemy!{" "}
            <br />
            <br /> The training center consists of 6 carefully picked and
            curated games according to the needs of individuals with ADHD, to
            ensure their progress and betterment in their daily life.
          </div>
          <div
            className="text-center mt-5"
            style={{ color: `#FFFFFF`, fontSize: `1.5em` }} // Increased font size for the call-to-action
          >
            Click on any game to get started with your journey!
            <br />
            <br />
            <span className="hover-scroll" onMouseEnter={handleScrollDown}>
              All the best, Champ!
            </span>
          </div>
        </div>

        {/* ADHD Levels Information */}
        <div
          className="row justify-content-center pt-5"
          style={{
            color: "#FFFFFF",
            fontSize: "1.75em", // Increased font size for the ADHD Levels section
            lineHeight: "2", // Adjusted line height for better readability
            padding: "20px 50px", // Added padding for spacing
          }}
        >
          <p
            className="text-center"
            style={{
              fontSize: "1.9em", // Slightly larger font size for the SNAP-IV heading
              fontWeight: "bold",
              textShadow: "0 0 10px #CFFF47",
              marginBottom: "20px",
            }}
          >
            ADHD Levels
          </p>
          <p className="text-center" style={{ fontSize: "1.4em", marginTop: "20px" }}>
            <b style={{ color: "#CFFF47" }}>Easy Games:</b> Designed for individuals with
            low-level ADHD, focusing on improving attention and memory.
          </p>
          <p className="text-center" style={{ fontSize: "1.4em" }}>
            <b style={{ color: "#CFFF47" }}>Medium Games:</b> Suitable for mid-level ADHD,
            targeting planning, organization, and problem-solving skills.
          </p>
          <p className="text-center" style={{ fontSize: "1.4em" }}>
            <b style={{ color: "#CFFF47" }}>Hard Games:</b> For high-level ADHD,
            challenging cognitive flexibility, impulse control, and advanced
            problem-solving.
          </p>
        </div>

        {/* Easy Games */}
        <div className="row justify-content-center pt-5">
          <div
            className="text-center"
            style={{ color: "#FFFFFF", fontSize: "2em", marginBottom: "20px" }} // Increased font size for the Easy Games heading
          >
            Easy Games :
          </div>
          {/* Card Flip Game */}
          <div
            className="col-md-5 turns"
            style={getCardStyle("charcoal", hoveredCard === "cardFlip")}
            onMouseEnter={() => setHoveredCard("cardFlip")}
            onMouseLeave={() => setHoveredCard(null)}
            onClick={handleFlip}
          >
            <div className="front">
              <div className="row">
                <div style={{ fontSize: `3em` }}>🀧𓍢ִ໋🀦</div> {/* Adjusted icon size */}
                <div style={{ fontSize: `1.5em` }}>CARD FLIP GAME</div>
              </div>
            </div>
            <div className="back">
              <div className="row p-4">
                <div className="mb-2">
                  GAME OVERVIEW <span style={{ fontSize: `1.75em` }}>🀧𓍢ִ໋🀦</span> {/* Adjusted font size */}
                </div>
                <div style={{ fontSize: `0.5em` }}> {/* Adjusted font size */}
                  This is a classic cognitive exercise where you have to match cards by
                  remembering their location on the grid. You can only view two cards at
                  the same time. This game challenges your working memory, attention to
                  detail, and visual processing skills.
                </div>
                <div className="mt-2">
                  <Link to="/memorygame" className="btn" style={getButtonStyle()}>
                    Let's Play
                  </Link>
                </div>
              </div>
            </div>
          </div>
          {/* Dino Run Game */}
          <div
            className="col-md-5 turns"
            style={getCardStyle("silver", hoveredCard === "dinoRun")}
            onMouseEnter={() => setHoveredCard("dinoRun")}
            onMouseLeave={() => setHoveredCard(null)}
            onClick={handleFlip}
          >
            <div className="front">
              <div className="row p-3">
                <div style={{ fontSize: `3em` }}>🦖</div> {/* Adjusted icon size */}
                <div style={{ fontSize: `1.5em` }}>DINO RUN GAME</div>
              </div>
            </div>
            <div className="back">
              <div className="row p-4">
                <div className="mb-2">
                  GAME OVERVIEW <span style={{ fontSize: `1.75em` }}>🦖</span> {/* Adjusted font size */}
                </div>
                <div style={{ fontSize: `0.5em` }}> {/* Adjusted font size */}
                  Dino Run is an endless runner game where you control a dinosaur to
                  avoid obstacles and collect points. This game enhances reflexes,
                  hand-eye coordination, and focus.
                </div>
                <div className="mt-2">
                  <Link to="/dinorun" className="btn" style={getButtonStyle()}>
                    Let's Play
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Medium Games */}
        <div className="row justify-content-center pt-5">
          <div
            className="text-center"
            style={{ color: "#FFFFFF", fontSize: "2em", marginBottom: "20px" }}
          >
            Medium Games :
          </div>
          {/* Tower of Hanoi */}
          <div
            className="col-md-5 turns"
            style={getCardStyle("silver", hoveredCard === "towerOfHanoi")}
            onMouseEnter={() => setHoveredCard("towerOfHanoi")}
            onMouseLeave={() => setHoveredCard(null)}
            onClick={handleFlip}
          >
            <div className="front">
              <div className="row">
                <div style={{ fontSize: `3em` }}>🛕</div>
                <div style={{ fontSize: `1.5em` }}>TOWER OF HANOI</div>
              </div>
            </div>
            <div className="back">
              <div className="row p-4">
                <div className="mb-2">
                  GAME OVERVIEW <span style={{ fontSize: `1.75em` }}>🛕</span>
                </div>
                <div style={{ fontSize: `0.5em` }}>
                  The Tower of Hanoi is a mathematical puzzle where you move a
                  stack of disks from one peg to another, following specific
                  rules. This game challenges spatial reasoning, planning, and
                  sequential processing skills. It improves attention span and
                  organisation skills as well.
                </div>
                <div className="mt-2">
                  <Link to="/hanoi" className="btn" style={getButtonStyle()}>
                    Let's Play
                  </Link>
                </div>
              </div>
            </div>
          </div>
          {/* Chess & Queens Game */}
          <div
            className="col-md-5 turns"
            style={getCardStyle("charcoal", hoveredCard === "chessQueens")}
            onMouseEnter={() => setHoveredCard("chessQueens")}
            onMouseLeave={() => setHoveredCard(null)}
            onClick={handleFlip}
          >
            <div className="front">
              <div className="row p-3">
                <div style={{ fontSize: `3em` }}>♛</div>
                <div style={{ fontSize: `1.5em` }}>CHESS & QUEENS GAME</div>
              </div>
            </div>
            <div className="back">
              <div className="row p-4">
                <div className="mb-2">
                  GAME OVERVIEW <span style={{ fontSize: `1.75em` }}>♛</span>
                </div>
                <div style={{ fontSize: `0.5em` }}>
                  The 8 Queens game is a puzzle that involves placing eight
                  chess queens on an 8×8 chessboard in a way that no two queens
                  threaten each other. This game requires careful planning,
                  problem-solving, and spatial awareness. It helps improve
                  impulse control and concentration.
                </div>
                <div className="mt-2">
                  <Link
                    to="/eightQueen"
                    className="btn"
                    style={getButtonStyle()}
                  >
                    Let's Play
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Hard Games */}
        <div className="row justify-content-center pt-5">
          <div
            className="text-center"
            style={{ color: "#FFFFFF", fontSize: "2em", marginBottom: "20px" }}
          >
            Hard Games :
          </div>
          {/* Number Puzzle Game */}
          <div
            className="col-md-5 turns"
            style={getCardStyle("charcoal", hoveredCard === "numberPuzzle")}
            onMouseEnter={() => setHoveredCard("numberPuzzle")}
            onMouseLeave={() => setHoveredCard(null)}
            onClick={handleFlip}
          >
            <div className="front">
              <div className="row p-3">
                <div style={{ fontSize: `3em` }}>🔢</div>
                <div style={{ fontSize: `1.5em` }}>NUMBER PUZZLE GAME</div>
              </div>
            </div>
            <div className="back">
              <div className="row p-4">
                <div className="mb-2">
                  GAME OVERVIEW <span style={{ fontSize: `1.75em` }}>🔢</span>
                </div>
                <div style={{ fontSize: `0.5em` }}>
                  The 1-15 number puzzle, also known as the sliding puzzle, is a
                  classic game where you have to rearrange numbered tiles on a
                  grid to form a sequential order. This game promotes
                  problem-solving skills, spatial reasoning, and concentration.
                  It helps improve attention and cognitive skills.
                </div>
                <div className="mt-2">
                  <Link
                    to="/numberpuzzle"
                    className="btn"
                    style={getButtonStyle()}
                  >
                    Let's Play
                  </Link>
                </div>
              </div>
            </div>
          </div>
          {/* Catch the Fish Game */}
          <div
            className="col-md-5 turns"
            style={getCardStyle("silver", hoveredCard === "catchFish")}
            onMouseEnter={() => setHoveredCard("catchFish")}
            onMouseLeave={() => setHoveredCard(null)}
            onClick={handleFlip}
          >
            <div className="front">
              <div className="row p-3">
                <div style={{ fontSize: `3em` }}>🐟</div>
                <div style={{ fontSize: `1.5em` }}>THE FISHERMAN GAME</div>
              </div>
            </div>
            <div className="back">
              <div className="row p-4">
                <div className="mb-2">
                  GAME OVERVIEW <span style={{ fontSize: `1.75em` }}>🐟</span>
                </div>
                <div style={{ fontSize: `0.5em` }}>
                  Catch the Fish is a fun game where you have to catch as many
                  fish as possible within a time limit. This game improves
                  reaction time, focus, and hand-eye coordination.
                </div>
                <div className="mt-2">
                  <Link
                    to="/catchfish"
                    className="btn"
                    style={getButtonStyle()}
                  >
                    Let's Play
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
