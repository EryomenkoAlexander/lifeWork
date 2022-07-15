import React from "react";
import s from "./Card.module.css";
import Button from "../../../snippets/button/Button";

const Card = (props) => {
  return (
    <div className={s.card}>
      <div className={s.wrapper}>
        <h2>{props.data.title.toUpperCase()}</h2>
        <img src={props.data.imgSrc} alt="icon" />
        <div>
          {props.data.contentBtn.map((cb) => (
            <Button key={cb.id}>{cb.content.toUpperCase()}</Button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;
