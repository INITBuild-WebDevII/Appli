import { Link } from "react-router-dom";
import { useState } from "react";
import './Login.css';
import axios from "axios";
import { useLogin } from "../../hooks/useLogin";


function LogIn() {
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()

  const {login, error, isLoading} = useLogin()

    const Handlechange = async (event) => {
      event.preventDefault();
      await login(email,password)

    }

  return (
    <form className="Login-page" onSubmit={Handlechange}>
    <div className="Login-page">

      <h1 className="h1_Login" >Welcome Back</h1>
  
          <div className="Login-email">

                <input name="email" onChange={(e) => setEmail(e.target.value)} required className="L-email" type="text"/>  
                <label for="L-email" className="L-label-email">
                  <span class="L-content-email">Email</span>
                </label>
            
          </div>

          <div className="Login-password">

                <input name="password" onChange={(e) => setPassword(e.target.value)} required className="L-password" type="password"/>  
                <label for="L-password" className="L-label-password">
                  <span class="L-content-password">Password</span>
                </label>

          </div>

          <input disable={isLoading} className="Login_button" type="submit" value="Log In"/>
          {error && <div className="error"> {error}</div>}
          <p className="p_Login">Don't have an account? &nbsp; <Link to="/Signup" className="link_LI"> Sign Up.</Link></p>

          <Link to="/" className="linkLI"> To Home </Link>
            
    </div>
    </form>
  );
}

export default LogIn;

