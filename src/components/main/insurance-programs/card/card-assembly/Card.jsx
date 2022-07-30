import React from "react";
import s from "./Card.module.css";
import Face from "../face/Face";
import Info from "../info/Info";

const Card = ({data}) => {
  return (
    <div className={s.card}>
      <div className={s.wrapper}>
        <Face data={data} />
        <Info data={data} />
      </div>
    </div>
  );
};

export default Card;
