import "./Footer.css"
import logo from "../assets/logo-letter.png";
import letters from "../assets/appli-letters.png";
import {VscLocation} from "react-icons/vsc";
import {FiPhone}from "react-icons/fi";
import {TbMessageChatbot} from "react-icons/tb";
import {IoShareSocialOutline} from "react-icons/io5";

function Footer() {
    return (
        <div className="footer">
            <hr style={{width: "100%"}} className="footer-div" />
            <div className="contact-info">
                <div className="logo footer-logo">
                    <img src={logo} alt="logo" className="logo-img" />
                    <img id="letters" src={letters} />
                </div>
                <div className="footer-info">
                    <p className="footer-resources"> <VscLocation className="address-icon"/> 11200 SW 8th St, Miami, FL 33199</p>
                    <p className="footer-resources contact"> <FiPhone className="call-icon"/> 954-851-2692</p>
                    <p className="footer-resources contact"><TbMessageChatbot className="message-icon"/> 954-851-2692</p>
                    <p className="footer-resources">
                        <IoShareSocialOutline className="share-icon"/> Social Media : 
                    </p>
                </div>
            </div>
            <hr className="footer-div" />
                <div className="company-info" style={{display: "flex", justifyContent: "space-between"}}>
                    <div>
                    <p className="contact"> ABOUT US </p>
                    <p className="contact"> CONTACT US </p>
                    <p className="contact"> HELP </p>
                    <p className="contact"> PRIVACY POLICY </p>
                    <p className="contact"> DISCLAIMER </p>
                    </div>
                    <p>Copyright &copy; 2023 • Appli Inc.</p>
                </div>
        </div>
    );
}
export default Footer;