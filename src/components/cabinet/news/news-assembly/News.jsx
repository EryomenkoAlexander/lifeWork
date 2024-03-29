import React from "react";
import { useSelector } from "react-redux";
import AllNews from "../all-news/AllNews";
import NewsForm from "../news-form/NewsForm";
import s from "./News.module.css";

const News = () => {
  let news = useSelector((state) => state.home.news);

  return (
    <div className={s.news}>
      <h2>{news.title}</h2>
      <div className={s.wrapper}>
        <NewsForm />
        <AllNews items={news.items} />
      </div>
    </div>
  );
};

export default News;
