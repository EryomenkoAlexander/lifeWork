import React from 'react'
import Input from '../../../../snippets/input/Input';
import s from './Step3.module.css'

const Step3 = ({step_3, remark, register, errors}) => {
  return (
    <div className={s.step}>
      <div className={s.wrapper}>
        <div>
          <span>{remark}</span>
        </div>
        {step_3.map((s) => (
          <Input key={s.id} data={s} register={register} errors={errors} />
        ))}
      </div>
    </div>
  );
}

export default Step3