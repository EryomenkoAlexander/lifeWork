import React from "react";
import s from "./NavItemList.module.css";
import { useDispatch, useSelector } from "react-redux";
import { setLocation, setMessage } from "../../../../redux/slices/user-slice";
import { setOpen } from "../../../../redux/slices/myAlert-slice";
import { useNavigate } from "react-router";

const NavItemList = (props) => {
  let dispatch = useDispatch();
  let navigate = useNavigate();
  let isLoggedIn = useSelector((state) => state.user.isLoggedIn);

  const handleClick = (data) => {
    if (isLoggedIn) {
      if (props.typeList === "location") {
        dispatch(setLocation(data));
        dispatch(
          setMessage({
            from: "Администрация",
            title: "Город",
            text: `Город успешно изменен на ${data}.`,
          })
        );
      } else {
        navigate("/cabinet/archives");
      }
    } else {
      dispatch(
        setOpen({
          type: "warning",
          text: "Выполните вход",
        })
      );
    }
  };

  let elList = props.list.map((i) => (
    <div className={s.item} onClick={() => handleClick(i.content)} key={i.id}>
      <img src="/imgs/header/line-list.svg" alt="line" />
      <span>{i.content}</span>
    </div>
  ));
  return <div className={s.NavItemList}>{elList}</div>;
};

export default NavItemList;
