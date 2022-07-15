import React from "react";
import { useSelector, useDispatch } from "react-redux";
import s from "./Info.module.css";
import Input from "../../../snippets/input/Input";
import { useForm } from "react-hook-form";
import Button from "../../../snippets/button/Button";
import Button2 from "../../../snippets/button_2/Button2";
import { unlockFullName } from "../../../../redux/slices/cabinet-slice";
import { changeTel, changeUserFullName, changeUserPassword, setLocation, setMessage } from "../../../../redux/slices/user-slice";
import { useEffect } from "react";
import { setShowPopup } from "../../../../redux/slices/successPopup-slice";

const Info = ({ user }) => {
  const {
    register,
    handleSubmit,
    setError,
    getValues,
    reset,
    setValue,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
  });

  useEffect(() => {
    setValue('location', user.location)
    setValue('firstName', user.firstName)
    setValue('lastName', user.lastName)
    setValue('patronymic', user.patronymic)
    setValue('tel', user.tel)
    setValue('email', user.login)
    setValue('emailMaster', user.login)
  }, [user])

  let dispatch = useDispatch()
  let info = useSelector((state) => state.cabinet.profile.info);
  let users = useSelector(state => state.user.users)

  let changeFullName = (e) => {
    e.preventDefault()
    dispatch(unlockFullName(true))
    dispatch(setMessage({
      from: 'Администрация',
      title: 'Изменение ФИО',
      text: 'Запрос на изменение ФИО одобрен.'
    }))
  }

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
      if (user.password !== curPassword) {
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
      dispatch(setShowPopup(true))
      dispatch(changeUserPassword(newPassword))
      dispatch(setMessage({
        from: 'Администрация',
        title: 'Изменение пароля',
        text: 'Пароль успешно изменен.',
      }))
      reset()
      setTimeout(() => {
        dispatch(setShowPopup(false))
      }, 2500)
    }
  }

  let onSubmit = (data) => {
    let saveSuccess = true;
    let newFullNameComplete = true;
    let newFullName = {
      firstName: data.firstName,
      lastName: data.lastName,
      patronymic: data.patronymic
    }
    for (let key in newFullName) {
      let curItem = newFullName[key]
      if (!curItem.length) {
        newFullNameComplete = false;
        saveSuccess = false;
      }
    }
    if (newFullNameComplete) {
      dispatch(changeUserFullName(newFullName))
      dispatch(unlockFullName(false))
    }

    let telComplete = true;
    for (let i = 0; i < users.length; i++) {
      let curUser = users[i]
      if (curUser.login !== user.login) {
        if (curUser.tel === data.tel) {
          telComplete = false
          saveSuccess = false
        }
      }
    }

    if (telComplete) {
      dispatch(changeTel(data.tel))
    } else {
      setError('tel', {
        type: 'busyTel',
        message: 'Номер уже зарегистрирован'
      }, { shouldFocus: true })
    }

    if (data.location.length) {
      dispatch(setLocation(data.location))
    } else {
      saveSuccess = false;
      setError('location', {
        type: 'noLocation',
        message: 'Введите город'
      }, { shouldFocus: true })
    }

    if (saveSuccess) {
      dispatch(setShowPopup(true))
      dispatch(setMessage({
        from: 'Администрация',
        title: 'Профиль',
        text: 'Данные о пользователе обновлены.'
      }))
      setTimeout(() => {
        dispatch(setShowPopup(false))
      }, 2500)
    }
  }

  return (
    <div className={s.info}>
      <div className={s.wrapper}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <div className={s.step_1}>
              {info.step_1.map((i) => (
                <Input
                  key={i.id}
                  data={i}
                  register={register}
                  errors={errors}
                />
              ))}
              <span className={s.remark}>{info.remark}</span>
              <Button2 onClick={(e) => changeFullName(e)}>
                Отправить запрос
              </Button2>
            </div>
            <div className={s.step_2}>
              {info.step_2.map((i) => (
                <Input
                  key={i.id}
                  data={i}
                  register={register}
                  errors={errors}
                />
              ))}
            </div>
          </div>

          <div>
            <div className={s.step_3}>
              {info.step_3.map((i) => (
                <Input
                  key={i.id}
                  data={i}
                  register={register}
                  errors={errors}
                />
              ))}
            </div>
            <div className={s.step_4}>
              {info.step_4.map((i) => (
                <Input
                  key={i.id}
                  data={i}
                  register={register}
                  errors={errors}
                />
              ))}
              <Button2 onClick={(e) => changePassword(e)}>
                Изменить пароль
              </Button2>
            </div>
            <Button>Сохранить изменения</Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Info;
