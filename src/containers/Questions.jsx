import React, { useEffect, useState } from "react";
import QuestionNo from "./QuestionNo";
import questions_data from "../Data/questions_data";
import Footer from "./Footer";

const Questions = () => {
  // if queno exist set questionNumber to that
  const [questionNumber, setQuestionNumber] = useState(
    parseInt(sessionStorage.queno) || 0
  );

  let showNext = true;
  const nextQuestion = () => {
    if (questionNumber === 8) {
      showNext = false;
    }
    setQuestionNumber(questionNumber + 1);
  };
  const handleSeletectedQuestion = n => {
    let temp = choosenOpt;
    temp[questionNumber] = n;
    setChoosenOpt(temp);
    // Updating stored answer
    sessionStorage.choosenOpt = JSON.stringify(choosenOpt);
  };

  const prevQuestion = () => {
    setQuestionNumber(questionNumber - 1);
  };

  const { que, optA, optB, optC, optD } = questions_data[questionNumber];
  // if choosenOpt exist in storage than set choosOpt(used here) to that
  const [choosenOpt, setChoosenOpt] = useState(
    sessionStorage.choosenOpt ? JSON.parse(sessionStorage.choosenOpt) : []
  );
  //if data not stored in storage than initialize them in storage
  if (!sessionStorage.choosenOpt)
    sessionStorage.setItem("choosenOpt", JSON.stringify(choosenOpt));
  if (!sessionStorage.queno) sessionStorage.queno = String(questionNumber);

  useEffect(() => {
    sessionStorage.queno = questionNumber; // when questionNumber changes update queno
    let x = choosenOpt[questionNumber];
    if (x !== undefined) {
      document.getElementsByName("option")[x].click();
    } else document.getElementById("nothing").click();
  }, [questionNumber]);

  return (
    <div>
      <div className="container">
        <div className="questionandNumber">
          <div className="questions">
            Q{questionNumber + 1}.{que}
          </div>
          <div className="options">
            <form method="post">
              <h3>
                <input
                  type="radio"
                  onClick={() => handleSeletectedQuestion(0)}
                  name="option"
                  value="A"
                />
                {optA}
              </h3>
              <h3>
                <input
                  type="radio"
                  onClick={() => handleSeletectedQuestion(1)}
                  name="option"
                  value="B"
                />
                {optB}
              </h3>
              <h3>
                <input
                  type="radio"
                  onClick={() => handleSeletectedQuestion(2)}
                  name="option"
                  value="C"
                />
                {optC}
              </h3>
              <h3>
                <input
                  type="radio"
                  onClick={() => handleSeletectedQuestion(3)}
                  name="option"
                  value="D"
                />
                {optD}
              </h3>
              <input
                type="radio"
                name="option"
                value={null}
                id="nothing"
                hidden
              />
            </form>
          </div>
        </div>
        <div className="questionNo">
          <QuestionNo key={questions_data.id} id={questions_data.id} />
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
