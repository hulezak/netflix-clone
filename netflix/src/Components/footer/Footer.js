import React from "react";
import "./footer.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";

import YouTubeIcon from "@mui/icons-material/YouTube";

const Footer = () => {
  return (
    <div className="footer-outer-conatiner">
      <div className="footer-inner-container">
        {/* footer icons */}
        <div className="footer-icons">
          <h1>Icons </h1>
          {/* <FacebookIcon />
          <InstagramIcon />
          <YouTubeIcon /> */}
        </div>

        {/* footer dtas audio */}
        <div className="footer-data">
          <div>
            <ul>
              <li>Audio Desription</li>
              <li>Investor relations</li>
              <li>Legal Notice</li>
            </ul>
          </div>

          {/* help center */}

          <div>
            <ul>
              <li> Help center</li>
              <li>Jobs</li>
              <li>Cookie Performance</li>
            </ul>
          </div>

          <div>
            <ul>
              <li> Gift Card</li>
              <li> Terms of Use</li>
              <li>Corporate Inforamtion</li>
            </ul>
          </div>

          <div>
            <ul>
              <li> Median Center</li>
              <li> Privacy</li>
              <li>Contact us</li>
            </ul>
          </div>
        </div>
        <div className="service-code">Service Code</div>
        <div>@1997. 2024 Netflix</div>
      </div>
    </div>
  );
};

export default Footer;
