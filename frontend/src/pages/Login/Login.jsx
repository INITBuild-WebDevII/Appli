import { Link } from "react-router-dom";
import './Login.css';


function LogIn() {
  return (
    <div className="Login-page">

      <h1 className="h1_Login" >Welcome Back</h1>
  
          <div className="Login-email">

                <input required className="email" type="email"/>  
                <label for="email" className="label-email">
                  <span class="content-email">Email</span>
                </label>
            
          </div>

          <div className="Login-password">

                <input required className="password" type="password"/>  
                <label for="password" className="label-password">
                  <span class="content-password">Password</span>
                </label>

          </div>

          <input className="Login_button" type="submit" value="Log In"/>
          <p className="p_Login">Don't have an account? &nbsp; <Link to="/Signup" className="link_LI"> Sign Up.</Link></p>

          <Link to="/" className="linkLI"> To Home </Link>
            
    </div>
  );
}

export default LogIn;

