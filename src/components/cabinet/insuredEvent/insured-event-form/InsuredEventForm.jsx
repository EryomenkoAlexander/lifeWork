import React from "react";
import Input from "../../../snippets/input/Input";
import s from "./InsuredEventForm.module.css";
import { useForm } from "react-hook-form";
import Textarea from "../../../snippets/textarea/Textarea";
import Button from "../../../snippets/button/Button";
import { useDispatch, useSelector } from "react-redux";
import { setMessage } from '../../../../redux/slices/user-slice'
import { setOpen } from "../../../../redux/slices/myAlert-slice";


const InsuredEventForm = ({ inputs }) => {
  let user = useSelector(state => state.user.activeUser)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
    defaultValues: {
      firstName: user.firstName,
      tel: user.tel,
      email: user.login,
    },
  });

  let dispatch = useDispatch()

  let onSubmit = (data) => {
    dispatch(setOpen({
      type: 'success',
      text: 'Отправлено'
    }))
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
            {inputs.map((i) =>
              i.type === "textarea" ? (
                <Textarea key={i.id} data={i} errors={errors} register={register} />
              ) : (
                <Input
                  key={i.id}
                  data={i}
                  register={register}
                  errors={errors}
                />
              )
            )}
          </div>

          <Button>
            Отправить
            <img src="/assets/imgs/cabinet/insuredEvent/send.png" alt="send" />
          </Button>
        </form>
      </div>
    </div>
  );
};

export default InsuredEventForm;
