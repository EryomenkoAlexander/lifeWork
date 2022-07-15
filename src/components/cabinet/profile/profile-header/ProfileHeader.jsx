import React from 'react'
import s from './ProfileHeader.module.css'

const ProfileHeader = ({user}) => {
  return (
    <div className={s.profileHeader}>
    <div className={s.wrapper}>
      <div className={s.avatar}>
        {user.avatar ? (
          <img src={user.avatar} alt="avatar" />
        ) : (
          <img src="/imgs/user/default-avatar.svg" alt="avatar" />
        )}
        <span><img src="/imgs/user/changeAvatar.svg" alt="changeAvatar" /></span>
      </div>

      <div className={s.info}>
        <h3>
          {user.firstName} {user.lastName}
        </h3>
        <span>
          {user.location !== "Город" ? "г " + user.location : ""}
        </span>
      </div>
    </div>
  </div>
  )
}

export default ProfileHeader