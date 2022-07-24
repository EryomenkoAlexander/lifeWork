import React from 'react'
import { useSelector } from 'react-redux'
import s from './Calculate.module.css'
import CalculateForm from '../calculate-form/CalculateForm'

const Calculate = () => {
  let calculate = useSelector(state => state.cabinet.calculate)
  
  return (
    <div className={s.calculate}>
      <h2>{calculate.title}</h2>
      <div className={s.wrapper}>
          <CalculateForm inputs={calculate.inputs} />
      </div>
    </div>
  );
}

export default Calculate 