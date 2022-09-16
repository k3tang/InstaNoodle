import "./index.css"
import { NavLink } from "react-router-dom";
import noodleIcon from "../../assets/ramen.png";
import gitHub from "../../assets/GitHub-Mark-Light-120px-plus.png";
import linkedIn from "../../assets/LI-In-Bug.png";

const Footer = () => {
    return (
        <><div className="footer-outer-wrapper">
            <div className="footer-container">
                <div className="footer-logo-container">
                    <a href="https://github.com/k3tang"><img src={gitHub} alt="github"/></a>
                    <a href="https://www.linkedin.com/in/karentsiu/"><img src={linkedIn} alt="linkedIn" id="linkedIn"/></a>
                </div>
                <div className="footer-logo"><div><NavLink exact to="/">InstaNoodles</NavLink></div><img src={noodleIcon} alt="noodle-icon" /></div>
            </div>
        </div>
        </>
    )
}

export default Footer;
