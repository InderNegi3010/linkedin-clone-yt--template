import { useState } from "react";
import "./Login.css";
import { auth } from "./firebase";
import { useDispatch } from "react-redux";
import {  signInWithEmailAndPassword, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { login } from './features/userSlice'; 


function Login() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [profilePic, setProfilePic] = useState("");
  const dispatch = useDispatch();

  const loginToApp = (e) => {
  e.preventDefault();

  signInWithEmailAndPassword(auth, email, password)
    .then((userAuth) => {
      dispatch(login({
        email: userAuth.user.email,
        uid: userAuth.user.uid,
        displayName: userAuth.user.displayName,
        photoURL: userAuth.user.photoURL
      }));
    })
    .catch((error) => alert(error.message));
};


const register = () => {
  if (!name) {
    return alert("Please enter your full name");
  }

  createUserWithEmailAndPassword(auth, email, password)
    .then((userAuth) => {
      return updateProfile(userAuth.user, {
        displayName: name,
        photoURL: profilePic,
      }).then(() => {
        dispatch(login({
          email: userAuth.user.email,
          uid: userAuth.user.uid,
          displayName: name,
          photoURL: profilePic,
        }));
      });
    })
    .catch((error) => alert(error.message));
};



  return (
    <div className="login">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWMjR7gx6W5-B-hglc98RYENcZeIrSg0t6aA&s"
        alt="LinkedIn Logo"
      />

      <form>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Full name {required for registration}"
          type="text"
        />

        <input
          value={profilePic}
          onChange={(e) => setProfilePic(e.target.value)}
          placeholder="Profile pic URL {Optional}"
          type="text"
        />

        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          type="text"
        />

        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          type="password"
        />

        <button type="submit" onClick={loginToApp}>
          Sign In
        </button>
      </form>

      <p>
        Not a member?{". "}
        <span onClick={register} className="login__register">
          Register Now
        </span>
      </p>
    </div>
  );
}

export default Login;
