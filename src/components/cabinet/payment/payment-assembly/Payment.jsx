import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import s from './Payment.module.css'
import { useForm } from 'react-hook-form'
import Input from '../../../snippets/input/Input'
import Button from '../../../snippets/button/Button'
import { addBank, setMessage } from '../../../../redux/slices/user-slice'
import { setShowPopup } from '../../../../redux/slices/successPopup-slice'

const Payment = () => {
  const {
    register,
    handleSubmit,
    setError,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
  });

  let dispatch = useDispatch()
  let user = useSelector(state => state.user.activeUser)
  let payment = useSelector(state => state.cabinet.payment)
  
  let onSubmit = (data) => {
    if (data.money <= 0) {
      setError('money', {
        type: 'negativeMoney',
        message: 'Неверный формат'
      }, { shouldFocus: true })
    } else {
      dispatch(addBank(data.money))
      dispatch(setShowPopup(true))
      dispatch(
        setMessage({
          from: "Администрация",
          title: "Баланс",
          text: `Пополнение прошло успешно. Баланс пополнен на ${data.money} ₽.`,
        })
      );
      reset()
      setTimeout(() => {
        dispatch(setShowPopup(false))
      }, 2500)
    }
  }

  return (
    <div className={s.payment}>
      <h2>{payment.title}</h2>
      <div className={s.wrapper}>
        <div className={s.bank}>
          <div>
            <h3>Баланс:</h3>
            <span>{user.bank}</span>
            <p>₽</p>
          </div>
        </div>

        <div className={s.form}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div>
              {payment.inputs.map((i) => (
                <Input
                  key={i.id}
                  data={i}
                  register={register}
                  errors={errors}
                />
              ))}
            </div>

            <Button>
              Пополнить
              <img src="/imgs/cabinet/payment/money.png" alt="money" />
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Payment