import React from 'react'
import s from './UserCard.module.css'
import { useSelector } from 'react-redux'
import Avatar from '../../avatar/Avatar'

const UserCard = () => {
    let user = useSelector(state => state.user.activeUser)

  return (
    <div className={s.userCard}>
      <div className={s.wrapper}>
        <div className={s.welcome}>
          <h4>Здравствуйте,</h4>
          <span>{user.firstName}</span>
        </div>
        <div className={s.avatar}>
          <Avatar />
        </div>

        <div className={s.connect}>
          <div>
            <img
              src="/assets/imgs/cabinet/primary/location.svg"
              alt="location"
            />
            <span>{user.location}</span>
          </div>

          <div>
            <img src="/assets/imgs/cabinet/primary/tel.svg" alt="location" />
            <span>{user.tel}</span>
          </div>
        </div>

        <div className={s.phrase}>
          <h4>Мы рады заботиться о Вас</h4>
        </div>
      </div>
    </div>
  );
}

export default UserCard