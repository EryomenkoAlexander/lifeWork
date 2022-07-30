import React from "react";
import s from "./Card.module.css";
import Button from "../../../snippets/button/Button";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { setOpen } from '../../../../redux/slices/myAlert-slice'

const Card = ({data}) => {
  let isLoggedIn = useSelector(state => state.user.isLoggedIn)
  let navigate = useNavigate()
  let dispatch = useDispatch()

  let handleClick = (path) => {
    isLoggedIn ? navigate(path) : dispatch(setOpen({
      type: 'warning',
      text: 'Выполните вход'
    }))
  }

  return (
    <div className={s.card}>
      <div className={s.wrapper}>
        <h2>{data.title.toUpperCase()}</h2>
        <img src={data.imgSrc} alt="icon" />
        <div>
          {data.contentBtn.map((i) => (
            <Button key={i.id} onClick={() => handleClick(i.to)}>{i.content.toUpperCase()}</Button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;
