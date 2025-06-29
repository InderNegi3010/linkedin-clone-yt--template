import React , {forwardRef} from 'react'
import "./Post.css"
import { Avatar } from '@mui/material'
import InputOptions from './InputOptions'
import { ChatOutlined, SendOutlined, ShareOutlined, ThumbUpAltOutlined } from '@mui/icons-material'
import { motion } from 'framer-motion';


const Post = forwardRef(({ name, description, message, photoUrl }, ref) => {
  return (
    <motion.div
      ref={ref}
      className="post"
      initial={{ opacity: 0, y: 20 }}     // animation on mount
      animate={{ opacity: 1, y: 0 }}      // animation while visible
      exit={{ opacity: 0, y: -20 }}       // animation on unmount
      transition={{ duration: 0.3 }}      // smooth timing
    >
      <div className="post__header">
        <Avatar src={photoUrl}>{name[0]}</Avatar>
        <div className="post__info">
          <h2>{name}</h2>
          <p>{description}</p>
        </div>
      </div>

      <div className="post__body">
        <p>{message}</p>
      </div>

      <div className="post__buttons">
        <InputOptions Icon={ThumbUpAltOutlined} title="Like" color="gray" />
        <InputOptions Icon={ChatOutlined} title="Comment" color="gray" />
        <InputOptions Icon={ShareOutlined} title="Share" color="gray" />
        <InputOptions Icon={SendOutlined} title="Send" color="gray" />
      </div>
    </motion.div>
  );
});

export default Post;