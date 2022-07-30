import React from 'react'
import Input from '../../../../snippets/input/Input'
import s from './Step3.module.css'

const Step3 = ({step_3, register, errors}) => {
  return (
    <div className={s.step}>
        <div className={s.wrapper}>
        {step_3.map((i) => (
                <Input
                  key={i.id}
                  data={i}
                  register={register}
                  errors={errors}
                />
              ))}
        </div>
    </div>
  )
}

export default Step3