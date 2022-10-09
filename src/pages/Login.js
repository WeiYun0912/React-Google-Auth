import React from "react";
import { useNavigate } from "react-router-dom";
import { auth, provide } from "../config/firebase";
import { signInWithPopup } from "firebase/auth";

const Login = () => {
  const navigate = useNavigate();

  const login = async () => {
    const result = await signInWithPopup(auth, provide);
    console.log(result);
    navigate("/");
  };

  return (
    <div>
      <button onClick={login}>Login</button>
    </div>
  );
};

export default Login;
