import React from 'react'
import s from './ProfileHeader.module.css'
import Avatar from '../../avatar/Avatar'

const ProfileHeader = ({ user }) => {
  return (
    <div className={s.profileHeader}>
      <div className={s.wrapper}>
        <Avatar />

        <div className={s.info}>
          <h3>
            {user.firstName} {user.lastName}
          </h3>
          <span>{user.location !== "Город" ? "г. " + user.location : ""}</span>
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader