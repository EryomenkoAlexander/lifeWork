import React from 'react'
import s from './FailPopup.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { setShowPopup } from '../../../redux/slices/failPopup-slice'

const FailPopup = () => {
    let dispatch = useDispatch()
    let isShowPopup = useSelector(state => state.failPopup.isShowPopup)

  return (
    <div
    className={[s.popup, isShowPopup && s.active].join(" ")}
    onClick={() => dispatch(setShowPopup(false))}
  >
    <div
      className={[s.wrapper, isShowPopup && s.active].join(" ")}
      onClick={(e) => e.stopPropagation()}
    >
      <img src="/imgs/popups/fail.png" alt="fail" />
    </div>
  </div>
  )
}

export default FailPopup