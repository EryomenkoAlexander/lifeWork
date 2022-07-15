import React from 'react'
import Card from '../../../main/news/card/Card';
import Button from '../../../snippets/button/Button';
import s from './AllNews.module.css'

const AllNews = ({news}) => {
    let lastNews = news.items.slice(-3).reverse();

  return (
    <div className={s.allNews}>
      <h2>Актуальные новости</h2>
      <div className={s.wrapper}>
        {news.items.length ? (
          lastNews.map((c) => <Card data={c} key={c.id} />)
        ) : (
          <h3>Новостей нет</h3>
        )}
      </div>
      {news.items.length > 0 && (
        <Button>
          Смотреть все
          <img src="/imgs/snippets/arrow-right.png" alt="arrow-right" />
        </Button>
      )}
    </div>
  );
}

export default AllNews