import React from "react";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <a href="https://github.com/miraidaa" target="_blank" rel="noopener noreferrer">
          <GitHubIcon />
        </a>
        <a href="https://www.linkedin.com/in/miraida-saparova-568a6622a/" target="_blank" rel="noopener noreferrer">
          <LinkedInIcon />
        </a>
        
      </div>
    </div>
  );
}

export default Footer;
