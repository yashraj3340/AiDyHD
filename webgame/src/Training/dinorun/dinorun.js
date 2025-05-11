import React from "react";
import "./dinorun.css";

const DinoRunGame = () => {
  return (
    <div
      className="container-fluid"
      style={{
        background: "linear-gradient(135deg, #6E48AA, #4776E6)",
        minHeight: "100vh",
        color: "#FFFFFF",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div className="row p-5">
        <hr style={{ color: `white` }} />
        <h1
          className="text-white dinorun-title"
          style={{ fontSize: `5rem`, textShadow: "0 0 10px #FFFFFF" }}
        >
          DINO RUN
        </h1>
        <hr style={{ color: "white" }} />
        <div className="col-md-9">
          <div
            className="p-2"
            style={{
              color: `rgb(225, 187, 245)`,
              fontSize: `1.2em`,
              lineHeight: "1.8",
            }}
          >
            <p>
              <b style={{ color: `#FFD700` }}>Dino Run</b> is an exciting and
              fast-paced game where players control a dinosaur to avoid
              obstacles and collect points. The objective is to survive as long
              as possible while navigating through a challenging environment.
              This game is not only fun but also offers several cognitive and
              motor benefits, especially for individuals with ADHD.
            </p>
            <p>
              <b style={{ color: `#FFD700` }}>
                How this game helps ADHD patients:
              </b>
            </p>
            <ul style={{ listStyleType: "circle", paddingLeft: "20px" }}>
              <li>
                <b style={{ color: `#FFD700` }}>Hand-Eye Coordination:</b> The
                game requires quick reactions and precise timing, improving
                coordination between visual input and physical actions.
              </li>
              <li>
                <b style={{ color: `#FFD700` }}>Impulse Control:</b> Players
                must decide when to jump or duck, helping to develop patience
                and self-regulation.
              </li>
              <li>
                <b style={{ color: `#FFD700` }}>Focus and Attention:</b> The
                fast-paced nature of the game helps players maintain focus and
                attention for extended periods.
              </li>
              <li>
                <b style={{ color: `#FFD700` }}>Cognitive Flexibility:</b> The
                game challenges players to adapt quickly to new obstacles and
                changing environments, enhancing problem-solving skills.
              </li>
              <li>
                <b style={{ color: `#FFD700` }}>Stress Relief:</b> The engaging
                gameplay can serve as a fun way to reduce stress and improve
                mood.
              </li>
            </ul>
            <p>
              Dino Run is not just a game; it is a tool to enhance essential
              skills that can benefit individuals in their daily lives. It
              combines entertainment with therapeutic value, making it a great
              choice for individuals with ADHD.
            </p>
          </div>
          <a
            href="https://napoleanonsail.itch.io/dinorun"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-warning m-2"
            style={{
              fontSize: `1.2em`,
              textShadow: `0 0 3px #fff`,
              color: `white`,
            }}
          >
            Play the Game
          </a>
        </div>
      </div>
    </div>
  );
};

export default DinoRunGame;
