import React from "react";
import s from "./Footer.module.css";
import Button from "../../snippets/button/Button";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { setOpen } from "../../../redux/slices/myAlert-slice";

const Footer = (props) => {
  let footer = useSelector((state) => state.footer);
  let isLoggedIn = useSelector((state) => state.user.isLoggedIn);
  let navigate = useNavigate();
  let dispatch = useDispatch();

  let getRoute = (path) => {
    if (path === '/') {
      navigate(path)
    } else {
      isLoggedIn
        ? navigate(path)
        : dispatch(
            setOpen({
              type: "warning",
              text: "Выполните вход",
            })
          );
    }
  }

  let goToOffice = () => {
    window.open(footer.locationOffice, '_blank');
  };

  return (
    <div className={s.footer}>
      <div className={s.wrapper}>
        <div className={s.info}>
          <div className="container">
            <div className={s.infoWrapper}>
              <div className={s.nav}>
                {footer.nav.map((i) => (
                  <span key={i.id} onClick={() => getRoute(i.to)}>
                    {i.content}
                  </span>
                ))}
              </div>

              <div className={s.contacts}>
                <div className={s.location}>
                  <span>{footer.locationInfo}</span>
                  <div>
                    <Button onClick={goToOffice}>{footer.btnContent.toUpperCase()}</Button>
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
                    {footer.socialNetwork.map((i) => (
                      <img src={i.imgSrc} alt="social-network" key={i.id} />
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
