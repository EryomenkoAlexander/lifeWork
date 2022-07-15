import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../message/Message'
import s from './Messages.module.css'
import Button2 from '../../../snippets/button_2/Button2'
import { removeAllMessages } from '../../../../redux/slices/user-slice'

const Messages = () => {
  let dispatch = useDispatch()

  let user = useSelector(state => state.user.activeUser)
  let messages = useSelector(state => state.cabinet.messages)

  return (
    <div className={s.messages}>
      <h2>{messages.title}</h2>
      <div className={s.wrapper}>
        {user.messages.length ? <Button2 onClick={() => dispatch(removeAllMessages())}>Удалить все</Button2> : ''}
        <div>
        {user.messages &&
          (user.messages.length ? (
            user.messages.map((m) => <Message key={m.id} data={m} />)
          ) : (
            <h3>Новых сообщений нету</h3>
          ))}
        </div>
      </div>
    </div> 
    );
}

export default Messages