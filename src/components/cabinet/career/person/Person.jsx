import React from 'react'
import s from './Person.module.css'

const Person = ({data}) => {
  return (
    <div className={s.person}>
        <div className={s.wrapper}>
            <div className={s.avatar}>
                <img src={data.avatar} alt="avatar" />
            </div>

            <div className={s.info}>
                <h3>{data.fullName}</h3>
                <div>Должность: <span>{data.position}</span></div>
                <div>Стаж работы: <span>{data.experience}</span></div>
            </div>
        </div>
    </div>
  )
}

export default Person