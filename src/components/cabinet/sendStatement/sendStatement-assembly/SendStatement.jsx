import React from 'react'
import { useSelector } from 'react-redux'
import s from './SendStatement.module.css'
import SendStatementForm from '../sendStatement-form/SendStatementForm';

const SendStatement = () => {
  let sendStatement = useSelector(state => state.cabinet.sendStatement)

  return (
    <div className={s.sendStatement}>
      <h2>{sendStatement.title}</h2>
      <div className={s.wrapper}>
          <SendStatementForm inputs={sendStatement.inputs} />
      </div>
    </div>
  );
}

export default SendStatement