import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signupStart, signupSucess } from "../redux/userSlice";
import { axiosInstance } from "../utils/axiosConfig";

export const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //useNavigatehook
  const navigate = useNavigate();
  const dispatch = useDispatch();

  //signup

  const handleSignup = async (e) => {
    e.preventDefault();

    if (name.length === 0 || email.length === 0 || password.length === 0) {
      console.log("please enter valid email and password");
      return;
    }

    dispatch(signupStart());
    try {
      const res = await axiosInstance.post("/auth/signup", {
        username: name,
        email,
        passwordstr: password,
      });
      dispatch(signupSucess(res.data.message));
      console.log(res.data);
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <h1> Create your account</h1>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleSignup}>signUp</button>
    </div>
  );
};
