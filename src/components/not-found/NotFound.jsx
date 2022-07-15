import React from 'react'
import { useNavigate } from 'react-router'
import Button from '../snippets/button/Button'
import s from './NotFound.module.css'

const NotFound = () => {
  let navigate = useNavigate()
  
  return (
    <div className={s.notFound}>
      <img src="/imgs/notFound/error-404.png" alt="404" />
      <Button onClick={() => navigate('/')}>Домой</Button>
    </div>
  );
}

export default NotFound