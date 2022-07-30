import React from 'react'
import Input from '../../../../snippets/input/Input';
import s from './Step2.module.css'

const Step2 = ({step_2, register, errors}) => {
  return (
    <div className={s.step}>
      <div className={s.wrapper}>
        {step_2.map((s) => (
          <Input key={s.id} data={s} register={register} errors={errors} />
        ))}
      </div>
    </div>
  );
}

export default Step2