import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Question from "./Questions";
import Score from "./Score";
import qBank from "./QuestionBank";

class Questionnaire extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questionBank: qBank,
      currentQuestion: 0,
      selectedOption: "",
      quizEnd: false,
      totalPoints: 0,
    };
  }

  handleOptionChange = (e) => {
    this.setState({ selectedOption: e.target.value });
  };

  handleFormSubmit = (e) => {
    e.preventDefault();
    if (this.checkAnswer()) {
      this.handleNextQuestion();
    }
  };

  checkAnswer = () => {
    const { questionBank, currentQuestion, selectedOption, totalPoints } =
      this.state;
    const selected = questionBank[currentQuestion].options.find(
      (option) => option.value === selectedOption
    );
    if (!selected) {
      alert("Please select an option before submitting.");
      return false;
    }
    this.setState((prevState) => ({
      totalPoints: prevState.totalPoints + selected.points,
    }));
    return true;
  };

  handleNextQuestion = () => {
    const { questionBank, currentQuestion } = this.state;
    if (currentQuestion + 1 < questionBank.length) {
      this.setState((prevState) => ({
        currentQuestion: prevState.currentQuestion + 1,
        selectedOption: "",
      }));
    } else {
      this.setState({
        quizEnd: true,
      });
    }
  };

  render() {
    const {
      questionBank,
      currentQuestion,
      selectedOption,
      quizEnd,
      totalPoints,
    } = this.state;
    return (
      <div className="App">
        {!quizEnd ? (
          <Question
            question={questionBank[currentQuestion]}
            selectedOption={selectedOption}
            onOptionChange={this.handleOptionChange}
            onSubmit={this.handleFormSubmit}
          />
        ) : (
          <Score
            totalPoints={totalPoints}
            onNextQuestion={this.handleNextQuestion}
            className="score"
          />
        )}
      </div>
    );
  }
}

export default Questionnaire;
