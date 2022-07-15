import React from 'react'
import s from './Docs.module.css'

const Docs = ({text, docsLink}) => {
  return (
    <div className={s.docs}>
      <a href={docsLink} target="_blank" rel="noopener noreferrer">
        <img src="/imgs/snippets/docs.png" alt="document" />
        <span>{text}</span>
      </a>
    </div>
  );
}

export default Docs