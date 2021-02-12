import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="login">
      <Link to="/start">
        <button>Login</button>
      </Link>
    </div>
  );
};

export default Login;
