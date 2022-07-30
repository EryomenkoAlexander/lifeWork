import React from "react";
import s from './Cabinet.module.css'
import { useSelector } from "react-redux";
import Menu from "../menu/menu-assembly/Menu";
import { Routes, Route, useNavigate } from "react-router";
import { useEffect } from "react";
import Profile from "../profile/profile-assembly/Profile";
import Career from "../career/career-assembly/Career";
import Messages from "../messages/messages-assembly/Messages";
import News from "../news/news-assembly/News";
import InsuredEvent from "../insuredEvent/insuredEvent-assembly/InsuredEvent";
import Deduction from "../deduction/deduction-assembly/Deduction";
import Policies from "../policies/policies-assembly/Policies";
import Programs from "../programs/programs-assembly/Programs";
import Archives from "../archives/archives-assembly/Archives";
import Payment from "../payment/payment-assembly/Payment";
import Calculate from "../calculate/calculate-assembly/Calculate";
import SendStatement from "../sendStatement/sendStatement-assembly/SendStatement";
import AskQuestion from "../askQuestion/askQuestion-assembly/AskQuestion";
import CheckAgent from "../checkAgent/checkAgent-assembly/CheckAgent";
import NotFound from "../../not-found/NotFound";
import { NavLink } from 'react-router-dom'
import Primary from '../primary/primary-assembly/Primary'

const Cabinet = () => {
  let navigate = useNavigate();

  let isLoggedIn = useSelector((state) => state.user.isLoggedIn);
  let title = useSelector((state) => state.cabinet.title);
  let menuItems = useSelector((state) => state.cabinet.menu.items);

  useEffect(() => {
    !isLoggedIn && navigate("/login", { replace: true });
  }, []);

  let getRouteElement = (path) => {
    switch (path) {
      case "profile":
        return <Profile />;
      case "career":
        return <Career />;
      case "messages":
        return <Messages />;
      case "news":
        return <News />;
      case "insuredEvent":
        return <InsuredEvent />;
      case "deduction":
        return <Deduction />;
      case "policies":
        return <Policies />;
      case "programs":
        return <Programs />;
      case "archives":
        return <Archives />;
      case "payment":
        return <Payment />;
      case "calculate":
        return <Calculate />;
      case "sendStatement":
        return <SendStatement />;
      case "askQuestion":
        return <AskQuestion />;
      case "checkAgent":
        return <CheckAgent />;
      default:
        return <NotFound />;
    }
  };

  return (
    <div className={s.cabinet}>
      <div className="container">
        <div className={s.wrapper}>
          <div className={s.menu}>
            <NavLink to="/cabinet" className={s.title}>
              <img src={title.imgSrc} alt="roofing" />
              <span>{title.content}</span>
            </NavLink>
            <div>
              <Menu />
            </div>
          </div>

          <div className={s.content}>
            <Routes>
              <Route path='/' element={<Primary />} />
              {menuItems.map((i) => (
                <Route key={i.id} path={i.to} element={getRouteElement(i.to)} />
              ))}
              <Route path='*' element={<NotFound />} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cabinet;