import { Link } from "react-router-dom";
import { useState } from "react";
import './Login.css';
import axios from "axios";

function LogIn() {

  const [input, setInput] = useState ({
    email: '',
    password: ''
  })

  function Handlechange(event) {
    const {name, value} = event.target

    setInput(prevInput => {
        return {
          ...prevInput,
          [name]: value
        }
    })
  }

  function Handleclicker (event) {
    event.preventDefault();
    const newUser = {
      email: input.email,
      password: input.password
    }
  
    console.log(input)
    axios.post("/api/user/Login", newUser)
    
  }
  return (
    <div className="Login-page">

      <h1 className="h1_Login" >Welcome Back</h1>
  
          <div className="Login-email">

                <input name="email" value={input.email} onChange={Handlechange} required className="L-email" type="text"/>  
                <label for="L-email" className="L-label-email">
                  <span class="L-content-email">Email</span>
                </label>
            
          </div>

          <div className="Login-password">

                <input name="password" value={input.password} onChange={Handlechange} required className="L-password" type="password"/>  
                <label for="L-password" className="L-label-password">
                  <span class="L-content-password">Password</span>
                </label>

          </div>

          <input onClick={Handleclicker} className="Login_button" type="submit" value="Log In"/>
          <p className="p_Login">Don't have an account? &nbsp; <Link to="/Signup" className="link_LI"> Sign Up.</Link></p>

          <Link to="/" className="linkLI"> To Home </Link>
            
    </div>
  );
}

export default LogIn;

