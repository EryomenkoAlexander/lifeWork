import React from "react";
import s from "./Card.module.css";

const Card = ({ data }) => {
  let preview = data.preview.length ? data.preview : `/imgs/news/plugNews.png`;

  return (
    <div className={s.card}>
      <div className={s.wrapper}>
        <div className={s.preview}>
          <img src={preview} alt="preview" />
        </div>
        <div className={s.info}>
          <div>
            <span>{data.date}</span>
            <h4>{data.title.toUpperCase()}</h4>
          </div>

          <div className={s.hashtags}>
            {data.hashtags.map((h) => (
              <div key={h.id}>{h.value.toUpperCase()}</div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
