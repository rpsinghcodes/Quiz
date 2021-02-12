import { Link } from "react-router-dom";

const Start = () => {
  return (
    <div className="start">
      <Link to="/questions/1">
        <button>Start Quiz</button>
      </Link>
    </div>
  );
};

export default Start;
