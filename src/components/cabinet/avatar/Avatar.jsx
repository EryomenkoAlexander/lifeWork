import React, { useState } from 'react'
import s from './Avatar.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { setAvatar, setMessage } from '../../../redux/slices/user-slice'
import { TextField } from '@mui/material'
import { setOpen } from '../../../redux/slices/myAlert-slice'
import { setShowLoading } from '../../../redux/slices/loader-slice'

const Avatar = () => {
    let dispatch = useDispatch()
    let avatar = useSelector(state => state.user.activeUser.avatar)
    let [isShow, setShow] = useState(false)
    let [url, setUrl] = useState('')

  let changeAvatar = () => {
    if (!url.includes(" ") && url !== '') {
      dispatch(setShowLoading(true))
      setTimeout(() => {
        dispatch(setAvatar(url))
        dispatch(setOpen({
          type: 'success',
          text: 'Фото обновлено'
        }))
        dispatch(setMessage({
          from: 'Администрация',
          title: 'Аватарка',
          text: 'Фото пользователя успешно обновлено.'
        }))
        setShow(false)
        setUrl("");
        dispatch(setShowLoading(false))
      }, 1500)
    }
  }

  let close = () => {
    setShow(false)
    setUrl('')
  }

  return (
    <div className={s.avatar}>
      <div className={s.wrapper}>
        <div
          className={s.logo}
          style={{
            background: `url(${
              avatar !== "" ? avatar : "/assets/imgs/user/default-avatar.svg"
            }) no-repeat center / cover`,
          }}
        ></div>
        <span>
          {isShow ? (
            <img
              src="/assets/imgs/user/cross.png"
              alt="cross"
              onClick={close}
            />
          ) : (
            <img
              src="/assets/imgs/user/changeAvatar.svg"
              alt="changeAvatar"
              onClick={() => setShow(true)}
            />
          )}
        </span>

        {isShow && (
          <div className={s.url}>
            <img
              src="/assets/imgs/user/check.png"
              alt="check"
              onClick={changeAvatar}
            />
            <TextField
              label="url"
              variant="filled"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default Avatar