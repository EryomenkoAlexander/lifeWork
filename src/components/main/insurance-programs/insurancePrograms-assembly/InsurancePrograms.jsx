import React from "react";
import Card from '../card/Card'
import s from './InsurancePrograms.module.css'
import { useSelector } from "react-redux";

const insurancePrograms = (props) => {
  let insurancePrograms = useSelector(state => state.insurancePrograms)
  
    return (
      <div className={s.insurancePrograms}>
        <h2>{insurancePrograms.title.toUpperCase()}</h2>
        <div className="container">
          <div className={s.wrapper}>
            {insurancePrograms.cards.map((c) => (
              <Card data={c} key={c.id} />
            ))}
          </div>
        </div>
      </div>
    );
}

export default insurancePrograms;