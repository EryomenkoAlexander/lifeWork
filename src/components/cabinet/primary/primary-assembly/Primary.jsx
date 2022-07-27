import React from 'react'
import RecommendationCard from '../recommendation-card/RecommendationCard';
import StatusPolicyCard from '../status-policy-card/StatusPolicyCard';
import UserCard from '../user-card/UserCard';
import s from './Primary.module.css'
import { useSelector } from 'react-redux'

const Primary = () => {
  let policies = useSelector(state => state.user.activeUser.policies)

  return (
    <div className={s.primary}>
      <div className={s.wrapper}>
        <UserCard />
        {policies && <StatusPolicyCard />}
        <RecommendationCard />
      </div>
    </div> 
  );
}

export default Primary