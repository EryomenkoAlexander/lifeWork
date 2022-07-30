import React from 'react'
import s from './Hashtags.module.css'

const Hashtags = ({hashtags, removeHashtag}) => {
  return (
    <div className={s.hashtags}>
      <div className={s.wrapper}>
        <h5>Хештеги:</h5>
        <div>
          {hashtags.length > 0 ? (
            hashtags.map((h) => (
              <div
                key={h.id}
                className={s.hashtag}
                onClick={() => removeHashtag(h)}
              >
                {h.value.toUpperCase()}
              </div>
            ))
          ) : (
            <div className={s.plugs}>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          )}
        </div>
        <span>{hashtags.length >= 4 && "Достигнут максимум"}</span>
      </div>
    </div>
  );
}

export default Hashtags