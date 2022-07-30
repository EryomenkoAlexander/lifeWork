import React from "react";
import s from "./Dignitys.module.css";

const Dignitys = ({dignitys}) => {
  return (
    <div className={s.dignitys}>
      <div className={s.dignitysTitle}>
        <span>{dignitys.title}</span>
      </div>
      <div className={s.items}>
        {dignitys.items.map((i) => (
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
