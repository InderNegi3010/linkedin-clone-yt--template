import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import HeaderOption from "./HeaderOption.jsx";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import HomeIcon from "@mui/icons-material/Home";
import WorkIcon from "@mui/icons-material/Work";
import TextsmsIcon from "@mui/icons-material/Textsms";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { useDispatch } from "react-redux";
import { logout } from "./features/userSlice.jsx";
import { auth } from "./firebase";

function Header() {
  const dispatch = useDispatch();

  const logoutOfApp = () => {
    dispatch(logout());
    auth.signOut();
  };

  return (
    <div className="sticky top-0 bg-white border-b border-gray-300 z-50 w-full">
      {/* Mobile Layout */}
      <div className="lg:hidden">
        {/* Top Row - Logo and Search */}
        <div className="flex items-center justify-between p-3">
          <img
            src="https://imgs.search.brave.com/JUjQUiN7KGp8gsbp-sApakiA7K-5FbXXZ9tUH-ReNQk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4z/Lmljb25maW5kZXIu/Y29tL2RhdGEvaWNv/bnMvaW5maWNvbnMv/NTEyL2xpbmtlZGlu/LnBuZw"
            alt="LinkedIn Logo"
            className="object-contain h-8"
          />

          <div className="flex items-center bg-linkedin-lightGray rounded-full px-3 py-2 flex-1 max-w-xs mx-3">
            <SearchIcon className="text-gray-500 text-sm" />
            <input
              type="text"
              placeholder="Search"
              className="outline-none bg-transparent w-full ml-2 text-sm"
            />
          </div>
        </div>

        {/* Bottom Row - Navigation */}
        <div className="flex items-center justify-between px-2 pb-2">
          <HeaderOption Icon={HomeIcon} title="Home" />
          <HeaderOption Icon={PeopleAltIcon} title="Network" />
          <HeaderOption Icon={WorkIcon} title="Jobs" />
          <HeaderOption Icon={TextsmsIcon} title="Messaging" />
          <HeaderOption Icon={NotificationsIcon} title="Notifications" />
          <HeaderOption avatar={true} title="Me" onClick={logoutOfApp} />
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden lg:flex items-center justify-between px-6 py-3">
        <div className="flex items-center flex-1">
          <img
            src="https://imgs.search.brave.com/JUjQUiN7KGp8gsbp-sApakiA7K-5FbXXZ9tUH-ReNQk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4z/Lmljb25maW5kZXIu/Y29tL2RhdGEvaWNv/bnMvaW5maWNvbnMv/NTEyL2xpbmtlZGlu/LnBuZw"
            alt="LinkedIn Logo"
            className="object-contain h-12 mr-4"
          />

          <div className="flex items-center bg-linkedin-lightGray rounded-lg px-4 py-2 max-w-md">
            <SearchIcon className="text-gray-500" />
            <input
              type="text"
              placeholder="Search"
              className="outline-none bg-transparent w-full ml-3"
            />
          </div>
        </div>

        <div className="flex items-center gap-6">
          <HeaderOption Icon={HomeIcon} title="Home" />
          <HeaderOption Icon={PeopleAltIcon} title="My Network" />
          <HeaderOption Icon={WorkIcon} title="Jobs" />
          <HeaderOption Icon={TextsmsIcon} title="Messaging" />
          <HeaderOption Icon={NotificationsIcon} title="Notifications" />
          <HeaderOption avatar={true} title="Me" onClick={logoutOfApp} />
        </div>
      </div>
    </div>
  );
}

export default Header;
