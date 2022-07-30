import React from "react";
import Card from "../card/Card";
import s from "./TypesInsurance.module.css";
import { useSelector } from "react-redux";

const TypesInsurance = () => {
  let typesInsurance = useSelector((state) => state.typesInsurance);
  return (
    <div className={s.typesInsurance}>
      <div className="container">
        <div className={s.wrapper}>
          <div className={s.title}>
            <h2>{typesInsurance.title.toUpperCase()}</h2>
          </div>

          <div className="info">
            <div className={s.infoWrapper}>
              {typesInsurance.cards.map((c) => (
                <Card data={c} key={c.id} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TypesInsurance;
