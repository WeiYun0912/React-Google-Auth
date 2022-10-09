import React from "react";
import { auth } from "../config/firebase";

const User = () => {
  console.log(auth);
  return (
    <div>
      <p>{auth?.currentUser.displayName}</p>
      <p>{auth?.currentUser.email}</p>
      <img src={auth?.currentUser.photoURL} alt="" />
    </div>
  );
};

export default User;
