import React from 'react'
import s from './Face.module.css'

const Face = (props) => {
  return (
    <div className={s.face}>
      <div className={s.wrapper}>
        <div>
          <h4>{props.data.typeService.toUpperCase()}</h4>
          {props.data.iconSrc ? (
            <img src={props.data.iconSrc} alt="info" />
          ) : (
            ""
          )}
        </div>
        <h3>«{props.data.service.toUpperCase()}»</h3>
        <img src={props.data.imgSrc} alt="health" />
      </div>
    </div>
  );
}

export default Face