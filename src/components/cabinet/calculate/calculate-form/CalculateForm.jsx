import React from "react";
import s from "./CalculateForm.module.css";
import Input from "../../../snippets/input/Input";
import { useForm } from "react-hook-form";
import { useState } from "react";
import SelectList from "../../../snippets/select-list/SelectList";
import RadioList from "../../../snippets/radio-list/RadioList";
import Button from '../../../snippets/button/Button'
import { useDispatch } from "react-redux";
import { setShowPopup } from '../../../../redux/slices/successPopup-slice'

const CalculateForm = ({ inputs }) => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
  });

  let dispatch = useDispatch()

  let [calcRes, setCalcRes] = useState()
  let [gender, setGender] = useState("мужской");
  let [fee, setFee] = useState("");

  let getError = (name) => {
    setError(
      name,
      {
        type: "negativeNum",
        message: "Неверный формат",
      },
      { shouldFocus: true }
    );
  }

  let onSubmit = ({ insuredSum, term, age }) => {
    if (age <= 0) return getError("age");
    if (term <= 0) return getError("term");
    if (insuredSum <= 0) return getError("insuredSum");

    let res = (insuredSum * term) / age;
    switch (fee) {
      case "Раз в квартал":
        res *= 3;
        break;
      case "Раз в полгода":
        res *= 6;
        break;
      case "Раз в год":
        res *= 12;
        break;
      default:
        setCalcRes(res);
    }
    setCalcRes(Math.round(res));
    dispatch(setShowPopup(true))
    setTimeout(() => {
      dispatch(setShowPopup(false))
    }, 2500)
  };

  return (
    <div className={s.calculateForm}>
      <div className={s.wrapper}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            {inputs.map((i) => (
              <div key={i.id} className={s.item}>
                {i.list ? (
                  i.type === "radio" ? (
                    <div className={s.list}>
                      <RadioList data={i} value={gender} setValue={setGender} />
                    </div>
                  ) : (
                    <div className={s.list}>
                      <SelectList data={i} value={fee} setValue={setFee} />
                    </div>
                  )
                ) : (
                  <Input data={i} register={register} errors={errors} />
                )}
              </div>
            ))}
          </div>
          <div className={s.res}>
            <Button>Рассчитать</Button>
            {calcRes && (
              <div>
                итого:
                <span>{calcRes}</span>₽
              </div>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default CalculateForm;
