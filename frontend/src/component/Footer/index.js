import "./index.css"
import { NavLink } from "react-router-dom";
import noodleIcon from "../../assets/ramen.png";
import gitHub from "../../assets/GitHub-Mark-Light-120px-plus.png";
import linkedIn from "../../assets/LI-In-Bug.png";
import footerLogo from "../../assets/logo-footer.png"

const Footer = () => {
    return (
        <><div className="footer-outer-wrapper">
            <div className="footer-container">
                <div className="footer-logo-container">
                    <a href="https://github.com/k3tang"><img src={gitHub} alt="github"/></a>
                    <a href="https://www.linkedin.com/in/karentsiu/"><img src={linkedIn} alt="linkedIn" id="linkedIn"/></a>
                </div>
                <a href="https://www.futurenoodles.com" ><img src={footerLogo} alt="noodle-icon" className="footer-logo"/></a>
            </div>
        </div>
        </>
    )
}

export default Footer;
