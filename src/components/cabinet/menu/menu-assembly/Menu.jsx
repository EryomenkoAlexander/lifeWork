import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink, useNavigate } from 'react-router-dom'
import s from './Menu.module.css'
import { useDispatch } from 'react-redux/es/exports'
import { logoutUser, setCurSiteLocation } from '../../../../redux/slices/user-slice'
import { setShowLoading } from '../../../../redux/slices/loader-slice'

const Menu = () => {
    let dispatch = useDispatch()
    let navigate = useNavigate()

    let menu = useSelector(state => state.cabinet.menu)
    let activeUser = useSelector(state => state.user.activeUser)
    let isLoggedIn = useSelector(state => state.user.isLoggedIn)
    let messages = useSelector(state => state.user.activeUser.messages)
    let policies = useSelector(state => state.user.activeUser.policies)

  let logout = () => {
    dispatch(setShowLoading(true))
    setTimeout(() => {
      dispatch(setShowLoading(false))
      dispatch(logoutUser(activeUser.login))
      navigate('/login')
    }, 1000)
  }

  return (
    <div className={s.menu}>
      <div className={s.wrapper}>
        <div className={s.logout} onClick={() => logout()}>
          <img src="/imgs/cabinet/menu/logout.svg" alt="human" />
          <span>Выход</span>
        </div>
        <div className={s.items}>
          {menu.items.map((i) => (
            <NavLink
              to={i.to}
              key={i.id}
              className={({ isActive }) => (isActive ? s.activeItem : "")}
              onClick={() => dispatch(setCurSiteLocation(i.content))}
            >
              <img src={i.imgSrc} alt="item" />
              <span>{i.content}</span>

              {isLoggedIn &&
                (messages.length
                  ? i.to === "messages" && <div className={s.dot}></div>
                  : "")}

              {isLoggedIn &&
                (policies.length
                  ? i.to === "policies" && <div className={s.dot}></div>
                  : "")}
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Menu