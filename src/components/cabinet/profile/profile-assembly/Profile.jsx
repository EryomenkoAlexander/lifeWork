import React from 'react'
import s from './Profile.module.css'
import { useSelector } from 'react-redux'
import ProfileForm from '../profile-form/ProfileForm'
import ProfileHeader from '../profile-header/ProfileHeader'

const Profile = () => {
  let user = useSelector(state => state.user.activeUser)

  return (
    <div className={s.profile}>
      <div className={s.wrapper}>
          <ProfileHeader user={user} />
          <ProfileForm user={user} />
      </div>
    </div>
  );
}

export default Profile;