import React from 'react'
import { useSelector } from 'react-redux'
import PaymentForm from '../payment-form/PaymentForm'
import s from './Payment.module.css'

const Payment = () => {
  let user = useSelector(state => state.user.activeUser)
  let payment = useSelector(state => state.cabinet.payment)

  return (
    <div className={s.payment}>
      <h2>{payment.title}</h2>
      <div className={s.wrapper}>
        <div className={s.bank}>
          <div>
            <h3>Баланс:</h3>
            <div>
              <span>{user.bank}</span>
              <p>₽</p>
            </div>
          </div>
        </div>

        <PaymentForm payment={payment} />
      </div>
    </div>
  );
}

export default Payment