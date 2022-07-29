import React from "react";
import { Link } from "react-router-dom";
import NavItemList from "../nav-item-list/NavItemList";
import s from "./NavItem.module.css";
import { useDispatch, useSelector } from "react-redux";
import { setShowList } from "../../../../redux/slices/header-slice";

const NavItem = (props) => {
  let dispatch = useDispatch();

  let location = useSelector(
    (state) => state.user.activeUser.location || "Город"
  );

  let elNavItem;

  if (props.data.list) {
    elNavItem = (
      <div
        className={s.navItemList}
        onClick={() => dispatch(setShowList(props.data.typeList))}
        key={props.data.id}
      >
        <span className={props.data.typeList === "location" ? s.location : ""}>
          {props.data.typeList === "location" ? location : props.data.title}
        </span>
        <img src={props.data.arrowImg} alt="arrow" />
        <div className={props.data.isShowList ? s.active : s.inactive}>
          <NavItemList list={props.data.list} typeList={props.data.typeList} />
        </div>
      </div>
    );
  } else {
    elNavItem = (
      <Link to={props.data.to} key={props.data.id}>
        {props.data.title}
      </Link>
    );
  }

  return <div className={s.navItem}>{elNavItem}</div>;
};

export default NavItem;
