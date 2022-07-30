import React from 'react'
import { useDispatch } from 'react-redux';
import { unlockFullName } from '../../../../../redux/slices/cabinet-slice';
import { setMessage } from '../../../../../redux/slices/user-slice';
import Button2 from '../../../../snippets/button_2/Button2';
import Input from '../../../../snippets/input/Input';
import s from './Step1.module.css'

const Step1 = ({step_1, remark, register, errors}) => {
    let dispatch = useDispatch()

    let changeFullName = (e) => {
        e.preventDefault()
        dispatch(unlockFullName(true))
        dispatch(setMessage({
          from: 'Администрация', 
          title: 'Изменение ФИО',
          text: 'Запрос на изменение ФИО одобрен.'
        }))
      }

  return (
    <div className={s.step}>
      <div className={s.wrapper}>
        {step_1.map((i) => (
          <Input key={i.id} data={i} register={register} errors={errors} />
        ))}
        <span className={s.remark}>{remark}</span>
        <Button2 onClick={(e) => changeFullName(e)}>Отправить запрос</Button2>
      </div>
    </div>
  );
}

export default Step1