import React, { useState } from "react";
import "../tutorial.css";

const Tutorial = ({ onClose }) => {
  const [currentStep, setCurrentStep] = useState(1);

  const nextStep = () => {
    setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    setCurrentStep(currentStep - 1);
  };

  return (
    <div className="tutorial-overlay">
      <div className="tutorial-content">
        <h2>Jigsaw Puzzle Tutorial</h2>
        {currentStep === 1 && (
          <>
            <p>Welcome to the Jigsaw Puzzle tutorial!</p>
            <p>
              In this game, your goal is to arrange the puzzle pieces to
              complete the image.
            </p>
            <p>
              You can move pieces by clicking on them or using the arrow keys on
              your keyboard.
            </p>
            <button onClick={nextStep} className="btn btn-primary">
              Next
            </button>
          </>
        )}
        {currentStep === 2 && (
          <>
            <p>Great! You've learned the basic controls.</p>
            <p>
              You can only move pieces that are adjacent to the empty space.
            </p>
            <p>
              Use the arrow keys or click on adjacent pieces to move them into
              the empty space.
            </p>
            <button onClick={prevStep} className="btn btn-primary m-1">
              Previous
            </button>
            <button onClick={nextStep} className="btn btn-primary m-1">
              Next
            </button>
          </>
        )}
        {currentStep === 3 && (
          <>
            <p>Congratulations! You've completed the Jigsaw Puzzle tutorial.</p>
            <p>
              You can now start the game and challenge yourself to solve the
              puzzle.
            </p>
            <button className="btn btn-primary" onClick={onClose}>
              Close
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Tutorial;
