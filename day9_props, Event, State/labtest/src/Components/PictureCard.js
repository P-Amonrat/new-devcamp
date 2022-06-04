import React from "react";
import './PictureCard.css';

const PictureCard = (props) => {
    return (
        <div>
            <div className="item">
                        <p>ID: {props.id}</p>
                        <p>LIKE: {props.likeCount}</p>
                        <p>COMMENT: {props.commentCount}</p>
                    </div>
                </div>
    )
}

export default PictureCard;