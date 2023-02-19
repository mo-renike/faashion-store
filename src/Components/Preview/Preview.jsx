import React from "react";
import PreviewItem from "../PreviewItem/PreviewItem";
import "./Preview.scss";

const Preview = ({ title, items }) => {

    return (
        <div className="preview">
            <h2 className="preview__title">{title}</h2>
            <div className="preview__collection">
                {items.slice(0, 4).map(({ id, ...props }) => (
                    <PreviewItem key={id} {...props} />
                ))}
            </div>
        </div>
    );
};

export default Preview;
