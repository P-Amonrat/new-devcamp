import './PictureCard.css';
import React, { useState } from "react";

const PictureCardComponents = (props) => {
    const [like, setLike] = useState(props.likeCount);

    const onClickFunction = () => {
        setLike(like + 1); 
    }

    const [comment, setComment] = useState(props.commentCount);

    const onKeyPressFunction = (e) => {
        let m = e.target.value;
        if (e.which === 13 && m !== "") {  //เป็นค่า default ของปุ่ม Enter
            alert("Thank you for your comment", setComment(comment + 1))
            e.target.value = "";
        }
    }

    return (
        <div className="flex-container" >
            <div className="item">
                <p><img className="picture" src={props.imgSrc}></img></p>
                <p>ID: {props.id}</p>
                <p>CREATE BY: {props.createBy}</p>
                {like > 0 && <p>{like} LIKES</p>}
                {comment > 0 && <p>{comment} COMMENTS</p>}
                <input type="button" value="Like" onClick={onClickFunction} />
                <input type="text" onKeyPress={onKeyPressFunction} />
            </div>
        </div>
    )
}

export default PictureCardComponents;