import React from 'react'
import { useSelector } from 'react-redux'
import s from './Deduction.module.css'

const Deduction = () => {
  let deduction = useSelector(state => state.cabinet.deduction)

  return (
    <div className={s.deduction}>
      <h2>{deduction.title}</h2>
      <div className={s.wrapper}>
        <div className={s.items}>
          {deduction.items.map((i) => (
            <div key={i.id}>
              <h3>{i.topic}</h3>
              <p>{i.listTitle}</p>
              <ul>{i.list && i.list.map((l) => <li key={l}>{l}</li>)}</ul>
              <p>{i.subInfo}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Deduction