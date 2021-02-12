import { useParams, useHistory } from "react-router-dom";
import data from "../data/questions_data.json";

const Question = () => {
  let { id } = useParams();
  id = parseInt(id);
  const queData = data.find(ele => ele.id === id);
  const history = useHistory();
  const prev = () => {
    history.push(`/questions/${id - 1}`);
  };
  const next = () => {
    history.push(`/questions/${id + 1}`);
  };

  return (
    <div className="question">
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
