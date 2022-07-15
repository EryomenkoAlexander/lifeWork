import React from "react";
import s from "./Card.module.css";
import Button from "../../../snippets/button/Button";
import { useDispatch, useSelector } from "react-redux";
import { setShowPopup as setShowFailPopup} from "../../../../redux/slices/loginFailPopup-slice";
import { useNavigate } from "react-router";

const Card = (props) => {
  let dispatch = useDispatch();
  let navigate = useNavigate()
  let isLoggedIn = useSelector((state) => state.user.isLoggedIn);

  let setProgramUser = (program) => {
    isLoggedIn
      ? navigate("/cabinet/programs")
      : dispatch(setShowFailPopup(true));
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
          <h3>{props.data.service.toUpperCase()}</h3>
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
            <Button onClick={() => setProgramUser(props.data)}>
              {props.data.btnContent.toUpperCase()}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
