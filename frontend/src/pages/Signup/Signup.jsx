import { useState } from "react";
import { Link } from "react-router-dom";
import './Signup.css';
import axios from "axios";
import { useSignup } from "../../hooks/useSignup";

  let regex = new RegExp("([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\"\(\[\]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\[[\t -Z^-~]*])");

  
function Signup() {
  const [firstName, setFirstName] = useState()
  const [lastName, setLastName] = useState()
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()

  const {signup, error, isLoading} = useSignup()

    const Handlechange = async (event) => {
      event.preventDefault();
      await signup(firstName, lastName, email,password)

    }

    return (
      <form className="Signup-page" onSubmit={Handlechange}>
      
          <h1>Logo</h1> 

          <div className="Signup-name">

                  <input onChange={(e) => setFirstName(e.target.value)} required className="S-name" type="text"/>  
                  <label for="S-name" className="S-label-name">
                    <span class="S-content-name">Name</span>
                  </label>
              
          </div>

          <div className="Signup-last">

                  <input onChange={(e) => setLastName(e.target.value)} required className="S-last" type="text"/>  
                  <label for="S-last" className="S-label-last">
                    <span class="S-content-last">Last Name</span>
                  </label>

          </div>

          <div className="Signup-email">

                  <input name="email" value={email} onChange={(e) => setEmail(e.target.value)} autoComplete="off"  required className="S-email" type="text" />  
                  <label for="S-email" className="S-label-email">
                    <span class="S-content-email">Email</span>
                  </label>

          </div>

          <div className="Signup-password">

                  <input name="password" value={password} onChange={(e) => setPassword(e.target.value)} required className="S-password" type="password"/>  
                  <label for="S-password" className="S-label-password">
                    <span class="S-content-password">Password</span>
                  </label>

          </div>
          
          <input disable={isLoading} className="buttonSU" type="submit" value="Sign Up"/>
          {error && <div className="error"> {error}</div>}
       
  
        <p>Already have an account? <Link to="/Login" className="link_SU">Log in here.</Link></p>
  
  
        <Link to="/" className="link">
          To Home
        </Link>
      </form>
    );
  }

export default Signup;
