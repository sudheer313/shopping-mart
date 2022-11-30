import React from "react";
import { auth, googleProvider } from "../firebase";
import { signInWithPopup, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
const Login = () => {
//useNavigateHook
  const navigate = useNavigate();
  const handleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      console.log(result.user);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  const handleSignout = async () => {
    try {
      const result = await signOut(auth);
      console.log("signout sucessfull");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <button onClick={handleLogin}>login</button>
      <button onClick={handleSignout}>Signout</button>
    </div>
  );
};

export default Login;
