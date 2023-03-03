import { Link } from "react-router-dom";
import './Signup.css';

function Signup() {
    return (
      <div className="form">
        <h1>Logo</h1>
  
        <form className="Signup-form">
          <span className="NFormat">
            <label className="instructionSU name"> Name </label> <br/>
            <input className="inputSU name"  style={{width:200}} placeholder="Name" type="text"></input>  
          </span>

          <span className="LNFormat">
            <label className="instructionSU Lastname"> Last Name </label> <br/>
            <input className="inputSU Lastname" style={{width:200}} placeholder="Last name" type="text"></input>
          </span>
          <br/>
          <label className="instructionSU">Email </label> <br/> 
          <input className="inputSU" placeholder="Ex: myemail@gmail.com" type="email" ></input> <br/>

          <label className="instructionSU"> &nbsp;&nbsp;&nbsp;Password </label> <br/>      
          <input className="inputSU" placeholder="mysupersecretpassword123" type="password"></input> <br/>

          <input className="buttonSU" type="submit" value="Sign Up"/>

        </form>
  
        <p>Already have an account? <Link to="/Login" className="link">Log in here.</Link></p>
  
  
        <Link to="/" className="link">
          To Home
        </Link>
      </div>
    );
  }

export default Signup;
