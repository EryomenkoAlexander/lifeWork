import React from "react";
import s from "./Card.module.css";

const Card = ({data}) => {
  return (
    <div className={s.card}>
      {data.sideImg === "right" ? (
        <div className={s.imgRight}>
          <span>{data.content}</span>
          <div>
            <img src={data.imgSrc} alt="icon" />
          </div>
        </div>
      ) : (
        <div className={s.imgLeft}>
          <div>
            <img src={data.imgSrc} alt="icon" />
          </div>
          <span>{data.content}</span>
        </div>
      )}
    </div>
  );
};

export default Card;
