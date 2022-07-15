import React from "react";
import Input from "../../snippets/input/Input";
import s from './RegistrationForm.module.css'
import { useForm } from 'react-hook-form'
import Button from '../../snippets/button/Button'
import { setUser, setActiveUser, setMessage } from "../../../redux/slices/user-slice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { setShowLoading } from "../../../redux/slices/loader-slice";

const RegistrationForm = (props) => {
    let steps = props.steps;
    let dispatch = useDispatch()
    let navigate = useNavigate()
    
    let users = useSelector(state => state.user.users)

    const { 
      register,
      handleSubmit,
      setError,
      formState: { errors },
    } = useForm({
      mode: "onBlur",
    });

      const onSubmit = data => {
        let formComplete = true;

        if (data.password !== data.repeatPassword) {
          setError('repeatPassword', {
            type: 'differentPasswords',
            message: 'Пароли не совпадают'
          }, { shouldFocus: true })
          formComplete = false;
        } 

        users.forEach((i) => {
          if (i.login === data.login) {
            setError('login', {
              type: 'busyLogin',
              message: 'Пользователь уже зарегистрирован'
            }, { shouldFocus: true })
            formComplete = false;
          }
          if (i.tel === data.tel) {
            setError('tel', {
              type: 'busyTel',
              message: 'Номер уже зарегистрирован'
            }, { shouldFocus: true })
            formComplete = false;
          }
        })

        if (formComplete) {
          delete data.repeatPassword;
          dispatch(setUser(data))
          dispatch(setActiveUser(data.login))
          dispatch(setShowLoading(true))
          setTimeout(() => {
            navigate('/cabinet', {replace: true})
            dispatch(setShowLoading(false))
            dispatch(setMessage({
              from: 'Администрация',
              title: 'Регистрация',
              text: `Регистрация прошла успешно. Добро пожаловать ${data.firstName} ${data.patronymic}!`
            }))
          }, 1500);
        }
      };

    return (
      <div className={s.registrationForm}>
        <div className={s.wrapper}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className={s.main}>
              <div className={s.step_1}>
                {steps.step_1.map((s) => (
                  <Input
                    key={s.id}
                    data={s}
                    register={register}
                    errors={errors}
                  />
                ))}
              </div>

              <div className={s.step_2}>
                {steps.step_2.map((s) => (
                  <Input
                    key={s.id}
                    data={s}
                    register={register}
                    errors={errors}
                  />
                ))}
              </div>

              <div className={s.step_3}>
                <div>
                  <span>{props.remark}</span>
                </div>
                {steps.step_3.map((s) => (
                  <Input
                    key={s.id}
                    data={s}
                    register={register}
                    errors={errors}
                  />
                ))}
              </div>
            </div>

            <div>
              <div className={s.step_4}>
                {steps.step_4.map((i) => (
                  <label
                    key={i.id}
                    className={
                      errors.agreement && i.name === "agreement" ? s.error : ""
                    }
                  >
                    <span>{i.title}</span>
                    <input
                      type="checkbox"
                      {...register(i.name, {
                        required: i.options.required,
                      })}
                    />
                  </label>
                ))}
              </div>
            </div>

            <Button>{props.btnContent}</Button>
          </form>
        </div>
      </div>
    );
}

export default RegistrationForm;
