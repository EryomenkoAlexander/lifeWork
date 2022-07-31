import React from "react";
import s from "./NewsForm.module.css";
import Button from "../../../snippets/button/Button";
import Textarea from "../../../snippets/textarea/Textarea";
import Input from "../../../snippets/input/Input";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { setMessage } from "../../../../redux/slices/user-slice";
import { useDispatch, useSelector } from "react-redux";
import { setOpen } from "../../../../redux/slices/myAlert-slice";
import Hashtags from "../hashtags/Hashtags";
import { createNews } from '../../../../redux/slices/home-slice'

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
    dispatch(setOpen({
      type: 'success',
      text: 'Опубликовано'
    }))
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
                        src="/assets/imgs/news/plus.png"
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
            <Hashtags hashtags={hashtags} removeHashtag={removeHashtag} />
            <Button>
              Создать
              <img src="/assets/imgs/news/createNews.png" alt="news" />
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewsForm;
