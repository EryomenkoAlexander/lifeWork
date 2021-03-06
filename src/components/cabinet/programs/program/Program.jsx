import React from "react";
import s from "./Program.module.css";
import { useDispatch, useSelector } from "react-redux";
import { setMessage, setPolicy } from "../../../../redux/slices/user-slice";
import { setShowPopup as setSuccessPopup } from "../../../../redux/slices/successPopup-slice";
import { setShowPopup as setFailPopup } from "../../../../redux/slices/failPopup-slice";
import { setShowLoading } from '../../../../redux/slices/loader-slice'

const Program = ({ data }) => {
  let dispatch = useDispatch();
  let policies = useSelector((state) => state.user.activeUser.policies);
  let bank = useSelector((state) => state.user.activeUser.bank);

  let checkRepeatProgram = (program) => {
    for (let i = 0; i < policies.length; i++) {
      let cur = policies[i];
      if (cur.id === program.id) {
        return false;
      }
    }
    return true;
  };

  let buyProgram = (program) => {
    dispatch(setShowLoading(true));
    setTimeout(() => {
      dispatch(setShowLoading(false));
      if (bank >= program.price) {
        if (checkRepeatProgram(program)) {
          dispatch(setPolicy(program));
          dispatch(
            setMessage({
              from: "Администрация",
              title: "Покупка",
              text: `Покупка программы «${program.name}» прошла успешно. Со счета списано ${program.price} ₽.`,
            })
          );
          dispatch(setSuccessPopup(true));
          setTimeout(() => {
            dispatch(setSuccessPopup(false));
          }, 2500);
        }
      } else {
        dispatch(
          setMessage({
            from: "Администрация",
            title: "Покупка",
            text: `Покупка программы «${program.name}» не удалась. Недостаточно средств на счету.`,
          })
        );
        dispatch(setFailPopup(true));
        setTimeout(() => {
          dispatch(setFailPopup(false));
        }, 2500);
      }
    }, 1500);
  };

  return (
    <div className={s.program} onClick={() => buyProgram(data)}>
      {!checkRepeatProgram(data) && (
        <img
          className={s.bought}
          src="/imgs/cabinet/programs/check.png"
          alt="docs"
        />
      )}
      <div>
        <h4>{data.name}</h4>
        <p>{data.shortInfo}</p>
        <div className={s.price}>
          Стоимость:
          <span>{data.price} ₽</span>
        </div>
      </div>
      <a
        href={data.docs}
        download
        target="_blank"
        rel="noopener noreferrer"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          className={s.download}
          src="/imgs/cabinet/programs/download.png"
          alt="docs"
        />
      </a>
    </div>
  );
};

export default Program;
