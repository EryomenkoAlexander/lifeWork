import React from 'react'
import s from './Face.module.css'

const Face = ({data}) => {
  return (
    <div className={s.face}>
      <div className={s.wrapper}>
        <div>
          <h4>{data.typeService.toUpperCase()}</h4>
          {data.iconSrc ? (
            <img src={data.iconSrc} alt="info" />
          ) : (
            ""
          )}
        </div>
        <h3>«{data.service.toUpperCase()}»</h3>
        <img src={data.imgSrc} alt="health" />
      </div>
    </div>
  );
}

export default Face