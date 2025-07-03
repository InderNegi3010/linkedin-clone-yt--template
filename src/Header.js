import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import "./Header.css";
import HeaderOption from "./HeaderOption";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import HomeIcon from "@mui/icons-material/Home";
import WorkIcon from "@mui/icons-material/Work";
import TextsmsIcon from "@mui/icons-material/Textsms";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { useDispatch } from "react-redux";
import { logout } from "./features/userSlice";
import { auth } from "./firebase";

function Header() {
  const dispatch = useDispatch();

  const logoutOfApp = () => {
    dispatch(logout());
    auth.signOut();
  };

  return (
    <div className="header">
      <div className="header__left">
        <img
          src="https://imgs.search.brave.com/JUjQUiN7KGp8gsbp-sApakiA7K-5FbXXZ9tUH-ReNQk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4z/Lmljb25maW5kZXIu/Y29tL2RhdGEvaWNv/bnMvaW5maWNvbnMv/NTEyL2xpbmtlZGlu/LnBuZw"
          alt="LinkedIn Logo"
        />

        <div className="header__search">
          <SearchIcon />
          <input type="text" placeholder="Search" />
        </div>
      </div>

      <div className="header__right">
        <HeaderOption Icon={HomeIcon} title="Home" />
        <HeaderOption Icon={PeopleAltIcon} title="My Network" />
        <HeaderOption Icon={WorkIcon} title="Jobs" />
        <HeaderOption Icon={TextsmsIcon} title="Messaging" />
        <HeaderOption Icon={NotificationsIcon} title="Notifications" />
        <HeaderOption avatar={true} title="Me" onClick={logoutOfApp} />
      </div>
    </div>
  );
}

export default Header;
