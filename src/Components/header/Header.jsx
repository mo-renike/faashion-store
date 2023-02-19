import React from "react";
import { Link } from "react-router-dom";
import "./header.scss";
import { auth } from "../../firebase/firebaseConfig.js";

const Header = ({ currentUser }) => {
  const handleSignout = () => {
    auth.signOut();
  };

  return (
    <div className="header">
      <Link to="/" className="logo">
        TC
      </Link>
      <div className="header__nav">
        <Link to="/shop">Shop</Link>
        {currentUser ? (
          <div onClick={handleSignout}>Sign Out </div>
        ) : (
          <Link to="/login">Sign In</Link>
        )}
      </div>
    </div>
  );
};

export default Header;
