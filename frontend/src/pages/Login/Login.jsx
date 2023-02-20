import { Link } from "react-router-dom";

function Login() {
  return (
    <div>
      <h1>Login Page</h1>
      <Link to="/" className="link">
        To Home
      </Link>
    </div>
  );
}

export default Login;
