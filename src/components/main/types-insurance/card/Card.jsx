import React from "react";
import s from './Card.module.css'

const Card = (props) => {
    return (
      <div className={s.card}>
        {props.data.sideImg === "right" ? (
          <div className={s.imgRight}>
            <span>{props.data.content}</span>
            <div>
              <img src={props.data.imgSrc} alt="icon" />
            </div>
          </div>
        ) : (
          <div className={s.imgLeft}>
            <div>
              <img src={props.data.imgSrc} alt="icon" />
            </div>
            <span>{props.data.content}</span>
          </div>
        )}
      </div>
    );
}

export default Card;