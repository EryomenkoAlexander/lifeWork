import React from 'react'
import RecommendationCard from '../recommendation-card/RecommendationCard';
import StatusPolicyCard from '../status-policy-card/StatusPolicyCard';
import UserCard from '../user-card/UserCard';
import s from './Primary.module.css'

const Primary = () => {
  return (
    <div className={s.primary}>
      <div className={s.wrapper}>
        <UserCard />
        <StatusPolicyCard />
        <RecommendationCard />
      </div>
    </div>
  );
}

export default Primary