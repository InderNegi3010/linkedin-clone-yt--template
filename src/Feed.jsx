import React, { useEffect, useState } from "react";
import CreateIcon from "@mui/icons-material/Create";
import InputOptions from "./InputOptions.jsx";
import ImageIcon from "@mui/icons-material/Image";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import EventIcon from "@mui/icons-material/Event";
import CalendarViewDayIcon from "@mui/icons-material/CalendarViewDay";
import Post from "./Post.jsx";
import { db } from "./firebase";
import {
  collection,
  onSnapshot,
  addDoc,
  serverTimestamp,
  query,
  orderBy,
} from "firebase/firestore";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice.jsx";
import { AnimatePresence } from "framer-motion";

function Feed() {
  const user = useSelector(selectUser);
  const [input, setInput] = useState("");
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const q = query(collection(db, "posts"), orderBy("timestamp", "desc"));
    const unsubscribe = onSnapshot(q, snapshot => {
      setPosts(
        snapshot.docs.map(doc => ({
          id: doc.id,
          data: doc.data(),
        }))
      );
    });

    return () => unsubscribe(); // Cleanup listener on unmount
  }, []);

  const sendPost = async e => {
    e.preventDefault(); // ✅ fixed typo

    await addDoc(collection(db, "posts"), {
      name: user.displayName,
      description: user.email,
      message: input,
      photoUrl: user.photoURL || "",
      timestamp: serverTimestamp(),
    });

    setInput("");
  };

  return (
    <div className="flex-0.6 mx-5 lg:order-2 order-2">
      <div className="bg-white p-3 pb-5 rounded-lg mb-5">
        <div className="border border-gray-300 rounded-full p-3 flex text-gray-500 pl-4">
          <CreateIcon />
          <form className="flex w-full">
            <input
              value={input}
              onChange={e => setInput(e.target.value)}
              type="text"
              className="border-none flex-1 ml-3 outline-none font-semibold"
            />
            <button onClick={sendPost} type="submit" className="hidden">
              Send
            </button>
          </form>
        </div>

        <div className="flex justify-evenly">
          <InputOptions Icon={ImageIcon} title="Photo" color="#7085F9" />
          <InputOptions
            Icon={SubscriptionsIcon}
            title="Video"
            color="#E7A33E"
          />
          <InputOptions Icon={EventIcon} title="Event" color="#C8C8CD" />
          <InputOptions
            Icon={CalendarViewDayIcon}
            title="Write article"
            color="#7FC15E"
          />
        </div>
      </div>

      <AnimatePresence>
        {/* Post */}
        {posts.map(({ id, data: { name, description, message, photoUrl } }) => (
          <Post
            key={id}
            name={name}
            description={description}
            message={message}
            photoUrl={photoUrl}
          />
        ))}
      </AnimatePresence>
    </div>
  );
}

export default Feed;
