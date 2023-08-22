import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Settings.css";
import Profile from "./Profile";
import PersonIcon from "@mui/icons-material/Person";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LogoutIcon from "@mui/icons-material/Logout";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import { IconButton } from "@mui/material";

const Settings = ({ darkTheme }) => {
  const [profilebutton, setProfileButton] = useState(false);
  let modebutton = true;
  const navigate = useNavigate();
  const loadProfile = () => {
    setProfileButton(true);
  };
  // const toggletheme = () => {
  //   if(darkTheme?.palette?.mode==="light"){
  //     darkTheme?.palette?.mode=="dark";
  //   }
  //   else{
  //     darkTheme?.palette?.mode == "light";
  //   }

  // }

  return (
    <div className="settingsmaincomponent">
      <div className="settings_sidemenu">
        <PersonIcon />
        <p className="Profilebutton" onClick={loadProfile}>
          Profile
        </p>
        {/* <IconButton onClick={switchtheme}>
          {modebutton === false && <DarkModeIcon />}
          {modebutton === true && <DarkModeOutlinedIcon />}
        </IconButton> */}
        {/* <p>Dark Mode</p> */}
        <p>Enable Dark Mode</p>
        {/* <p onClick={toggletheme}></p> */}
        {darkTheme?.palette?.mode}
        <LogoutIcon />
        <p>Recent Designs</p>
        <p>LogOut</p>
      </div>
      <div className="settings_pages">
        {profilebutton === true && <Profile />}
      </div>
    </div>
  );
};

export default Settings;
