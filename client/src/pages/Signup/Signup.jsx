import "./Signup.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useSignup } from "../../hooks/useSignup";
import { FiMail } from "react-icons/fi";
import { AiOutlineLock } from "react-icons/ai";
import { BsPerson } from "react-icons/bs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

function Signup() {
  const eye1 = <FontAwesomeIcon icon={faEye} />;
  const eye2 = <FontAwesomeIcon icon={faEye} />;

  const [passwordShown, setPasswordShown] = useState(false);
  const togglePasswordVisibility = () => {
    setPasswordShown(passwordShown ? false : true);
  };

  const [rePasswordShown, setRePasswordShown] = useState(false);
  const togglePasswordVisibility2 = () => {
    setRePasswordShown(rePasswordShown ? false : true);
  };

  const [Username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [Confirm_password, setConfirm_Password] = useState();

  const { signup, error, isLoading } = useSignup();

  const Handlechange = async (event) => {
    event.preventDefault();
    if (password === Confirm_password) {
      await signup(Username, email, password);
    }
  };

  return (
    <body className="bodyS">
      <form className="Signup-page" onSubmit={Handlechange}>
        <h1>Sign Up</h1>

        <div className="Signup-email">
          <input
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="off"
            required
            className="S-email"
            type="text"
          />
          <label for="S-email" className="S-label-email">
            <span className="S-content-email">
              {" "}
              <FiMail /> Email
            </span>
          </label>
        </div>

        <div className="Signup-name">
          <input
            value={Username}
            onChange={(e) => setUsername(e.target.value)}
            required
            className="S-name"
            type="text"
          />
          <label for="S-name" className="S-label-name">
            <span className="S-content-name">
              {" "}
              <BsPerson /> Username
            </span>
          </label>
        </div>

        <div className="Signup-password">
          <i className="eye-password" onClick={togglePasswordVisibility}>
          {passwordShown ? <AiOutlineEyeInvisible /> : <AiOutlineEye/>}

          </i>
          <input
            value={password}
            name="password"
            autocomplete="off"
            type={passwordShown ? "text" : "password"}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            required
            className="S-password"
          />
          <label
            htmlFor="standard-adornment-password"
            for="S-password"
            className="S-label-password"
          >
            <span class="S-content-password">
              <AiOutlineLock /> Password{" "}
            </span>
          </label>
        </div>

        <div className="confirm-password">
          <i className="eye-password2" onClick={togglePasswordVisibility2}>

            {passwordShown ? <AiOutlineEyeInvisible /> : <AiOutlineEye/>}
          </i>
          <input
            value={Confirm_password}
            name="re-password"
            autocomplete="off"
            type={rePasswordShown ? "text" : "password"}
            onChange={(e) => {
              setConfirm_Password(e.target.value);
            }}
            required
            className="re-password"
          />
          <label
            htmlFor="standard-adornment-password"
            for="re-password"
            className="S-label-password2"
          >
            <span class="S-re-content-password">
              <AiOutlineLock /> Password{" "}
            </span>
          </label>
        </div>

        <input
          disable={isLoading}
          className="buttonSU"
          type="submit"
          value="SIGN UP"
        />
        {error && <div className="error"> {error}</div>}

        <p>
          Already have an account?{" "}
          <Link to="/Login" className="link_SU">
            Log in here!
          </Link>
        </p>
      </form>
    </body>
  );
}

export default Signup;
