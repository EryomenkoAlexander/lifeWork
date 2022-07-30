import React from "react";
import s from "./Item.module.css";

const Item = (props) => {
  return (
    <div className={s.item}>
      <div className={s.wrapper}>
        <div className={s.mainContent}>
          <div>
            {props.data.imgSrc ? (
              <img src={props.data.imgSrc} alt="icon" />
            ) : (
              ""
            )}
            <h3>{props.data.content}</h3>
          </div>
          <span>{props.data.afterContent}</span>
        </div>
        <div className={s.subContent}>
          {props.data.subContent.toUpperCase()}
        </div>
      </div>
    </div>
  );
};

export default Item;
