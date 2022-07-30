import React from 'react'
import Button from '../../snippets/button/Button';
import s from './Contacts.module.css'

const Contacts = ({footer}) => {
  let goToOffice = () => {
    window.open(footer.locationOffice, "_blank");
  };

  return (
    <div className={s.contacts}>
      <div className={s.wrapper}>
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
  );
};

export default Contacts