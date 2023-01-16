import React from "react";
import "./MenuItem.scss";

const MenuItem = ({ title, img, size }) => {
    return (
        <div

            className={`${size} menu_item`}
        >
            <div className="background-img" style={{
                backgroundImage: `url(${img})`,
            }} />
            <div className="menu_item-content">
                <h1 className="title">{title}</h1>
                <span className="subtitle">Shop Now</span>
            </div>
        </div>
    );
};

export default MenuItem;
