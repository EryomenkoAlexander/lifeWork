import React from 'react'
import Opening from '../opening/Opening'
import OurTeam from '../our-team/OurTeam'
import s from './Career.module.css'

const Career = () => {
  return (
    <div className={s.career}>
      <div className={s.wrapper}>
          <OurTeam />
          <Opening />
      </div>
    </div>
  )
}

export default Career