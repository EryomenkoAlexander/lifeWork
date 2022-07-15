import React from 'react'
import { useSelector } from 'react-redux'
import Policy from '../policy/Policy'
import s from './ActivePolicies.module.css'
import Button2 from '../../../snippets/button_2/Button2'
import { useNavigate } from 'react-router'

const ActivePolicies = () => {
  let navigate = useNavigate()
    let policies = useSelector(state => state.user.activeUser.policies)

  let moveToPrograms = () => {
    navigate('/cabinet/programs')
  }

  return (
    <div className={s.activePolicy}>
      <h2>Мои полисы</h2>
      {!policies.length ? (
        <div className={s.noPolicies}>
          <h3>Активных полисов нету</h3>
          <Button2 onClick={moveToPrograms}>Приобрести</Button2>
        </div>
      ) : (
        <div className={s.wrapper}>
        {policies.map(p => (
          <Policy data={p} key={p.id} />
        ))}
      </div>
      )}
    </div>
  )
}

export default ActivePolicies