import React from "react";
import { useState } from "react";
import s from './Input.module.css'

const Input = (props) => {
    let data = props.data;

    let [isShowPassword, setShowPassword] = useState(false)

    let handleShowPassword = () => {
      setShowPassword(!isShowPassword)
    }

    let getType = (data) => {
      if (data.type === 'password') {
        if (isShowPassword) return data.changedType
        else return data.type
      } else {
        return data.type
      }
    }

    let getOptions = (options) => {
        let resOpt = {};
        for (let key in options) {
            switch (key) {
                case 'required': resOpt.required = options.required; continue;
                case 'minLength': resOpt.minLength = options.minLength; continue;
                case 'pattern': resOpt.pattern = options.pattern; continue;
                case 'maxLength': resOpt.maxLength = options.maxLength; continue;
                default: resOpt.error = 'ERROR, no values in options';
            }
        }
        return resOpt;
    }

    let getError = (name, errors) => {
        if (name === 'lastName' && errors.lastName) return errors.lastName.message;
        if (name === 'firstName' && errors.firstName) return errors.firstName.message;
        if (name === 'patronymic' && errors.patronymic) return errors.patronymic.message;
        if (name === 'tel' && errors.tel) return errors.tel.message;
        if (name === 'login' && errors.login) return errors.login.message;
        if (name === 'password' && errors.password) return errors.password.message;
        if (name === 'repeatPassword' && errors.repeatPassword) return errors.repeatPassword.message;
        if (name === 'date' && errors.date) return errors.date.message;
        if (name === 'card' && errors.card) return errors.card.message;
        if (name === 'agreement' && errors.agreement) return errors.agreement.message;
        if (name === 'repeatPassword' && errors.differentPasswords) return errors.differentPasswords.message;
        if (name === 'login' && errors.loginError) return errors.loginError.message;
        if (name === 'password' && errors.passwordError) return errors.password.message;
        if (name === 'curPassword' && errors.curPassword) return errors.curPassword.message;
        if (name === 'newPassword' && errors.newPassword) return errors.newPassword.message;
        if (name === 'location' && errors.location) return errors.location.message
        if (name === 'title' && errors.title) return errors.title.message
        if (name === 'hashtag' && errors.hashtag) return errors.hashtag.message 
        if (name === 'money' && errors.money) return errors.money.message
        if (name === "age" && errors.age) return errors.age.message;
        if (name === 'term' && errors.term) return errors.term.message
        if (name === 'insuredSum' && errors.insuredSum) return errors.insuredSum.message
      }

    return (
      <label
        className={[
          s.wrapper,
          getError(data.name, props.errors) && s.error,
        ].join(" ")}
      >
        <h4>{data.title}</h4>
        <div>
          <input
            disabled={data.disabled}
            type={getType(data)}
            placeholder={data.placeholder}
            {...props.register(data.name, getOptions(data.options))}
          />

          {data.changedType ? (
            isShowPassword ? (
              <img
                src="/imgs/snippets/show-psw.svg"
                alt="show-psw"
                onClick={handleShowPassword}
              />
            ) : (
              <img
                src="/imgs/snippets/hide-psw.svg"
                alt="hide-psw"
                onClick={handleShowPassword}
              />
            )
          ) : (
            ""
          )}
        </div>
        <span>{getError(data.name, props.errors) || "⁣"}</span>
        <p>{data.subContent}</p>
      </label>
    );
}

export default Input;