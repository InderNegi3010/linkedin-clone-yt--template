import React from "react";
import { Avatar } from "@mui/material";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice.jsx";

function Sidebar() {
  const user = useSelector(selectUser);

  const recentItem = topic => (
    <div className="flex text-sm text-gray-600 font-bold cursor-pointer mb-1 p-1 hover:bg-gray-100 hover:text-black hover:cursor-pointer rounded-lg">
      <span className="mr-2 ml-1">#</span>
      <p>{topic}</p>
    </div>
  );

  return (
    <div className="sticky top-20 flex-0.2 min-w-48 rounded-lg text-center h-fit lg:order-1 lg:mb-0 order-1 mb-4">
      <div className="flex flex-col items-center border-0 rounded-t-lg bg-white pb-3">
        <img
          src="https://images.pexels.com/photos/167684/pexels-photo-167684.jpeg"
          alt=""
          className="m-0 w-full h-16 rounded-t-lg object-cover"
        />
        <Avatar src={user.photoURL} className="mb-3" />

        <h2 className="text-sm">{user.displayName}</h2>
        <h4 className="text-xs text-gray-500">Who viewed you</h4>
      </div>

      <div className="p-3 mb-3 rounded-t-lg bg-white">
        <div className="flex mt-3 justify-between">
          <p className="text-xs text-gray-600 font-semibold">Who viewed you</p>
          <p className="font-bold text-linkedin-blue">2,834</p>
        </div>

        <div className="flex mt-3 justify-between">
          <p className="text-xs text-gray-600 font-semibold">Views on post</p>
          <p className="font-bold text-linkedin-blue">2,234</p>
        </div>
      </div>

      <div className="text-left mt-3 p-3 rounded-t-lg bg-white">
        <p className="mb-3 pb-3">Recent</p>
        {recentItem("react.js")}
        {recentItem("programing")}
        {recentItem("amazon")}
        {recentItem("linkedin")}
        {recentItem("redux")}
      </div>
    </div>
  );
}

export default Sidebar;
