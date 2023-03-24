import { useState } from "react";
import { Link } from "react-router-dom";
import './Signup.css';
import axios from "axios";
import { useSignup } from "../../hooks/useSignup";
import {FiMail} from "react-icons/fi";
import {AiOutlineLock} from "react-icons/ai";
import {BsPerson} from "react-icons/bs"

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
      <body className="bodyS">
      <form className="Signup-page" onSubmit={Handlechange}>
      
          <h1>Sign Up</h1> 



            <div className="Signup-email">

              <input name="email" value={email} onChange={(e) => setEmail(e.target.value)} autoComplete="off"  required className="S-email" type="text" />  
              <label for="S-email" className="S-label-email">
                <span className="S-content-email"> <FiMail/>  Email</span>
              </label>

            </div>

            <div className="Signup-name">

                    <input required className="S-name" type="text"/>  
                    <label for="S-name" className="S-label-name">
                      <span className="S-content-name"> <BsPerson/>  Username</span>
                    </label>
                
            </div>

            <div className="Signup-password">

                    <input name="password" value={password} onChange={(e) => setPassword(e.target.value)} required className="S-password" type="password"/>  
                    <label for="S-password" className="S-label-password">
                      <span className="S-content-password"><AiOutlineLock/>  Password</span>
                    </label>

            </div>


            <div className="confirm-password">

                    <input required className="re-password" type="password"/>  
                    <label for="re-password" className="S-label-password2">
                      <span className="S-re-content-password"> <AiOutlineLock/>  Confirm Password</span>
                    </label>

            </div>
            
            <input disable={isLoading} className="buttonSU" type="submit" value="Sign Up"/>
            {error && <div className="error"> {error}</div>}
        
    
          <p>Already have an account? <Link to="/Login" className="link_SU">Log in here!</Link></p>
    
    
          {/* <Link to="/" className="link">
            To Home
          </Link> */}
        </form>
      </body>
    );
  }

export default Signup;
