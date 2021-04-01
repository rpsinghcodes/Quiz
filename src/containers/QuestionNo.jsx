import React from "react";
import lodash from "lodash";
const QuestionNo = () => {
  let card = [];
  lodash.times(10, i => {
    card.push(<button key={i}>{i + 1}</button>);
  });
  return (
    <div>
      {card}
      <br />
      <button>Submit</button>
    </div>
  );
};

export default QuestionNo;
