import React from "react";
import { Link } from "react-router-dom";
import NavItemList from "../nav-item-list/NavItemList";
import s from "./NavItem.module.css";
import { useDispatch, useSelector } from "react-redux";
import { setShowList } from "../../../../redux/slices/header-slice";

const NavItem = ({data}) => {
  let dispatch = useDispatch();

  let location = useSelector(
    (state) => state.user.activeUser.location || "Город"
  );

  let elNavItem;

  if (data.list) {
    elNavItem = (
      <div
        className={s.navItemList}
        onClick={() => dispatch(setShowList(data.typeList))}
        key={data.id}
      >
        <span className={data.typeList === "location" ? s.location : ""}>
          {data.typeList === "location" ? location : data.title}
        </span>
        <img src={data.arrowImg} alt="arrow" />
        <div className={data.isShowList ? s.active : s.inactive}>
          <NavItemList list={data.list} typeList={data.typeList} />
        </div>
      </div>
    );
  } else {
    elNavItem = (
      <Link to={data.to} key={data.id}>
        {data.title}
      </Link>
    );
  }

  return <div className={s.navItem}>{elNavItem}</div>;
};

export default NavItem;
