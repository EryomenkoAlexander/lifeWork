import React from 'react'
import { useDispatch } from 'react-redux'
import { removeMessage } from '../../../../redux/slices/user-slice'
import s from './Message.module.css'

const Message = ({data}) => {
  let dispatch = useDispatch()

  let deleteMessage = (data) => {
    dispatch(removeMessage(data))
  }

  return (
    <div className={s.message}>
      <div className={s.wrapper}>
        <div className={s.content}>
          <div>
            <h3>{data.title}</h3>
            <p>{data.text}</p>
          </div>
        </div>

        <div className={s.subInfo}>
          <div className={s.from}>
            От: <span>{data.from}</span>
          </div>

          <div className={s.fullDate}>
            <span>{data.time}</span>
            <span>{data.date}</span>
          </div>
        </div>

        <img src="/assets/imgs/cabinet/messages/close.png" alt="close" onClick={() => deleteMessage(data)}/>
      </div>
    </div>
  );
}

export default Message