import React from "react";
import { useState } from "react";
import s from "./Input.module.css";

const Input = ({data, register, errors}) => {
  let [isShowPassword, setShowPassword] = useState(false);

  let handleShowPassword = () => {
    setShowPassword(!isShowPassword);
  };

  let getType = (data) => {
    if (data.type === "password") {
      if (isShowPassword) return data.changedType;
      else return data.type;
    } else {
      return data.type;
    }
  };

  let getOptions = (options) => {
    let resOpt = {};
    for (let key in options) {
      switch (key) {
        case "required":
          resOpt.required = options.required;
          continue;
        case "minLength":
          resOpt.minLength = options.minLength;
          continue;
        case "pattern":
          resOpt.pattern = options.pattern;
          continue;
        case "maxLength":
          resOpt.maxLength = options.maxLength;
          continue;
        default:
          resOpt.error = "ERROR, no values in options";
      }
    }
    return resOpt;
  };

  let getError = (name, errors) => {
    for (let key in errors) {
      if (key === name) {
        return errors[name].message;
      }
    }
  };

  return (
    <label
      className={[s.wrapper, getError(data.name, errors) && s.error].join(
        " "
      )}
    >
      <h4>{data.title}</h4>
      <div>
        <input
          disabled={data.disabled}
          type={getType(data)}
          placeholder={data.placeholder}
          {...register(data.name, getOptions(data.options))}
        />

        {data.changedType ? (
          isShowPassword ? (
            <img
              src="/assets/imgs/snippets/show-psw.svg"
              alt="show-psw"
              onClick={handleShowPassword}
            />
          ) : (
            <img
              src="/assets/imgs/snippets/hide-psw.svg"
              alt="hide-psw"
              onClick={handleShowPassword}
            />
          )
        ) : (
          ""
        )}
      </div>
      <span>{getError(data.name, errors) || "⁣"}</span>
      <p>{data.subContent}</p>
    </label>
  );
};

export default Input;
