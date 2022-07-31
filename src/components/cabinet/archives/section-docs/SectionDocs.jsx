import React from 'react'
import Docs from '../../../snippets/docs/Docs';
import s from './SectionDocs.module.css'

const SectionDocs = ({data}) => {
  return (
    <div className={s.sectionDocs}>
      <div className={s.wrapper}>
        <h3>{data.topic}</h3>
        <div className={s.items}>
          {data.items.map((i) => (
            <Docs
              href={i.link}
              target="_blank"
              rel="noopener noreferrer"
              key={i.id}
            >
              <img src="/assets/imgs/snippets/docs.png" alt="document" />
              {i.text}
            </Docs>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SectionDocs