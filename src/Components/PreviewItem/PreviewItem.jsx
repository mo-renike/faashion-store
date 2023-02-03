import React from 'react'
import "./PreviewItem.scss"

const PreviewItem = ({ name, imageUrl, price }) => {
    return (
        <div className='previewItem'>
            <div className='previewItem__img' style={{
                backgroundImage: `url(${imageUrl})`,
            }} />
            <div className="previewItem__footer">
                <span className="name">{name}</span>
                <span className="price">${price}</span>
            </div>
        </div>
    )
}

export default PreviewItem