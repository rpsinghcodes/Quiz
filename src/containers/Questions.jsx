import React, { useEffect, useState } from "react";
import QuestionNo from "./QuestionNo";
import questions_data from "../Data/questions_data";
import Footer from "./Footer";
// import MCQ from "./MCQ";

const Questions = () => {
  const [questionNumber, setQuestionNumber] = useState(0);
  const [choosenOpt, setChoosenOpt] = useState([]);

  const nextQuestion = () => {
    setQuestionNumber(questionNumber + 1);
  };

  const prevQuestion = () => {
    setQuestionNumber(questionNumber - 1);
  };

  // Destructing question file e.g questions_data[questionNumber].que
  const { que, optA, optB, optC, optD } = questions_data[questionNumber];

  // saves answers given by user
  const updateAnswers = ans => {
    let temp = [...choosenOpt];
    temp[questionNumber] = ans;
    setChoosenOpt(temp);
  };

  useEffect(() => {
    const ans = choosenOpt[questionNumber];
    let array = document.getElementsByClassName("option");
    for (var i = 0; i < array.length; i++) {
      array[i].classList.remove("selectedOption");
    }
    if (!isNaN(ans)) {
      array[ans].classList.toggle("selectedOption");
    }
  }, [questionNumber, choosenOpt]);

  return (
    <div>
      <div className="container">
        <div className="questionandNumber">
          <div className="questions">
            Q{questionNumber + 1}. {que}
          </div>
          <div className="options">
            <form method="post">
              <div
                className="option"
                onClick={e => {
                  updateAnswers(0);
                }}
                value={optA}
              >
                {optA}
              </div>
              <div
                className="option"
                onClick={e => {
                  updateAnswers(1);
                }}
                value={optB}
              >
                {optB}
              </div>
              <div
                className="option"
                onClick={e => {
                  updateAnswers(2);
                }}
                value={optC}
              >
                {optC}
              </div>
              <div
                className="option"
                onClick={e => {
                  updateAnswers(3);
                }}
                value={optD}
              >
                {optD}
              </div>
            </form>
          </div>
        </div>
        <div className="questionNo">
          <QuestionNo />
        </div>
      </div>
      <Footer
        next={nextQuestion}
        prev={prevQuestion}
        display={questionNumber}
      />
    </div>
  );
};

export default Questions;
