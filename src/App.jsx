import React, { useEffect } from "react";
import Header from "./Header.jsx";
import Sidebar from "./Sidebar.jsx";
import Feed from "./Feed.jsx";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "./features/userSlice.jsx";
import Login from "./Login.jsx";
import { auth } from "./firebase";
import Widgets from "./Widgets.jsx";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(userAuth => {
      if (userAuth) {
        dispatch(
          login({
            email: userAuth.email,
            uid: userAuth.uid,
            displayName: userAuth.displayName,
            photoURL: userAuth.photoURL,
          })
        );
      } else {
        dispatch(logout());
      }
    });

    return () => unsubscribe(); // clean up listener on unmount
  }, [dispatch]); // ✅ include dispatch here

  return (
    <div className="bg-linkedin-gray flex flex-col items-center min-h-screen">
      <Header />

      {!user ? (
        <Login />
      ) : (
        <div className="flex flex-col lg:flex-row w-full max-w-7xl mt-9 px-5 lg:px-6 gap-5 lg:gap-6 box-border">
          <Sidebar />
          <Feed />
          <Widgets />
        </div>
      )}
    </div>
  );
}

export default App;
