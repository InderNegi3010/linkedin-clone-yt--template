import React from "react";
import "./Sidebar.css";
import { Avatar } from "@mui/material";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";

function Sidebar() {
  const user = useSelector(selectUser);

  const recentItem = (topic) => (
    <div className="sidebar__recentItem">
      <span className="sidebar__hash">#</span>
      <p>{topic}</p>
    </div>
  );

  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <img
          src="https://images.pexels.com/photos/167684/pexels-photo-167684.jpeg"
          alt=""
        />
        <Avatar src={user.photoURL} className="sidebar__avatar" />

        <h2>{user.displayName}</h2>
        <h4>{user.email}</h4>
      </div>

      <div className="sidebar__stats">
        <div className="sidebar__stat">
          <p>Who viewed you </p>
          <p className="sidebar__statNumber">2,834</p>
        </div>

        <div className="sidebar__stat">
          <p>Views on post </p>
          <p className="sidebar__statNumber">2,234</p>
        </div>
      </div>

      <div className="sidebar__bottom">
        <p>Recent</p>
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
