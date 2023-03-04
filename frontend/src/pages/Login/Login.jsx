import { Link } from "react-router-dom";
import './Login.css';


function LogIn() {
  return (
    <div className="form_Login">
      <h1 className="h1_Login" >Welcome Back</h1>
      <form>
            <div className="Login-form">
            <div className="email">
                <label className="instruction">Email</label><br/>
                <input className="input" type="email" placeholder="Ex: myemail@gmail.com"  style={{ color: 'black'}}/>  
                
            </div>

            <div className="password">
                <label className="instruction">Password</label><br/>
                <input className="input" type="password" placeholder="Ex: mysupersecretpassword123" style={{ color: 'black'}}/>
            </div>

            <input className="Login_button" type="submit" value="Log In"/>
            </div>
            <div>
            <p className="p_Login">Don't have an account? &nbsp; <Link to="/Signup" className="link_SU"> Sign Up.</Link></p>

            </div>
    
        </form>
      <Link to="/" className="link">
          To Home
      </Link>
    </div>
  );
}

export default LogIn;

