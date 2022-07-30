import React from "react";
import Button from "../../../snippets/button/Button";
import s from './News.module.css'
import Card from '../card/Card'
import { useSelector } from "react-redux";

const News = () => {
    let news = useSelector(state => state.home.news)
    let lastNews = news.items.slice(-3).reverse();

    return (
      <div className={s.news}>
        <h2>{news.title.toUpperCase()}</h2>
        <div className="container">
          <div className={s.wrapper}>
            {!news.items.length ? (
              <div className={s.plug}>
                <h3>Актуальных новостей нет</h3>
              </div>
            ) : (
              <>
                <div className={s.cards}>
                  {lastNews.map((c) => (
                    <Card data={c} key={c.id} />
                  ))}
                </div>

                <div className={s.btn}>
                  <Button>
                    Смотреть все
                    <img
                      src="/imgs/snippets/arrow-right.png"
                      alt="arrow-right"
                    />
                  </Button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    );
}

export default News;