import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setOpen } from '../../../../../redux/slices/myAlert-slice';
import { changeUserPassword, setMessage } from '../../../../../redux/slices/user-slice';
import Button2 from '../../../../snippets/button_2/Button2';
import Input from '../../../../snippets/input/Input';
import s from './Step4.module.css'

const Step4 = ({step_4, register, errors, setError, reset, getValues}) => {
    let dispatch = useDispatch()
    let userPsw = useSelector(state => state.user.activeUser.password)

    let changePassword = (e) => {
        e.preventDefault()
        let passwordComplete = true;
    
        let curPassword = getValues('curPassword')
        let newPassword = getValues('newPassword')
        let repeatPassword = getValues('repeatPassword')
    
        if (!curPassword.length) {
          passwordComplete = false;
          setError('curPassword', {
            type: 'required',
            message: 'Введите текущий пароль'
          }, { shouldFocus: true })
        } else {
          if (userPsw !== curPassword) {
            passwordComplete = false;
            setError('curPassword', {
              type: 'incorrectPassword',
              message: 'Неверный пароль'
            }, { shouldFocus: true })
          }
        }
    
        if (!newPassword.length) {
          passwordComplete = false;
          setError('newPassword', {
            type: 'required',
            message: 'Введите новый пароль'
          }, { shouldFocus: true })
        }
    
        if (newPassword !== repeatPassword) {
          passwordComplete = false;
          setError('repeatPassword', {
            type: 'differentPasswords',
            message: 'Пароли не совпадают'
          }, { shouldFocus: true })
        }
    
        if (passwordComplete) {
          dispatch(
            setOpen({
              type: "success",
              text: "Пароль изменен",
            })
          );
          dispatch(changeUserPassword(newPassword));
          dispatch(
            setMessage({
              from: "Администрация",
              title: "Изменение пароля",
              text: "Пароль успешно изменен.",
            })
          );
          reset();
        }
      }
    
  return (
    <div className={s.step}>
      <div className={s.wrapper}>
        {step_4.map((i) => (
          <Input key={i.id} data={i} register={register} errors={errors} />
        ))}
        <Button2 onClick={(e) => changePassword(e)}>Изменить пароль</Button2>
      </div>
    </div>
  );
}

export default Step4