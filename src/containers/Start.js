import { Link } from "react-router-dom";

const Start = () => {
  const time = new Date().getTime();
  return (
    <div className="start">
      <Link to={`/questions/1/${time}`}>
        <button>Start Quiz</button>
      </Link>
    </div>
  );
};

export default Start;
