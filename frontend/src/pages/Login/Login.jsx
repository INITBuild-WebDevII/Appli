import { Link } from "react-router-dom";
import { useState } from "react";
import './Login.css';
import axios from "axios";
import { useLogin } from "../../hooks/useLogin";
import { useLogout } from "../../hooks/useLogout";
import {FiMail} from "react-icons/fi";
import {AiOutlineLock} from "react-icons/ai";

function LogIn() {
  const {logout} = useLogout()
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()

  const {login, error, isLoading} = useLogin()

    const Handlechange = async (event) => {
      event.preventDefault();
      await login(email,password)

    }
    const handleClick = () => {
      logout()
    }
  return (
    <body className="body-login">
      <form className="Login-page" onSubmit={Handlechange}>
      <div className="Login-page">

        <h1 className="h1_Login" >Login</h1>
    
            <div className="Login-email">

                  <input name="email" onChange={(e) => setEmail(e.target.value)} required className="L-email" type="text"/>  
                  <label for="L-email" className="L-label-email">
                    <span class="L-content-email"> <FiMail/> Email</span>
                  </label>
              
            </div>

            <div className="Login-password">

                  <input name="password" onChange={(e) => setPassword(e.target.value)} required className="L-password" type="password"/>  
                  <label for="L-password" className="L-label-password">
                    <span class="L-content-password"><AiOutlineLock/> Password </span>
                  </label>

            </div>

            <div className="passwordDetails">

              <label className="remember-container"> 
                <input type="checkbox" className="remember"/> Remember me
              </label>

              <label className="forgot-container"> 
                <a className="forgot" href="resetpasswordlink">Forgot Password?</a>
              </label>

            </div>

            <input disable={isLoading} className="Login_button" type="submit" value="Log In"/>
            {error && <div className="error"> {error}</div>}
            <p className="continue" >or continue with</p>
            <p className="p_Login">Don't have an account? &nbsp; <Link to="/Signup" className="link_LI"> Sign Up.</Link></p>

            {/* <Link to="/" className="linkLI"> To Home </Link>
            <div>
            <button onClick={handleClick}>Log out</button>
            </div> */}
              
      </div>
      </form>
    </body>
  );
}

export default LogIn;

