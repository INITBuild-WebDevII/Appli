import "./Login.css";
import { Link } from "react-router-dom";
import { React, useState } from "react";
import { useLogin } from "../../hooks/useLogin";
import { FiMail } from "react-icons/fi";
import { AiOutlineLock, AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { BsGithub, BsLinkedin } from "react-icons/bs";

function LogIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);
  const [passwordShown, setPasswordShown] = useState(false);
  
  const togglePasswordVisibility = () => {
    setPasswordShown(passwordShown ? false : true);
  };

  const { login, error, isLoading } = useLogin();

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    if (remember === true) {   
      await login(email, password, true);
    } else {
      await login(email, password, false);
    }
  };

  const handleRememberClick = async (event) => {
    setRemember(event.target.checked);
    console.log(remember);
  };

  return (
    <div className="body-login">
      <form className="Login-page" onSubmit={handleSubmit}>
        <div className="Login-page">
          <h1 className="h1_Login">Login</h1>

          <div className="Login-email">
            <input
              name="email"
              autoComplete="off"
              onChange={(e) => setEmail(e.target.value)}
              required
              className="L-email"
              type="text"
            />
            <label htmlFor="L-email" className="L-label-email">
              <span className="L-content-email">
                <FiMail />
                <div style={{ marginLeft: "5px" }}>Email</div>
              </span>
            </label>
          </div>

          <div className="Login-password" style={{display: "flex", alignItems: "center"}}>
            <i className="eye-password" onClick={togglePasswordVisibility}>
              {passwordShown ? <AiOutlineEyeInvisible /> : <AiOutlineEye/>}
            </i>
            <input
              name="password"
              autoComplete="off"
              type={passwordShown ? "text" : "password"}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              required
              className="L-password"
            />
            <label
              htmlFor="standard-adornment-password"
              for="password"
              className="L-label-password"
            >
              <span className="L-content-password">
                <AiOutlineLock />
                <div style={{ marginLeft: "5px" }}>Password</div>
              </span>
            </label>
          </div>

          <div className="passwordDetails">
            <label className="remember-container">
              <input
                type="checkbox"
                className="remember"
                onChange={handleRememberClick}
              />{" "}
              Remember me
            </label>

            <label className="forgot-container">
              <a className="forgot" href="resetpasswordlink">
                Forgot Password ?
              </a>
            </label>
          </div>

          <button disable={isLoading} className="Login_button">LOGIN</button>
          
          {error && <div className="error"> {error}</div>}
          
          <div className="loginwith">
            <p className="continue">or continue with</p>
            <label className="github">
              {" "}
              <a
                target="_blank"
                href="https://github.com/login"
                className="github-link"
              >
                {" "}
                <BsGithub size={40} color="white" />{" "}
              </a>{" "}
            </label>
            <label className="linkedin">
              {" "}
              <a
                target="_blank"
                href="https://www.linkedin.com"
                className="linkedin-link"
              >
                {" "}
                <BsLinkedin size={40} color="#0072b1" />{" "}
              </a>{" "}
            </label>
            <label className="google">
              {" "}
              <a
                target="_blank"
                href="https://accounts.google.com"
                className="google-link"
              >
                <FcGoogle color="black" size={40} />{" "}
              </a>{" "}
            </label>
          </div>
          <p className="p_Login">
            Don't have an account? &nbsp;{" "}
            <Link to="/Signup" className="link_LI">
              {" "}
              Sign Up
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
}

export default LogIn;