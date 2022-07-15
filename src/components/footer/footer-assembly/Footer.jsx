import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Footer.module.css";
import Button from "../../snippets/button/Button";
import { useSelector } from "react-redux";

const Footer = (props) => {
  let footer = useSelector(state => state.footer)
  return (
    <div className={s.footer}>
      <div className={s.wrapper}>
        <div className={s.info}>
          <div className="container">
            <div className={s.infoWrapper}>
              <div className={s.nav}>
                {footer.nav.map((n) => (
                  <NavLink to="/" key={n.id}>
                    {n.content}
                  </NavLink>
                ))}
              </div>

              <div className={s.contacts}>
                <div className={s.location}>
                  <span>{footer.locationInfo}</span>
                  <div>
                    <Button>{footer.btnContent.toUpperCase()}</Button>
                  </div>
                </div>

                <div>
                  <div className={s.contactsItems}>
                    {footer.contacts.map((c) => (
                      <div key={c.id}>
                        <div>{c.beforeContent}</div>
                        <strong>{c.content}</strong>
                      </div>
                    ))}
                  </div>

                  <div className={s.socialNetwork}>
                    {footer.socialNetwork.map((sn) => (
                      <img src={sn.imgSrc} alt="social-network" key={sn.id} />
                    ))}
                  </div>
                </div>
              </div>
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
