import React from "react";
import Item from "../item/Item";
import s from "./AboutUs.module.css";
import { useSelector } from "react-redux";

const AboutUs = () => {
  let aboutUs = useSelector((state) => state.home.aboutUs);
  return (
    <div className={s.aboutUs}>
      <h2 className={s.title}>{aboutUs.title.toUpperCase()}</h2>
      <div className="container">
        <div className={s.wrapper}>
          <div className={s.items}>
            {aboutUs.items.map((i) => (
              <Item key={i.id} data={i} />
            ))}
          </div>
          <div className={s.companies}>
            {aboutUs.companies.map((c) => (
              <img src={c.imgSrc} alt="company" key={c.id} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
