import React from 'react'
import s from './AskQuestion.module.css'
import Textarea from '../../../snippets/textarea/Textarea'
import { useForm } from 'react-hook-form'
import Button from '../../../snippets/button/Button'
import Input from '../../../snippets/input/Input'
import { useSelector, useDispatch } from 'react-redux'
import { setMessage } from '../../../../redux/slices/user-slice'
import { setOpen } from '../../../../redux/slices/myAlert-slice'

const AskQuestionForm = ({inputs}) => {
    let dispatch = useDispatch()
    let user = useSelector(state => state.user.activeUser)

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
      } = useForm({
        mode: "onBlur",
        defaultValues: {
          email: user.login
        }
      });

      let onSubmit = (data) => {
        dispatch(setOpen({
          type: 'success',
          text: 'Отправлено'
        }))
        dispatch(setMessage({
            from: 'Администрация',
            title: 'Вопрос',
            text: 'Ваш вопрос успешно принят на рассмотрение. Ожидайте обратной связи.'
        }))
        reset()
      }
    
  return (
    <div className={s.askQuestionForm}>
      <div className={s.wrapper}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            {inputs.map((i) =>
              i.type === "textarea" ? (
                <Textarea
                  key={i.id}
                  data={i}
                  errors={errors}
                  register={register}
                />
              ) : (
                <Input
                  key={i.id}
                  data={i}
                  errors={errors}
                  register={register}
                />
              )
            )}
          </div>
          <Button>
            Отправить
            <img src="/assets/imgs/cabinet/askQuestion/send.png" alt="send" />
          </Button>
        </form>
      </div>
    </div>
  );
}

export default AskQuestionForm