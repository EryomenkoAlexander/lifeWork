import React from "react";
import { useSelector, useDispatch } from "react-redux";
import s from "./ProfileForm.module.css";
import { useForm } from "react-hook-form";
import Button from "../../../snippets/button/Button";
import { unlockFullName } from "../../../../redux/slices/cabinet-slice";
import { changeTel, changeUserFullName, setLocation, setMessage } from "../../../../redux/slices/user-slice";
import { useEffect } from "react";
import { setOpen } from "../../../../redux/slices/myAlert-slice";
import Step1 from "../steps/step-1/Step1";
import Step2 from "../steps/step-2/Step2";
import Step3 from "../steps/step-3/Step3";
import Step4 from "../steps/step-4/Step4";

const ProfileForm = ({ user }) => {
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
      dispatch(setOpen({
        type: 'success',
        text: 'Данные обновлены'
      }))
      dispatch(setMessage({
        from: 'Администрация',
        title: 'Профиль',
        text: 'Данные о пользователе обновлены.'
      }))
    }
  }

  return (
    <div className={s.info}>
      <div className={s.wrapper}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <Step1
              step_1={info.step_1}
              remark={info.remark}
              register={register}
              errors={errors}
            />
            <Step2 step_2={info.step_2} register={register} errors={errors} />
          </div>

          <div>
            <Step3 step_3={info.step_3} register={register} errors={errors} />
            <Step4
              step_4={info.step_4}
              register={register}
              errors={errors}
              setError={setError}
              reset={reset}
              getValues={getValues}
            />
            <Button>Сохранить изменения</Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProfileForm;
