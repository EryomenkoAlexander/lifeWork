import React from "react";
import s from './Registration.module.css'
import { useSelector } from 'react-redux'
import RegistrationForm from "../registrationForm/registration-form-assembly/RegistrationForm";

const Registration = () => {
    let registration = useSelector(state => state.registration)
    return (
      <div className={s.registration}>
        <h2>{registration.title}</h2>
        <div className="wrapper">
          <RegistrationForm
            steps={registration.steps}
            remark={registration.remark}
            btnContent={registration.btnContent}
          />
        </div>
      </div>
    );
}

export default Registration;