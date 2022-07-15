import React from 'react'
import s from './Opening.module.css'
import { useSelector } from 'react-redux'

const Opening = () => {
    let opening = useSelector(state => state.cabinet.career.opening)

  return (
    <div className={s.opening}>
      <h2>{opening.title}</h2>
      <div className={s.wrapper}>
        <div className={s.table}>
          <div>
            <h3 className={s.position}>{opening.titleTable.position}</h3>
            <h3 className={s.freePlaces}>{opening.titleTable.freePlaces}</h3>
            <h3 className={s.salary}>{opening.titleTable.salary}</h3>
          </div>
          {opening.items.map((i) => (
            <div key={i.id} className={s.item}>
              <div className={s.position}>{i.position}</div>
              <div className={s.freePlaces}>{i.freePlaces}</div>
              <div className={s.salary}>{i.salary}</div>
            </div>
          ))}
        </div>
        <div className={s.remark}>{opening.remark}</div>
      </div>
    </div>
  );
}

export default Opening