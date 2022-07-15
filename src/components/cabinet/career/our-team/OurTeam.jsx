import React from 'react'
import s from './OurTeam.module.css'
import { useSelector } from 'react-redux'
import Person from '../person/Person'
 
const OurTeam = () => {
    let ourTeam = useSelector(state => state.cabinet.career.ourTeam)

  return (
    <div className={s.ourTeam}>
      <h2>{ourTeam.title}</h2>
      <div className={s.wrapper}>
        {ourTeam.team.map((p) => (
          <Person key={p.id} data={p} />
        ))}
      </div>
    </div>
  );
}

export default OurTeam