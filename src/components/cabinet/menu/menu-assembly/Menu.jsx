import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import s from './Menu.module.css'
import { useDispatch } from 'react-redux/es/exports'
import { logoutUser } from '../../../../redux/slices/user-slice'
import { setShowLoading } from '../../../../redux/slices/loader-slice'
import Items from '../items/Items'

const Menu = () => {
    let dispatch = useDispatch()
    let navigate = useNavigate()

    let activeUser = useSelector(state => state.user.activeUser)

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
          <img src="/assets/imgs/cabinet/menu/logout.svg" alt="human" />
          <span>Выход</span>
        </div>
        <Items />
      </div>
    </div>
  );
}

export default Menu