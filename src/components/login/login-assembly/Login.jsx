import React from "react";
import LoginForm from "../login-form/LoginForm";
import s from "./Login.module.css";
import { useSelector } from "react-redux";
import Dignitys from "../dignitys/Dignitys";

const Login = () => {
  let login = useSelector((state) => state.login);
  return (
    <div className={s.login}>
      <div className={s.wrapper}>
        <div className={s.form}>
          <h2>{login.form.title}</h2>
          <LoginForm form={login.form} />
        </div>
        <div className={s.dignitys}>
          <Dignitys dignitys={login.dignitys} />
        </div>
      </div>
    </div>
  );
};

export default Login;
