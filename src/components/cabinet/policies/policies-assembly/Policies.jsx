import React from 'react'
import { useSelector } from 'react-redux'
import Docs from '../../../snippets/docs/Docs'
import ActivePolicies from '../active-policies/ActivePolicies'
import s from './Policies.module.css'

const Policies = () => {
  let policies = useSelector(state => state.cabinet.policies)
 
  return (
    <div className={s.policies}>
      <div className={s.wrapper}>
        <ActivePolicies />
        <div className={s.docs}>
          <Docs
            text={policies.docs.textLink}
            docsLink={policies.docs.documentLink}
          />
        </div>
      </div>
    </div>
  );
}

export default Policies