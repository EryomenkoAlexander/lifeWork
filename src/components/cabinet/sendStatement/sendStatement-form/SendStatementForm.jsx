import React from "react";
import s from "./SendStatementForm.module.css";
import { useForm } from "react-hook-form";
import Input from "../../../snippets/input/Input";
import Button from "../../../snippets/button/Button";
import Textarea from "../../../snippets/textarea/Textarea";
import SelectList from "../../../snippets/select-list/SelectList";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { setMessage } from "../../../../redux/slices/user-slice";
import { setOpen } from "../../../../redux/slices/myAlert-slice";

const SendStatementForm = ({ inputs }) => {
  let dispatch = useDispatch();
  let user = useSelector((state) => state.user.activeUser);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
    defaultValues: {
      fullName: `${user.lastName} ${user.firstName} ${user.patronymic}`,
      tel: user.tel,
    },
  });

  let [policy, setPolicy] = useState("");

  let onSubmit = (data) => {
    dispatch(
      setOpen({
        type: "success",
        text: "Отправлено",
      })
    );
    dispatch(
      setMessage({
        from: "Администрация",
        title: "Завление",
        text: "Ваше заявление успешно принято. Ожидайте обратной связи.",
      })
    );
    reset();
  };

  return (
    <div className={s.sendStatementForm}>
      <div className={s.wrapper}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            {inputs.map((i) => (
              <div className={s.item} key={i.id}>
                {i.type === "textarea" || i.type === "select" ? (
                  i.type === "textarea" ? (
                    <Textarea data={i} register={register} errors={errors} />
                  ) : (
                    <div className={s.list}>
                      <SelectList
                        title={i.title}
                        list={user.policies && user.policies.map((i) => i.name)}
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
};

export default SendStatementForm;