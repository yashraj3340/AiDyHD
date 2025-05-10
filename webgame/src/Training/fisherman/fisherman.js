import React from "react";
import "./fisherman.css";

const FishermanGame = () => {
  const handleClick = () => {
    window.open("https://napoleanonsail.itch.io/fisherman", "_blank");
  };

  return (
    <div className="container-fluid" style={{ background: 'linear-gradient(135deg, #6E48AA, #4776E6)', minHeight: '100vh', color: '#FFFFFF', fontFamily: 'Arial, sans-serif' }}>
      <div className="row p-5">
        <hr style={{ color: `white` }} />
        <h1 className="text-white fisherman-title" style={{ fontSize: `5rem`, textShadow: '0 0 10px #FFFFFF' }}>CATCH THE FISH</h1>
        <hr style={{ color: "white" }} />
        <div className="col-md-9">
          <div className="p-2" style={{ color: `rgb(225, 187, 245)`, fontSize: `1.2em`, lineHeight: '1.8' }}>
            <p>
              <b style={{ color: `#FFD700` }}>FisherMan</b> is a fun and engaging game designed to challenge and improve various cognitive and motor skills. 
              The objective is simple: catch as many fish as possible within a time limit. While it may seem like just a game, 
              it offers numerous benefits, especially for individuals with ADHD.
            </p>
            <p>
              <b style={{ color: `#FFD700` }}>How this game helps ADHD patients:</b>
            </p>
            <ul style={{ listStyleType: 'circle', paddingLeft: '20px' }}>
              <li><b style={{ color: `#FFD700` }}>Hand-Eye Coordination:</b> The game requires precise timing and coordination between visual input and hand movements, helping to improve motor skills.</li>
              <li><b style={{ color: `#FFD700` }}>Impulse Control:</b> Players must wait for the right moment to act, which helps in developing patience and self-regulation.</li>
              <li><b style={{ color: `#FFD700` }}>Muscle Memory:</b> Repeated actions in the game enhance muscle memory, making movements more efficient over time.</li>
              <li><b style={{ color: `#FFD700` }}>Cognitive Ability:</b> The game challenges the brain to process information quickly and make decisions under pressure, improving cognitive flexibility.</li>
              <li><b style={{ color: `#FFD700` }}>Focus and Attention:</b> The fast-paced nature of the game helps players maintain focus and attention for extended periods.</li>
            </ul>
            <p>
              This game is not only entertaining but also serves as a therapeutic tool to enhance essential skills that can benefit individuals in their daily lives.
            </p>
          </div>
          <button 
            onClick={handleClick} 
            className="btn btn-warning m-2" 
            style={{ fontSize: `1.2em`, textShadow: `0 0 3px #fff`, color: `white` }}
          >
            🎣 Play Fisherman 
          </button>
        </div>
      </div>
    </div>
  );
};

export default FishermanGame;