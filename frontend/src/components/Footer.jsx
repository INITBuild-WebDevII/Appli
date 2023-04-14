import "./Footer.css"
import logo from "../assets/logo-letter.png";
import letters from "../assets/appli-letters.png";
import {VscLocation} from "react-icons/vsc";
import {FiPhone}from "react-icons/fi";
import {TbMessageChatbot} from "react-icons/tb";
import {IoShareSocialOutline} from "react-icons/io5";
import {BsPrinter} from "react-icons/bs";
import {BsPrinterFill} from "react-icons/bs";
import {AiFillFacebook, AiOutlineTwitter, AiOutlineGooglePlus} from "react-icons/ai"
import {FaLinkedinIn, FaInstagram} from "react-icons/fa";
import {GrYoutube} from "react-icons/gr";
import {BsPinterest} from "react-icons/bs";
import {BiWifi2} from "react-icons/bi";
import { useNavigate } from "react-router-dom";

function Footer() {
    const navigate = useNavigate();

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
                    <p className="footer-resources contact"><BsPrinterFill className="message-icon"/> 954-851-2692</p>
                    <p className="footer-resources">
                        Social Media : 
                        <div className="icons-share" >
                            <AiFillFacebook className="icons-1" /> <AiOutlineTwitter className="icons-2"/> <FaLinkedinIn className="icons-3"/>  <GrYoutube className="icons-4"/>  <FaInstagram className="icons-5"/> <AiOutlineGooglePlus className="icons-6"/> <BsPinterest className="icons-7"/>
                        </div>
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