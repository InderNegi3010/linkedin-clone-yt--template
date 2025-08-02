import React, { useState, useEffect, useRef } from "react";
import { Avatar } from "@mui/material";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice.jsx";
import { db } from "../firebase";
import { collection, query, where, orderBy, onSnapshot } from "firebase/firestore";
import Post from "../Post.jsx";
import { motion, AnimatePresence } from "framer-motion";
import CloseIcon from "@mui/icons-material/Close";

function ProfileDropdown({ isOpen, onClose }) {
  const user = useSelector(selectUser);
  const [userPosts, setUserPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const dropdownRef = useRef(null);

  useEffect(() => {
    if (!user || !isOpen) return;

    const q = query(
      collection(db, "posts"),
      where("description", "==", user.email),
      orderBy("timestamp", "desc")
    );

    const unsubscribe = onSnapshot(q, (snapshot) => {
      setUserPosts(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      );
      setLoading(false);
    });

    return () => unsubscribe();
  }, [user, isOpen]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        ref={dropdownRef}
        initial={{ opacity: 0, y: -10, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: -10, scale: 0.95 }}
        transition={{ duration: 0.2 }}
        className="absolute top-full right-0 mt-2 w-96 bg-white rounded-lg shadow-lg border border-gray-200 z-50 max-h-96 overflow-hidden"
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-100">
          <div className="flex items-center">
            <Avatar src={user?.photoURL} className="mr-3">
              {!user?.photoURL && user?.email?.[0]?.toUpperCase()}
            </Avatar>
            <div>
              <h3 className="font-semibold text-sm">{user?.displayName}</h3>
              <p className="text-xs text-gray-500">{user?.email}</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1 hover:bg-gray-100 rounded-full transition-colors"
          >
            <CloseIcon className="text-gray-500 text-sm" />
          </button>
        </div>

        {/* Posts Section */}
        <div className="p-4">
          <h4 className="font-semibold text-sm mb-3 text-gray-700">
            Your Posts ({userPosts.length})
          </h4>
          
          <div className="max-h-64 overflow-y-auto space-y-3">
            {loading ? (
              <div className="flex justify-center py-4">
                <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-linkedin-blue"></div>
              </div>
            ) : userPosts.length > 0 ? (
              userPosts.map(({ id, data: { name, description, message, photoUrl } }) => (
                <div key={id} className="border border-gray-100 rounded-lg p-3 bg-gray-50">
                  <div className="flex items-start mb-2">
                    <Avatar src={photoUrl} className="mr-2 w-6 h-6">
                      {name?.[0]}
                    </Avatar>
                    <div className="flex-1 min-w-0">
                      <h5 className="font-medium text-xs truncate">{name}</h5>
                      <p className="text-xs text-gray-500 truncate">{description}</p>
                    </div>
                  </div>
                  <p className="text-xs text-gray-700 line-clamp-3">{message}</p>
                </div>
              ))
            ) : (
              <div className="text-center py-6 text-gray-500">
                <p className="text-sm">No posts yet</p>
                <p className="text-xs mt-1">Start sharing your thoughts!</p>
              </div>
            )}
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

export default ProfileDropdown;