import React from 'react'
import Input from '../../../../snippets/input/Input';
import s from './Step1.module.css'

const Step1 = ({step_1, register, errors}) => {
  return (
    <div className={s.step}>
      <div className={s.wrapper}>
        {step_1.map((s) => (
          <Input key={s.id} data={s} register={register} errors={errors} />
        ))}
      </div>
    </div>
  );
}

export default Step1