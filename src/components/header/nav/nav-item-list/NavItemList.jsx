import React from "react";
import s from './NavItemList.module.css'
import { useDispatch, useSelector } from "react-redux";
import { setLocation, setMessage } from "../../../../redux/slices/user-slice";

const NavItemList = (props) => {
    let dispatch = useDispatch();
    let isLoggedIn = useSelector(state => state.user.isLoggedIn)

    const getTypeList = (data) => {
        if (props.typeList === 'location') {
          if (isLoggedIn) {
            dispatch(setLocation(data))
            dispatch(setMessage({
              from: 'Администрация',
              title: 'Город',
              text: `Город успешно изменен на ${data}.`
            }))
          }
        }
    }

    let elList = props.list.map((i) => (
      <div className={s.item} onClick={() => getTypeList(i.content)} key={i.id}>
        <img src="/imgs/header/line-list.svg" alt="line" />
        <span>{i.content}</span>
      </div>
    ));
    return (
        <div className={s.NavItemList}>{elList}</div>
    );
}

export default NavItemList;