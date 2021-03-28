import React, { useEffect, useState } from "react";
import QuestionNo from "./QuestionNo";
import questions_data from "../Data/questions_data";
import Footer from "./Footer";
// import MCQ from "./MCQ";

const Questions = () => {
  // For Next btn when to hide.
  const [questionNumber, setQuestionNumber] = useState(0);
  const nextQuestion = () => {
    setQuestionNumber(questionNumber + 1);
  };

  const [choosenOpt, setChoosenOpt] = useState([]);
  const handleSeletectedQuestion = (n) => {
    let temp = choosenOpt;
    temp[questionNumber] = n;
    // setChoosenOpt(temp);
    setChoosenOpt((preValue) => {
      return [...preValue, temp];
    });
    console.log(n);
  };
  const prevQuestion = () => {
    setQuestionNumber(questionNumber - 1);
  };
  // Destructing question file e.g questions_data[questionNumber].que
  const { que, optA, optB, optC, optD } = questions_data[questionNumber];

  // useEffect(() => {
  //   let x = choosenOpt[questionNumber];
  //   if (x !== undefined) {
  //     document.getElementsByName("option")[x].click();
  //   } else document.getElementById("nothing").click();
  // }, [questionNumber]);

  const handleClick = (x) => {
    let array = document.getElementsByClassName("options");
    for (var i = 0; i < array.length; i++) {
      array[i].classList.remove("selectedOption");
    }
    document.getElementById(x).classList.toggle("selectedOption");
  };
  const handleAnswer = (value) => {
    console.log("value:", value);
  };
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
                <div
                  id="a"
                  className="options"
                  name="option"
                  onClick={(x) => {
                    handleAnswer(x.target.attributes.value.value);
                    handleClick("a");
                    handleSeletectedQuestion(0);
                  }}
                  value={optA}
                >
                  {optA}
                </div>
              </h3>
              <h3>
                <div
                  id="b"
                  className="options"
                  name="option"
                  onClick={(x) => {
                    handleAnswer(x.target.attributes.value.value);
                    handleClick("b");
                    handleSeletectedQuestion(1);
                  }}
                  value={optB}
                >
                  {optB}
                </div>
              </h3>
              <h3>
                <div
                  id="c"
                  className="options"
                  name="option"
                  onClick={(x) => {
                    handleAnswer(x.target.attributes.value.value);
                    handleClick("c");
                    handleSeletectedQuestion(2);
                  }}
                  value={optC}
                >
                  {optC}
                </div>
              </h3>
              <h3>
                <div
                  id="d"
                  className="options"
                  name="option"
                  onClick={(x) => {
                    handleAnswer(x.target.attributes.value.value);
                    handleClick("d");
                    handleSeletectedQuestion(3);
                  }}
                  value={optD}
                >
                  {optD}
                </div>
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
