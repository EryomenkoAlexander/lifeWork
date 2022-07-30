import React from "react";
import s from "./Dignitys.module.css";

const Dignitys = (props) => {
  return (
    <div className={s.dignitys}>
      <div className={s.dignitysTitle}>
        <span>{props.dignitys.title}</span>
      </div>
      <div className={s.items}>
        {props.dignitys.items.map((i) => (
          <div key={i.id}>
            <img src={i.imgSrc} alt="item" />
            <span>{i.content.toUpperCase()}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dignitys;
