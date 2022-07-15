import React from "react";
import s from "./NewsForm.module.css";
import Button from "../../../snippets/button/Button";
import Textarea from "../../../snippets/textarea/Textarea";
import Input from "../../../snippets/input/Input";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { createNews } from "../../../../redux/slices/news-slice";
import { setMessage } from "../../../../redux/slices/user-slice";
import { useDispatch } from "react-redux";
import { setShowPopup } from "../../../../redux/slices/successPopup-slice";

const NewsForm = ({ news }) => {
  const {
    register,
    handleSubmit,
    reset,
    getValues,
    setValue,
    setError,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
  });

  let dispatch = useDispatch();
  let [hashtags, setHashtags] = useState([]);

  let addHashtag = (hashtag) => {
    let hashtegComplete = true;

    if (hashtag.length < 2) {
      setError(
        "hashtag",
        {
          type: "minLength",
          message: "Минимум 2 символа",
        },
        { shouldFocus: true }
      );
      hashtegComplete = false;
    }

    if (hashtag.length > 14) {
      setError(
        "hashtag",
        {
          type: "maxLength",
          message: "Максимум 14 символов",
        },
        { shouldFocus: true }
      );
      hashtegComplete = false;
    }

    if (hashtegComplete) {
      if (hashtags.length !== 3) {
        setHashtags((hashtags) => [
          ...hashtags,
          {
            id: Math.random(),
            value: hashtag,
          },
        ]);
        setValue("hashtag", "");
      }
    }
  };

  let removeHashtag = (hashtag) => {
    setHashtags(hashtags.filter(h => h !== hashtag))
  }

  let onSubmit = (data) => {
    let d = new Date();
    let news = {
      preview: data.preview,
      date: [d.getDay(), d.getMonth(), d.getFullYear()].join("."),
      title: data.title,
      text: data.textNews,
      hashtags: [...hashtags],
    };
    dispatch(setShowPopup(true))
    setTimeout(() => {
        dispatch(setShowPopup(false))
    }, 2500)
    dispatch(createNews(news));
    dispatch(
      setMessage({
        from: "Администрация",
        title: "Новости",
        text: `Новость "${data.title}" успешно опубликована`,
      })
    );
    setHashtags([]);
    reset();
  };

  return (
    <div className={s.wrapper}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          {news.inputs.map((n) => (
            <Input key={n.id} data={n} register={register} errors={errors} />
          ))}
          <div className={s.btnHashtag}>
            <img
              src="/imgs/news/plus.png"
              alt="plus"
              onClick={() => addHashtag(getValues("hashtag"))}
            />
          </div>
        </div>

        <Textarea
          errors={errors}
          register={register}
          name="textNews"
          title="Контент"
          placeholder="Расскажите о новости"
          options={{
            required: {
              value: true,
              message: "Введите контент новости",
            },
            minLength: {
              value: 30,
              message: "Минимум 30 симоволов",
            },
          }}
        />
        <div>
          <div className={s.hashtags}>
            <h5>Хештеги:</h5>
            <div>
              {hashtags.length > 0 ? (
                hashtags.map((h) => (
                  <div key={h.id} className={s.hashtag} onClick={() => removeHashtag(h)}>
                    {h.value.toUpperCase()}
                  </div>
                ))
              ) : (
                <div className={s.plugs}>
                  <div></div>
                  <div></div>
                  <div></div>
                </div> 
              )}
            </div>
            <span>{hashtags.length >= 3 && "Достигнут максимум"}</span>
          </div>
          <Button>Создать</Button>
        </div>
      </form>
    </div>
  );
};

export default NewsForm;
