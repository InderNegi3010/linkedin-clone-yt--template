import React, { forwardRef } from "react";
import { Avatar } from "@mui/material";
import InputOptions from "./InputOptions.jsx";
import {
  ChatOutlined,
  SendOutlined,
  ShareOutlined,
  ThumbUpAltOutlined,
} from "@mui/icons-material";
import { motion } from "framer-motion";

const Post = forwardRef(({ name, description, message, photoUrl }, ref) => {
  return (
    <motion.div
      ref={ref}
      className="bg-white p-4 mb-3 rounded-lg"
      initial={{ opacity: 0, y: 20 }} // animation on mount
      animate={{ opacity: 1, y: 0 }} // animation while visible
      exit={{ opacity: 0, y: -20 }} // animation on unmount
      transition={{ duration: 0.3 }} // smooth timing
    >
      <div className="flex mb-3">
        <Avatar src={photoUrl}>{name[0]}</Avatar>
        <div className="ml-3">
          <h2 className="text-sm font-semibold">{name}</h2>
          <p className="text-xs text-gray-500">{description}</p>
        </div>
      </div>

      <div className="overflow-wrap-anywhere">
        <p>{message}</p>
      </div>

      <div className="flex justify-evenly">
        <InputOptions Icon={ThumbUpAltOutlined} title="Like" color="gray" />
        <InputOptions Icon={ChatOutlined} title="Comment" color="gray" />
        <InputOptions Icon={ShareOutlined} title="Share" color="gray" />
        <InputOptions Icon={SendOutlined} title="Send" color="gray" />
      </div>
    </motion.div>
  );
});

export default Post;
