import React from "react";
import s from "./LoginForm.module.css";
import Input from "../../snippets/input/Input";
import Button from "../../snippets/button/Button";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { setActiveUser, setMessage } from "../../../redux/slices/user-slice";
import { useEffect } from "react";
import { setShowLoading } from "../../../redux/slices/loader-slice";
import { setClose, setOpen } from "../../../redux/slices/myAlert-slice";

const LoginForm = (props) => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
  });

  let navigate = useNavigate();
  let dispatch = useDispatch();

  let user = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(setClose());
  }, []);

  const onSubmit = (data) => {
    dispatch(setShowLoading(true));
    let formComplete = false;
    let users = user.users;

    if (users.length) {
      for (let i = 0; i < users.length; i++) {
        let user = users[i];
        if (user.login === data.login || user.tel === data.login) {
          if (user.password === data.password) {
            formComplete = true;
            break;
          }
        }
      }
    }

    if (formComplete) {
      setTimeout(() => {
        dispatch(
          setOpen({
            type: "success",
            text: "Вход выполнен",
          })
        );
        dispatch(setShowLoading(false));
        dispatch(setActiveUser(data.login));
        dispatch(
          setMessage({
            from: "Администрация",
            title: "Авторизация",
            text: `Вход успешно выполнен. С возвращением!`,
          })
        );
        navigate("/cabinet", { replace: true });
      }, 1500);
    } else {
      setTimeout(() => {
        setError("password", {
          type: "passwordError",
          message: "Неверный пароль, попробуйте еще раз",
        });
        setError("login", {
          type: "loginError",
          message: "Неверный логин, попробуйте еще раз",
        });
        dispatch(setShowLoading(false));
      }, 1500);
    }
  };

  return (
    <div className={s.loginForm}>
      <div className={s.wrapper}>
        <form onSubmit={handleSubmit(onSubmit)}>
          {props.form.inputs.map((i) => (
            <Input key={i.id} data={i} register={register} errors={errors} />
          ))}
          <Button>{props.form.btnContent}</Button>
        </form>
        <Link to="/registration">{props.form.registration}</Link>
      </div>
    </div>
  );
};

export default LoginForm;
