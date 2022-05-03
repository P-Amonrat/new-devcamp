import React from "react";
import './PictureCard.css';

function CardComponents() {
    const data = [
        {
          img: "https://picsum.photos/200/200",
          date: "3 May 2022",
          like: "10 Likes",
          comment: "5 Comments"
        },
        {
          img: "https://picsum.photos/200/200",
          date: "3 May 2022",
          like: "15 Likes",
          comment: "7 Comments"
        },
        {
          img: "https://picsum.photos/200/200",
          date: "3 May 2022",
          like: "50 Likes",
          comment: "10 Comments"
        },
        {
          img: "https://picsum.photos/200/200",
          date: "3 May 2022",
          like: "63 Likes",
          comment: "12 Comments"
        }
      ];
    
      const message = data.map((x, i) => {
        return (
            <div className="item" key={`picture${i}`}>
              <img className="pict" src={x.img}/>
              <h3>{x.date}</h3>
              <p>{x.like}</p>
              <p>{x.comment}</p>
            </div>
          
        );
      });
    
      return <div><div className="flex-container" >{message}</div></div>
}

export default CardComponents;