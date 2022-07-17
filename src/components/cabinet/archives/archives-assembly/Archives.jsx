import React from 'react'
import { useSelector } from 'react-redux';
import s from './Archives.module.css'
import SectionDocs from '../section-docs/SectionDocs';

const Archives = () => {
    let archives = useSelector(state => state.cabinet.archives)

  return (
    <div className={s.archives}>
      <h2>{archives.title}</h2>
      <div className={s.wrapper}>
        {archives.docs.map((d) => (
          <SectionDocs data={d} key={d.id}/>
        ))}
      </div>
    </div>
  );
}

export default Archives