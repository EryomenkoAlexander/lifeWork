import { TextField } from '@mui/material'
import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import s from './CheckAgent.module.css'
import SearchIcon from '@mui/icons-material/Search';
import { setOpen } from '../../../../redux/slices/myAlert-slice';

const CheckAgent = () => {
  let dispatch = useDispatch()
  let checkAgent = useSelector(state => state.cabinet.checkAgent)
  let [value, setValue] = useState('')
  
  let sendAgent = () => {
    if (!value.includes(' ') && value !== '') {
      dispatch(setOpen({
        type: 'success',
        text: 'Запрос отправлен'
      }))
      setValue('')
    }
  }
  
  return (
    <div className={s.checkAgent}>
      <h2>{checkAgent.title}</h2>
      <div className={s.wrapper}>
        <div className={s.search}>
          <TextField
            label="ИНН / БИН / ОГРН"
            variant="standard"
            sx={{ width: "100%" }}
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <SearchIcon className={s.icon} fontSize='large' color='primary' onClick={sendAgent} />
        </div>
      </div>
    </div>
  );
}

export default CheckAgent