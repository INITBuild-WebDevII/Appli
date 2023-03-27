import "./Footer.css"
import logo from "../assets/logo-letter.png";
import letters from "../assets/appli-letters.png";

function Footer() {
    return (
        <div className="footer">
            <hr className="footer-div" />
            <div className="contact-info">
                <div className="logo footer-logo">
                    <img src={logo} alt="logo" className="logo-img" />
                    <img id="letters" src={letters} />
                </div>
                <div className="footer-info">
                    <p className="footer-resources">11200 SW 8th St, Miami, FL 33199</p>
                    <p className="footer-resources contact">954-851-2692</p>
                    <p className="footer-resources contact">954-851-2692</p>
                    <p className="footer-resources">
                        Social Media : 
                    </p>
                </div>
            </div>
            <hr className="footer-div" />
                <div className="company-info">
                    <p className="contact"> ABOUT US </p>
                    <p className="contact"> CONTACT US </p>
                    <p className="contact"> HELP </p>
                    <p className="contact"> PRIVACY POLICY </p>
                    <p className="contact"> DISCLAIMER </p>
                </div>
        </div>
    );
}
export default Footer;