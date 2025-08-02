import React from "react";
import { Avatar } from "@mui/material";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice.jsx";

function HeaderOption({ avatar, Icon, title, onClick }) {
  const user = useSelector(selectUser);

  return (
    <div
      onClick={onClick}
      className="flex flex-col items-center justify-center cursor-pointer text-gray-500 hover:text-black transition-colors duration-300 min-w-0"
    >
      {Icon && <Icon className="object-contain h-6 w-6 lg:h-7 lg:w-7" />}
      {avatar && (
        <Avatar
          className="object-contain h-6 w-6 lg:h-7 lg:w-7"
          src={user?.photoURL}
        >
          {!user?.photoURL && user?.email?.[0]?.toUpperCase()}
        </Avatar>
      )}
      <h3 className="text-xs font-normal mt-1 text-center lg:text-sm truncate max-w-16 lg:max-w-none">
        {title}
      </h3>
    </div>
  );
}

export default HeaderOption;
