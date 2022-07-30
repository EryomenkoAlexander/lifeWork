import React from 'react'
import s from './Step4.module.css'

const Step4 = ({step_4, register, errors}) => {
  return (
    <div className={s.step}>
      <div className={s.wrapper}>
        {step_4.map((i) => (
          <label
            key={i.id}
            className={
              errors.agreement && i.name === "agreement" ? s.error : ""
            }
          >
            <span>{i.title}</span>
            <input
              type="checkbox"
              {...register(i.name, {
                required: i.options.required,
              })}
            />
          </label>
        ))}
      </div>
    </div>
  );
}

export default Step4