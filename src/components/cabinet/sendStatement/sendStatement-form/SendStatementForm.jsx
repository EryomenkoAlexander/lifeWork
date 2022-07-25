import React from 'react'
import s from './SendStatementForm.module.css'
import { useForm } from "react-hook-form";
import Input from '../../../snippets/input/Input'
import { useEffect } from 'react';
import Button from '../../../snippets/button/Button'
import Textarea from '../../../snippets/textarea/Textarea'
import SelectList from '../../../snippets/select-list/SelectList';
import { useSelector, useDispatch } from 'react-redux'
import { useState } from 'react';
import { setShowPopup } from '../../../../redux/slices/successPopup-slice'
import { setMessage } from '../../../../redux/slices/user-slice'

const SendStatementForm = ({inputs}) => {
    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors },
      } = useForm({
        mode: "onBlur",
      });

      let dispatch = useDispatch()
      let user = useSelector(state => state.user.activeUser)

      let [policy, setPolicy] = useState('')
    
      useEffect(() => {
        setValue(
          "fullName",
          `${user.lastName} ${user.firstName} ${user.patronymic}`
        );
        setValue("tel", user.tel);
      }, []);
    
      let onSubmit = (data) => {
        dispatch(setShowPopup(true))
        setTimeout(() => {
            dispatch(setShowPopup(false))
        }, 2500)
        dispatch(setMessage({
            from: 'Администрация',
            title: 'Завление',
            text: 'Ваше заявление успешно принято. Ожидайте обратной связи.'
        }))
      }

  return (
    <div className={s.sendStatementForm}>
      <div className={s.wrapper}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            {inputs.map((i) => (
              <div className={s.item} key={i.id}>
                {i.type === "textarea" || i.type === "select" ? (
                  i.type === "textarea" ? (
                    <Textarea
                      name={i.name}
                      title={i.title}
                      placeholder={i.placeholder}
                      options={i.options}
                      register={register}
                      errors={errors}
                    />
                  ) : (
                    <div className={s.list}>
                      <SelectList
                        title={i.title}
                        list={user.policies.map((i) => i.name)}
                        value={policy}
                        setValue={setPolicy}
                      />
                    </div>
                  )
                ) : (
                  <Input data={i} register={register} errors={errors} />
                )}
              </div>
            ))}
          </div>
          <Button>Отправить</Button>
        </form>
      </div>
    </div>
  );
}

export default SendStatementForm