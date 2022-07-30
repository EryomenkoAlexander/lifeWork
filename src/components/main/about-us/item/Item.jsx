import React from "react";
import s from "./Item.module.css";

const Item = ({data}) => {
  return (
    <div className={s.item}>
      <div className={s.wrapper}>
        <div className={s.mainContent}>
          <div>
            {data.imgSrc ? (
              <img src={data.imgSrc} alt="icon" />
            ) : (
              ""
            )}
            <h3>{data.content}</h3>
          </div>
          <span>{data.afterContent}</span>
        </div>
        <div className={s.subContent}>
          {data.subContent.toUpperCase()}
        </div>
      </div>
    </div>
  );
};

export default Item;
