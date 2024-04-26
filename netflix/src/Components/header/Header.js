import React from "react";
import "./header.css";
import N_logo from "./../../asset/img/Logo1.png";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";

const Header = () => {
  return (
    <div className="header_container_outer">
      <div className="header-container">
        <div className="header-left">
          <ul>
            <li>
              <img src={N_logo} alt="netflix logo" width="100" />
            </li>

            <li>Home</li>
            <li>TvShows</li>
            <li>Movies</li>
            <li>Latest</li>
            <li>Mylists</li>
            <li>Browse By Language</li>
          </ul>
        </div>

        {/* <div className="header-right">
          <ul>
            <li><SearchIcon /></li>
            <li><NotificationsIcon /></li>
          </ul>
        </div> */}
      </div>
    </div>
  );
};

export default Header;
