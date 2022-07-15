import React from "react";
import Card from '../card/Card'
import s from './MainCards.module.css'
import { useSelector } from "react-redux";

const MainCards = (props) => {
  let mainCards = useSelector(state => state.mainCards)
    return (
      <div className={s.mainCards}>
        <div className="container">
          <div className={s.wrapper}>
            {mainCards.cards.map((c) => (
              <Card data={c} key={c.id} />
            ))}
          </div>
        </div>
      </div>
    );
}

export default MainCards;