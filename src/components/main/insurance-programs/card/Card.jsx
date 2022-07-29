import React from "react";
import s from "./Card.module.css";
import Button from "../../../snippets/button/Button";
import { useDispatch, useSelector } from "react-redux";
import { setOpen } from "../../../../redux/slices/myAlert-slice";
import { setMessage, setPolicy } from "../../../../redux/slices/user-slice";
import { setShowLoading } from "../../../../redux/slices/loader-slice";

const Card = (props) => {
  let dispatch = useDispatch();
  let isLoggedIn = useSelector((state) => state.user.isLoggedIn);
  let programs = useSelector((state) => state.cabinet.programs.items);
  let bank = useSelector((state) => state.user.activeUser.bank);

  let buyProgram = (name) => {
    if (isLoggedIn) {
      dispatch(setShowLoading(true));
      setTimeout(() => {
        let program = programs.find(
          (i) => i.name.toLowerCase() === name.toLowerCase()
        );
        if (bank >= program.price) {
          dispatch(setPolicy(program));
          dispatch(
            setMessage({
              from: "Администрация",
              title: "Покупка",
              text: `Покупка программы «${program.name}» прошла успешно. Со счета списано ${program.price} ₽.`,
            })
          );
          dispatch(
            setOpen({
              type: "success",
              text: "Куплено",
            })
          );
        } else {
          dispatch(
            setMessage({
              from: "Администрация",
              title: "Покупка",
              text: `Покупка программы «${program.name}» не удалась. Недостаточно средств на счету.`,
            })
          );
          dispatch(
            setOpen({
              type: "error",
              text: "Недостаточно средств",
            })
          );
        }
        dispatch(setShowLoading(false));
      }, 1500);
    } else {
      dispatch(
        setOpen({
          type: "warning",
          text: "Выполните вход",
        })
      );
    }
  };

  return (
    <div className={s.card}>
      <div className={s.wrapper}>
        <div className={s.left}>
          <div>
            <h4>{props.data.typeService.toUpperCase()}</h4>
            {props.data.iconSrc ? (
              <img src={props.data.iconSrc} alt="info" />
            ) : (
              ""
            )}
          </div>
          <h3>«{props.data.service.toUpperCase()}»</h3>
          <img src={props.data.imgSrc} alt="health" />
        </div>

        <div className={s.right}>
          {props.data.infoProgram.map((ip) => (
            <div key={ip.id}>
              <span>
                <strong className={s.beforeContent}>{ip.beforeContent}</strong>
                {ip.imgSrc ? (
                  <>
                    <img src={ip.imgSrc} alt="infinity" />
                    {ip.content}
                  </>
                ) : (
                  <strong className={s.content}>
                    {ip.content.toUpperCase()}
                  </strong>
                )}
              </span>
              <span className={s.subContent}>{ip.subContent}</span>
            </div>
          ))}
          <div className={s.btn}>
            <Button onClick={() => buyProgram(props.data.service)}>
              {props.data.btnContent.toUpperCase()}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
