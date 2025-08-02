import { useState } from "react";
import { auth } from "./firebase";
import { useDispatch } from "react-redux";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { login } from "./features/userSlice.jsx";

function Login() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [profilePic, setProfilePic] = useState("");
  const dispatch = useDispatch();

  const loginToApp = e => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then(userAuth => {
        dispatch(
          login({
            email: userAuth.user.email,
            uid: userAuth.user.uid,
            displayName: userAuth.user.displayName,
            photoURL: userAuth.user.photoURL,
          })
        );
      })
      .catch(error => alert(error.message));
  };

  const register = () => {
    if (!name) {
      return alert("Please enter your full name");
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then(userAuth => {
        return updateProfile(userAuth.user, {
          displayName: name,
          photoURL: profilePic,
        }).then(() => {
          dispatch(
            login({
              email: userAuth.user.email,
              uid: userAuth.user.uid,
              displayName: name,
              photoURL: profilePic,
            })
          );
        });
      })
      .catch(error => alert(error.message));
  };

  return (
    <div className="grid place-items-center ml-auto mr-auto pt-24 pb-24">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWMjR7gx6W5-B-hglc98RYENcZeIrSg0t6aA&s"
        alt="LinkedIn Logo"
        className="object-contain h-18 mt-5 mb-5"
      />

      <form className="flex flex-col">
        <input
          value={name}
          onChange={e => setName(e.target.value)}
          placeholder="Full name {required for registration}"
          type="text"
          className="w-80 h-12 text-lg pl-3 mb-3 rounded-lg border border-gray-400 outline-none"
        />

        <input
          value={profilePic}
          onChange={e => setProfilePic(e.target.value)}
          placeholder="Profile pic URL {Optional}"
          type="text"
          className="w-80 h-12 text-lg pl-3 mb-3 rounded-lg border border-gray-400 outline-none"
        />

        <input
          value={email}
          onChange={e => setEmail(e.target.value)}
          placeholder="Email"
          type="text"
          className="w-80 h-12 text-lg pl-3 mb-3 rounded-lg border border-gray-400 outline-none"
        />

        <input
          value={password}
          onChange={e => setPassword(e.target.value)}
          placeholder="Password"
          type="password"
          className="w-80 h-12 text-lg pl-3 mb-3 rounded-lg border border-gray-400 outline-none"
        />

        <button
          type="submit"
          onClick={loginToApp}
          className="w-80 h-12 text-lg text-white bg-linkedin-blue rounded-lg border border-gray-400 outline-none"
        >
          Sign In
        </button>
      </form>

      <p className="mt-5">
        Not a member?{". "}
        <span onClick={register} className="text-linkedin-blue cursor-pointer">
          Register Now
        </span>
      </p>
    </div>
  );
}

export default Login;
