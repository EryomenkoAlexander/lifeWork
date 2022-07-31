import React from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import Button from '../../../snippets/button/Button';
import s from './RecommendationCard.module.css'

const RecommendationCard = () => {
    let navigate = useNavigate()
    let programs = useSelector(state => state.cabinet.programs.items)
    let lastPrograms = programs.slice(-3).reverse()

    let goToPrograms = () => {
        navigate('/cabinet/programs')
    }

  return (
    <div className={s.recommendationCard}>
      <div className={s.wrapper}>
        <div className={s.title}>
          <img src="/assets/imgs/cabinet/primary/plus.svg" alt="check" />
          <h4>Рекомендации</h4>
        </div>

        <div className={s.content}>
          <div>
            <div className={s.items}>
              {lastPrograms.map((p) => (
                <div key={p.id} onClick={goToPrograms}>
                  <div>
                    <h4>ПРОГРАММА</h4>
                    <h3>{p.name}</h3>
                  </div>

                  <div>
                    <img
                      src="/assets/imgs/cabinet/primary/arrow-right.svg"
                      alt="arrow"
                    />
                  </div>
                </div>
              ))}
            </div>
            <div>
              <Button onClick={goToPrograms}>Подробнее</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RecommendationCard