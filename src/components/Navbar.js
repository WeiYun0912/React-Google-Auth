import React from "react";
import { Link } from "react-router-dom";
import { auth } from "../config/firebase";

const Navbar = () => {
  return (
    <div>
      <Link to="/">Home</Link> | <Link to="/login">Login</Link> |{" "}
      {auth?.currentUser?.displayName && <Link to="/user">User</Link>}
    </div>
  );
};

export default Navbar;
