import React from "react";
import s from "./CalculateForm.module.css";
import Input from "../../../snippets/input/Input";
import { useForm } from "react-hook-form";
import { useState } from "react";
import SelectList from "../../../snippets/select-list/SelectList";
import RadioList from "../../../snippets/radio-list/RadioList";
import Button from '../../../snippets/button/Button'

const CalculateForm = ({ inputs }) => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
  });

  let [gender, setGender] = useState("мужской");
  let [fee, setFee] = useState("");

  let onSubmit = (data) => {
    console.log(data, gender, fee);
  };

  return (
    <div className={s.calculateForm}>
      <div className={s.wrapper}>
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
            {inputs.map((i) => (
            <div key={i.id}>
              {i.list ? (
                i.type === "radio" ? (
                  <RadioList data={i} value={gender} setValue={setGender} />
                ) : (
                  <SelectList data={i} value={fee} setValue={setFee} />
                )
              ) : (
                <Input data={i} register={register} error={errors} />
              )}
            </div>
          ))}
            </div>

            <Button>Расчитать</Button>
        </form>
      </div>
    </div>
  );
};

export default CalculateForm;
