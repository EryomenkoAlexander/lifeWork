import React from 'react'
import s from './Profile.module.css'
import { useSelector } from 'react-redux'
import Info from '../info/Info'
import ProfileHeader from '../profile-header/ProfileHeader'

const Profile = () => {
  let user = useSelector(state => state.user.activeUser)

  return (
    <div className={s.profile}>
      <div className={s.wrapper}>
          <ProfileHeader user={user} />
          <Info user={user} />
      </div>
    </div>
  );
}

export default Profile;