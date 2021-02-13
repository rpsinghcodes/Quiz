import { useParams, useHistory } from "react-router-dom";
import { useState } from "react";
import data from "../data/questions_data.json";

const Question = () => {
  let { id, time } = useParams();
  id = parseInt(id);
  const queData = data.find(ele => ele.id === id);
  const [timeElapsed, setTimeElapsed] = useState(
    Math.floor((new Date().getTime() - time) / 1000)
  );
  console.log(timeElapsed, setTimeElapsed);
  const [hr, setHr] = useState(Math.floor(timeElapsed / 3600) % 60);
  const [min, setMin] = useState(Math.floor(timeElapsed / 60) % 60);
  const [sec, setSec] = useState(timeElapsed % 60);
  setTimeout(() => {
    setTimeElapsed(Math.floor((new Date().getTime() - time) / 1000));
    setSec(timeElapsed % 60);
    setMin(Math.floor(timeElapsed / 60) % 60);
    setHr(Math.floor(timeElapsed / 3600) % 60);
  }, 1000);
  const history = useHistory();
  const prev = () => {
    history.push(`/questions/${id - 1}/${time}`);
  };
  const next = () => {
    history.push(`/questions/${id + 1}/${time}`);
  };

  return (
    <div className="question">
      <div className="time">
        The current time is {hr}:{min}:{sec}
      </div>
      <div className="statement">{queData.que}</div>
      <div className="options">
        <input type="radio" className="option" id="A" value="A" />
        <label htmlFor="A"> {queData.optA} </label>

        <input type="radio" className="option" id="B" value="B" />
        <label htmlFor="B"> {queData.optB} </label>

        <input type="radio" className="option" id="C" value="C" />
        <label htmlFor="C"> {queData.optC} </label>

        <input type="radio" className="option" id="D" value="D" />
        <label htmlFor="D"> {queData.optD} </label>
      </div>
      <div>
        <button className="prev" onClick={prev}>
          Prev
        </button>
        <button className="next" onClick={next}>
          Next
        </button>
      </div>
    </div>
  );
};

export default Question;
