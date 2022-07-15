import React from 'react'
import s from './Button2.module.css'

const Button2 = ({children, ...props}) => {
  return (
    <button className={s.button} {...props}>
      {children}
    </button>
  );
}

export default Button2