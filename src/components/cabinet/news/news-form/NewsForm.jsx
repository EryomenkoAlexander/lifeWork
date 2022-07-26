import React from "react";
import s from "./NewsForm.module.css";
import Button from "../../../snippets/button/Button";
import Textarea from "../../../snippets/textarea/Textarea";
import Input from "../../../snippets/input/Input";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { createNews } from "../../../../redux/slices/news-slice";
import { setMessage } from "../../../../redux/slices/user-slice";
import { useDispatch, useSelector } from "react-redux";
import { setShowPopup } from "../../../../redux/slices/successPopup-slice";

const NewsForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    getValues,
    setValue,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
  });
 
  let dispatch = useDispatch();
  let inputs = useSelector(state => state.cabinet.news.inputs)
  let [hashtags, setHashtags] = useState([]);

  let addHashtag = (hashtag) => {
    if (hashtag.length >= 2 && hashtag.length <= 16) {
      if (hashtags.length !== 4) {
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
    let news = {
      preview: data.preview,
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
    <div className={s.newsForm}>
      <div className={s.wrapper}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            {inputs.map((i) => (
              <div className={s.item} key={i.id}>
                {i.type === "textarea" ? (
                  <Textarea data={i} errors={errors} register={register} />
                ) : (
                  <>
                    <Input data={i} register={register} errors={errors} />
                    {i.name === "hashtag" && (
                      <img
                        className={s.btnHashtag}
                        src="/imgs/news/plus.png"
                        alt="plus"
                        onClick={() => addHashtag(getValues("hashtag"))}
                      />
                    )}
                  </>
                )}
              </div>
            ))}
          </div>

          <div>
            <div className={s.hashtags}>
              <h5>Хештеги:</h5>
              <div>
                {hashtags.length > 0 ? (
                  hashtags.map((h) => (
                    <div
                      key={h.id}
                      className={s.hashtag}
                      onClick={() => removeHashtag(h)}
                    >
                      {h.value.toUpperCase()}
                    </div>
                  ))
                ) : (
                  <div className={s.plugs}>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                  </div>
                )}
              </div>
              <span>{hashtags.length >= 4 && "Достигнут максимум"}</span>
            </div>
            <Button>
              Создать
              <img src="/imgs/news/createNews.png" alt="news" />
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewsForm;
