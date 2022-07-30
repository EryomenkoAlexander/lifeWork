import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import s from "./StatusPolicyCard.module.css";
import Button from "../../../snippets/button/Button";

const StatusPolicyCard = () => {
  let navigate = useNavigate();
  let policies = useSelector((state) => state.user.activeUser.policies);
  let lastPolicy = policies.slice(-1)[0];

  let getLeftDays = (dateEnd) => {
    let d = new Date();
    let curDays = d.getDate() + d.getMonth() * 30 + d.getFullYear() * 365;
    let endDays = dateEnd.day + (dateEnd.month - 1) * 30 + dateEnd.year * 365;
    return endDays - curDays;
  };

  let goToPolicies = () => {
    navigate("/cabinet/policies");
  };

  return !policies.length ? (
    ""
  ) : (
    <div className={s.statusPolicyCard}>
      <div className={s.wrapper}>
        <div className={s.title}>
          <img src="/imgs/cabinet/primary/check.svg" alt="check" />
          <h4>Статус моего полиса</h4>
        </div>

        <div className={s.content}>
          <div>
            <div className={s.header}>
              <h4>ПРОГРАММА</h4>
              <h3>«{lastPolicy.name}»</h3>

              <div>
                действует до
                <span>
                  {lastPolicy.dateEnd.day}.{lastPolicy.dateEnd.month}.
                  {lastPolicy.dateEnd.year}
                </span>
              </div>
            </div>

            <div className={s.days}>
              <h4>ОСТАЛОСЬ</h4>
              <div>
                <h3>{getLeftDays(lastPolicy.dateEnd)}</h3>
                <h4>дня</h4>
              </div>
            </div>

            <Button onClick={goToPolicies}>Подробнее</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatusPolicyCard;
