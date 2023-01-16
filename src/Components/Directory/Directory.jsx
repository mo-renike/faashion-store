import React from "react";
import MenuItem from "../Menu-item/MenuItem";
import "./Directory.scss";


const sections = [
    {
        id: 1,
        title: "Hats",
        img: "https://images.unsplash.com/photo-1533055640609-24b498dfd74c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2274&q=80",
    },
    {
        id: 2,
        title: "Jackets",
        img: "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80",
    },
    {
        id: 3,
        title: "Sneakers",
        img: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80",
    },
    {
        id: 4,
        title: "Mens",
        img: "https://images.unsplash.com/photo-1621335829175-95f437384d7c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80",
        size: "large",
    },
    {
        id: 5,
        title: "Womens",
        img: "https://images.unsplash.com/flagged/photo-1575278154894-9f52e7c93bec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=730&q=80",
        size: "large",
    },
];

const Directory = () => {
    return (
        <div className="directory">
            {sections.map(({ id, title, img, size }) => (
                <MenuItem key={id} title={title} img={img} size={size} />
            ))}
        </div>
    );
};

export default Directory;
