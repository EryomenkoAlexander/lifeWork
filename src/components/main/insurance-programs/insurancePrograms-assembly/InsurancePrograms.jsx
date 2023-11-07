import React from "react";
import s from "./InsurancePrograms.module.css";
import { useSelector } from "react-redux";
import Card from "../card/card-assembly/Card";

const InsurancePrograms = () => {
  let insurancePrograms = useSelector((state) => state.home.insurancePrograms);

  return (
    <div className={s.insurancePrograms}>
      <h2>{insurancePrograms.title.toUpperCase()}</h2>
      <div className={s.wrapper}>
        {insurancePrograms.cards.map((c) => (
          <Card data={c} key={c.id} />
        ))}
      </div>
    </div>
  );
};

export default InsurancePrograms;
