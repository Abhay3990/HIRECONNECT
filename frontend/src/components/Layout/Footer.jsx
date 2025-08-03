import React, { useContext } from "react";
import { Context } from "../../main";
import { Link } from "react-router-dom";
import { FaFacebookF, FaGithub, FaLinkedin } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";

const Footer = () => {
  const { isAuthorized } = useContext(Context);
  return (
    <footer className={isAuthorized ? "footerShow" : "footerHide"}>
      <div>&copy; All Rights Reserved By HireConnect.</div>
      <div>
       
       <Link to={"https://github.com/Abhay3990"} target="_blank" rel="noopener noreferrer">
              <FaGithub /> {/* Optional: Add text like "GitHub" if needed */}
        </Link>
        
        <Link to={"https://www.linkedin.com/in/abhay-pratap-singh-bbaa96256/"} target="_blank">
          <FaLinkedin />
        </Link>
       
      </div>
    </footer>
  );
};

export default Footer;
