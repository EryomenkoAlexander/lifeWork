import React from 'react'
import s from './SuccessPopup.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { setShowPopup } from '../../../redux/slices/successPopup-slice'

const SuccessPopup = () => {
    let dispatch = useDispatch()
    let isShowPopup = useSelector(state => state.successPopup.isShowPopup)

  return (
    <div
    className={[s.popup, isShowPopup && s.active].join(" ")}
    onClick={() => dispatch(setShowPopup(false))}
  >
    <div
      className={[s.wrapper, isShowPopup && s.active].join(" ")}
      onClick={(e) => e.stopPropagation()}
    >
      <img src="/imgs/popups/success.png" alt="success" />
    </div>
  </div>
  )
}

export default SuccessPopup