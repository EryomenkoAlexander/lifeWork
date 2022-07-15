import React from 'react'
import { useSelector } from 'react-redux'
import s from './Programs.module.css'
import Program from '../program/Program'

const Programs = () => {
  let programs = useSelector(state => state.cabinet.programs)

  return (
    <div className={s.programs}>
      <h2>{programs.title}</h2>
      <div className={s.wrapper}>
        <div className={s.items}>
          {programs.items.map((i) => (
            <Program data={i} key={i.id} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Programs