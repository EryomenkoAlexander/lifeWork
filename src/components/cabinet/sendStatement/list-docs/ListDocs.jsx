import React from 'react'
import s from './ListDocs.module.css'

const ListDocs = ({listDocs}) => {
  return (
    <div className={s.listDocs}>
      <div className={s.wrapper}>
        <h3>{listDocs.title}</h3>
        <ul>
          {listDocs.items.map((i, idx) => (
            <li key={idx}>{i}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ListDocs