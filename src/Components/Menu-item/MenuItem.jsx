import React from "react";
import { Link } from "react-router-dom";

import "./MenuItem.scss";

const MenuItem = ({ title, img, size, link }) => {


  return (
    <Link to={`${link}`} className={`${size} menu_item`}
    >
      <div
        className="background-img"
        style={{
          backgroundImage: `url(${img})`,
        }}
      />
      <div className="menu_item-content">
        <h1 className="title">{title}</h1>
        <span className="subtitle">Shop Now</span>
      </div>
    </Link>
  );
};

export default MenuItem;
