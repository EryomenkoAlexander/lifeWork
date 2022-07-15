import React from 'react'
import { useNavigate } from 'react-router'
import s from './Policy.module.css'

const Policy = ({data}) => {
  let navigate = useNavigate()

  let goToInsuredEvent = () => {
    navigate('/cabinet/insuredEvent')
  }

  return (
    <div className={s.policy}>
      <div className={s.wrapper}>
        <div>
          <div className={s.header}>
            <h3>{data.name}</h3>
            <a
              className={s.info}
              href={data.docs}
              download
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/imgs/cabinet/policies/info.png" alt="docs" />
            </a>
          </div>
          <p>{data.shortInfo}</p>
          <div className={s.date}>
            Действителен до:
            <span>
              {data.dateEnd.day}.{data.dateEnd.month}.{data.dateEnd.year}
            </span>
          </div>
        </div>

        <div>
          <img
            onClick={goToInsuredEvent}
            className={s.problem}
            src="/imgs/cabinet/policies/energy.svg"
            alt="problem"
          />
        </div>
      </div>
    </div>
  );
}

export default Policy