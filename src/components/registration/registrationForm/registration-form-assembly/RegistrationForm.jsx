import React from "react";
import s from "./RegistrationForm.module.css";
import { useForm } from "react-hook-form";
import Button from "../../../snippets/button/Button";
import {
  setUser,
  setActiveUser,
  setMessage,
} from "../../../../redux/slices/user-slice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { setShowLoading } from "../../../../redux/slices/loader-slice";
import { setOpen } from "../../../../redux/slices/myAlert-slice";
import Step1 from "../steps/step-1/Step1";
import Step2 from "../steps/step-2/Step2";
import Step3 from "../steps/step-3/Step3";
import Step4 from "../steps/step-4/Step4";

const RegistrationForm = (props) => {
  let steps = props.steps;
  let dispatch = useDispatch();
  let navigate = useNavigate();

  let users = useSelector((state) => state.user.users);

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
  });

  const onSubmit = (data) => {
    let formComplete = true;

    if (data.password !== data.repeatPassword) {
      setError(
        "repeatPassword",
        {
          type: "differentPasswords",
          message: "Пароли не совпадают",
        },
        { shouldFocus: true }
      );
      formComplete = false;
    }

    users.forEach((i) => {
      if (i.login === data.login) {
        setError(
          "login",
          {
            type: "busyLogin",
            message: "Пользователь уже зарегистрирован",
          },
          { shouldFocus: true }
        );
        formComplete = false;
      }
      if (i.tel === data.tel) {
        setError(
          "tel",
          {
            type: "busyTel",
            message: "Номер уже зарегистрирован",
          },
          { shouldFocus: true }
        );
        formComplete = false;
      }
    });

    if (formComplete) {
      delete data.repeatPassword;
      dispatch(setUser(data));
      dispatch(setActiveUser(data.login));
      dispatch(setShowLoading(true));
      setTimeout(() => {
        dispatch(
          setOpen({
            type: "success",
            text: "Регистрация прошла",
          })
        );
        navigate("/cabinet", { replace: true });
        dispatch(setShowLoading(false));
        dispatch(
          setMessage({
            from: "Администрация",
            title: "Регистрация",
            text: `Регистрация прошла успешно. Добро пожаловать ${data.firstName} ${data.patronymic}!`,
          })
        );
      }, 1500);
    }
  };

  return (
    <div className={s.registrationForm}>
      <div className={s.wrapper}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className={s.main}>
            <Step1 step_1={steps.step_1} register={register} errors={errors} />
            <Step2 step_2={steps.step_2} register={register} errors={errors} />
            <Step3 step_3={steps.step_3} remark={props.remark} register={register} errors={errors} />
          </div>
          <Step4 step_4={steps.step_4} register={register} errors={errors} />
          
          <Button>{props.btnContent}</Button>
        </form>
      </div>
    </div>
  );
};

export default RegistrationForm;
