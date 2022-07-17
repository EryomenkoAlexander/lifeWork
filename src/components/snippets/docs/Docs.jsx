import React from 'react'
import s from './Docs.module.css'

const Docs = ({children, ...props}) => {
  return (
    <div className={s.docs}>
      <a {...props}>{children}</a>
    </div>
  ); 
}

export default Docs;