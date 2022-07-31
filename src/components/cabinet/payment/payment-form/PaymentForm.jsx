import React from "react";
import s from "./PaymentForm.module.css";
import { useForm } from 'react-hook-form'
import Input from '../../../snippets/input/Input'
import Button from '../../../snippets/button/Button'
import { addBank, setMessage } from '../../../../redux/slices/user-slice'
import { useDispatch } from 'react-redux'
import { setShowLoading } from '../../../../redux/slices/loader-slice'
import { setOpen } from "../../../../redux/slices/myAlert-slice";

const PaymentForm = ({payment}) => {
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
    
  let onSubmit = (data) => {
    if (data.money <= 0) {
      setError(
        "money",
        {
          type: "negativeMoney",
          message: "Неверный формат",
        },
        { shouldFocus: true }
      );
    } else {
      dispatch(setShowLoading(true))
      setTimeout(() => {
        dispatch(addBank(data.money));
        dispatch(setShowLoading(false));
        dispatch(setOpen({
          type: 'success',
          text: 'Баланс пополнен'
        }))
        dispatch(
          setMessage({
            from: "Администрация",
            title: "Баланс",
            text: `Пополнение прошло успешно. Баланс пополнен на ${data.money} ₽.`,
          })
        );
        reset();
      }, 1500);
    }
  };

  return (
    <div className={s.paymentForm}>
      <div className={s.wrapper}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            {payment.inputs.map((i) => (
              <Input key={i.id} data={i} register={register} errors={errors} />
            ))}
          </div>

          <Button>
            Пополнить
            <img src="/assets/imgs/cabinet/payment/money.png" alt="money" />
          </Button>
        </form>
      </div>
    </div>
  );
};

export default PaymentForm;
