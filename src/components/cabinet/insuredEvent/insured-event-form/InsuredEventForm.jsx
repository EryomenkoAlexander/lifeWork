import React from "react";
import Input from "../../../snippets/input/Input";
import s from "./InsuredEventForm.module.css";
import { useForm } from "react-hook-form";
import Textarea from "../../../snippets/textarea/Textarea";
import Button from "../../../snippets/button/Button";
import { useDispatch } from "react-redux";
import { setShowPopup } from '../../../../redux/slices/successPopup-slice'
import { setMessage } from '../../../../redux/slices/user-slice'


const InsuredEventForm = ({ inputs }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
  });

  let dispatch = useDispatch()

  let onSubmit = (data) => {
    dispatch(setShowPopup(true))
    setTimeout(() => {
        dispatch(setShowPopup(false))
    }, 2500)
    dispatch(setMessage({
        from: 'Администрация',
        title: 'Страховой случай',
        text: 'Заявление успешно отправлено. Ожидайте обратной связи.'
    }))
    reset()
  };

  return (
    <div className={s.insuredEventForm}>
      <div className={s.wrapper}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <div>
              {inputs.map((i) => (
                <Input
                  key={i.id}
                  data={i}
                  register={register}
                  errors={errors}
                />
              ))}
            </div>

            <div>
              <Textarea
                errors={errors}
                register={register}
                name="textInsuredEvent"
                title="Информация о страховом случае:"
                placeholder="Подробности"
                options={{
                  required: {
                    value: true,
                    message: "Расскажите о вашем случае",
                  },
                  minLength: {
                    value: 30,
                    message: "Расскажите по подробней",
                  },
                }}
              />
            </div>
          </div>

          <Button>
            Отправить
            <img src="/imgs/cabinet/insuredEvent/send.png" alt="send" />
          </Button>
        </form>
      </div>
    </div>
  );
};

export default InsuredEventForm;
