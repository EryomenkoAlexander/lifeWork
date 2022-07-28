import React from "react";
import { Link } from "react-router-dom";
import NavItemList from "../nav-item-list/NavItemList";
import s from './NavItem.module.css'
import { useDispatch, useSelector } from "react-redux";
import { setShowList } from "../../../../redux/slices/header-slice";
import { setOpen } from "../../../../redux/slices/myAlert-slice";

const NavItem = (props) => {
  let dispatch = useDispatch()

  let isLoggedIn = useSelector(state => state.user.isLoggedIn)
  let location = useSelector(state => state.user.activeUser.location || 'Город')

  let showList = (e) => {
    if (props.data.typeList === 'location') {
      if (isLoggedIn) {
        dispatch(setShowList(props.data.typeList))
      } else {
        dispatch(setOpen({
          type: 'warning',
          text: 'Выполните вход'
        }))
      }
    } else {
      dispatch(setShowList(props.data.typeList))
    }
  }

  let elNavItem;
  if (props.data.list) {
    elNavItem = (
      <div className={s.navItemList} onClick={() => showList()} key={props.data.id}>
        <span className={props.data.typeList === 'location' ? s.location : ''}>{props.data.typeList === 'location' ? location : props.data.title}</span>
        <img src={props.data.arrowImg} alt="arrow" />
        <div className={props.data.isShowList ? s.active : s.inactive}>
          <NavItemList
            list={props.data.list}
            typeList={props.data.typeList}
          />
        </div>
      </div>
    );
  } else {
    elNavItem = <Link to={props.data.to} key={props.data.id}>{props.data.title}</Link>;
  }

    return (
      <div className={s.navItem}>
        {elNavItem}
      </div>
    );
}

export default NavItem;