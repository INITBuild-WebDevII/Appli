import { Link } from "react-router-dom";
import './Signup.css';



  let regex = new RegExp("([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\"\(\[\]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\[[\t -Z^-~]*])");

  
function Signup() {
    return (
      <div className="Signup-page">
      
          <h1>Logo</h1> 

          <div className="Signup-name">

                  <input required className="S-name" type="text"/>  
                  <label for="S-name" className="S-label-name">
                    <span class="S-content-name">Name</span>
                  </label>
              
          </div>

          <div className="Signup-last">

                  <input required className="S-last" type="text"/>  
                  <label for="S-last" className="S-label-last">
                    <span class="S-content-last">Last Name</span>
                  </label>

          </div>

          <div className="Signup-email">

                  <input required className="S-email" type="text" />  
                  <label for="S-email" className="S-label-email">
                    <span class="S-content-email">Email</span>
                  </label>

          </div>

          <div className="Signup-password">

                  <input required className="S-password" type="password"/>  
                  <label for="S-password" className="S-label-password">
                    <span class="S-content-password">Password</span>
                  </label>

          </div>


          <input className="buttonSU" type="submit" value="Sign Up"/>

       
  
        <p>Already have an account? <Link to="/Login" className="link_SU">Log in here.</Link></p>
  
  
        <Link to="/" className="link">
          To Home
        </Link>
      </div>
    );
  }

export default Signup;
