import React, { useState } from "react";
import { auth, googleProvider } from "../firebase";
import { signInWithPopup, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { axiosInstance } from "../utils/axiosConfig";
import { useDispatch } from "react-redux";
import { loginError, loginStart, loginSucess } from "../redux/userSlice";

const Login = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  //useNavigateHook
  const navigate = useNavigate();
  const handleLoginWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      console.log(result.user);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  const handleSignoutWithGoogle = async () => {
    try {
      const result = await signOut(auth);
      console.log("signout sucessfull");
    } catch (error) {
      console.log(error);
    }
  };
  const handleLogin = async (e) => {
    e.preventDefault();
    dispatch(loginStart());
    try {
      const res = await axiosInstance.post("/auth/signin", { email, password });
      dispatch(loginSucess(res.data));
      navigate("/");
    } catch (error) {
      console.log(error);
      dispatch(loginError());
    }
  };
  const handlesignup=async(e)=>{

  }
  return (
    <div>
      <button onClick={handleLoginWithGoogle}>login</button>
      <button onClick={handleSignoutWithGoogle}>Signout</button>
      <button onClick={handlesignup}>SignUp</button>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="sumbit">Sign In</button>
      </form>
    </div>
  );
};

export default Login;
