import React from 'react'
import ActivePolicies from '../active-policies/ActivePolicies'
import s from './Policies.module.css'

const Policies = () => {
  return (
    <div className={s.policies}>
      <div className={s.wrapper}>
        <ActivePolicies />
        <div className={s.docs}>
        </div>
      </div>
    </div>
  );
}

export default Policies