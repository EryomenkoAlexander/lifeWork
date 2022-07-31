import React from "react";
import s from "./Footer.module.css";
import { useSelector } from "react-redux";
import Nav from "../nav/Nav";
import Contacts from "../contacts/Contacts";

const Footer = () => {
  let footer = useSelector((state) => state.layout.footer);

  return (
    <div className={s.footer}>
      <div className={s.wrapper}>
        <div className={s.info}>
          <div className="container">
            <div className={s.infoWrapper}>
              <Nav nav={footer.nav} />
              <Contacts footer={footer} />
            </div>
          </div>
        </div>

        <div className={s.subContent}>
          <div className="container">
            <div className={s.subContentWrapper}>
              <span>{footer.subContent}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
