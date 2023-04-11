import { Link } from "react-router-dom";
import { React, useState } from "react";
import './Login.css';
import axios from "axios";
import { useLogin } from "../../hooks/useLogin";
import { useLogout } from "../../hooks/useLogout";
import {FiMail} from "react-icons/fi";
import {AiOutlineLock,AiOutlineEye} from "react-icons/ai";
import {FcGoogle} from "react-icons/fc";
import {BsGithub,BsLinkedin} from "react-icons/bs";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
const eye = <FontAwesomeIcon icon={faEye} />;


function LogIn() {


  const[passwordShown, setPasswordShown] = useState(false);
  const togglePasswordVisibility = () => {
    setPasswordShown(passwordShown ? false :true);
  };



  const [email, setEmail] = useState()
  const [password, setPassword] = useState({
    password:"", showPassword:false,
  })
  const [remember, setRemember] = useState(false)

  const handleClickShowPassword=()=>{
      setPassword({...password, showPassword: !password.showPassword})
  }

  const handleMouseDowbPassword=(event) => {
    event.preventDefault();
  }

  const handlePasswordChange= (prop)=> (event) => {
    setPassword({...password, [prop]: event.target.value})
  }

  const {login, error, isLoading} = useLogin()

  //To put the Login Information to the await login to check in the useLogin 
  //the remember variable is used to check if the Remember button was pressed
    const Handlechange = async (event) => {
      if (remember === true) {
        event.preventDefault();
      await login(email,password, true)
      } else {
        event.preventDefault();
      await login(email,password, false)
      }
    }

    const handleRememberClick = async (event) => {
      setRemember(event.target.checked);
      console.log(remember)
    }


  return (
    <body className="body-login">
      <form className="Login-page" onSubmit={Handlechange}>
      <div className="Login-page">

        <h1 className="h1_Login" >Login</h1>
    
            <div className="Login-email">

                  <input name="email" autocomplete="off" onChange={(e) => setEmail(e.target.value)} required className="L-email" type="text"/>  
                  <label for="L-email" className="L-label-email">
                    <span class="L-content-email"> <FiMail/> Email</span>
                  </label>
              
            </div>

              <div className="Login-password">
                    
                    <i className="eye-password" onClick={togglePasswordVisibility}>{eye}</i>
                    <input name="password" autocomplete="off" type={passwordShown ? "text" : "password"} onChange={(e) => {setPassword(e.target.value)}}  required className="L-password"/>
                    <label htmlFor="standard-adornment-password" for="password" className="L-label-password"> 
                      <span class="L-content-password"><AiOutlineLock/> Password </span>
                    </label>
                    

              </div>

              <div className="passwordDetails">

                <label className="remember-container"> 
                  <input type="checkbox" className="remember" onChange={handleRememberClick}/> Remember me
                </label>

                <label className="forgot-container"> 
                  <a className="forgot" href="resetpasswordlink">Forgot Password?</a>
                </label>

              </div>

            <input disable={isLoading} className="Login_button" type="submit" value="Log In"/>
            {error && <div className="error"> {error}</div>}
            <div className="loginwith">
              <p className="continue" >or continue with</p>
                <label className="github"> <a target="_blank" href="https://github.com/login" className="github-link"> <BsGithub size={40} color="white"/> </a> </label>
                <label className="linkedin"> <a target="_blank" href="https://www.linkedin.com" className="linkedin-link"> <BsLinkedin size={40} color="#0072b1"/> </a> </label>
                <label className="google"> <a target="_blank" href="http://localhost:4000/auth/TEST" className="google-link"><FcGoogle color="black" size={40}/> </a>  </label>
            </div>
            <p className="p_Login">Don't have an account? &nbsp; <Link to="/Signup" className="link_LI"> Sign Up.</Link></p>
     
              
      </div>
      </form>
    </body>
  );
}

export default LogIn;

