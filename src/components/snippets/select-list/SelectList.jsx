import { Select, MenuItem, FormControl, InputLabel } from '@mui/material'
import React from 'react'
import { useEffect } from 'react';
import s from './SelectList.module.css'

const SelectList = ({data, value, setValue}) => {
  let handleChange = (e) => {
    setValue(e.target.value.toString());
  };

  useEffect(() => {
    setValue(data.list[0])
  }, [])

  return (
    <div className={s.selectList}>
      <div className={s.wrapper}>
        <FormControl fullWidth>
          <InputLabel>{data.title}</InputLabel>
          <Select
            value={value}
            label={data.title}
            onChange={(e) => setValue(e.target.value)}
          >
            {data.list.map((j) => (
              <MenuItem key={j} value={j}>
                {j}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
    </div>
  );
};

export default SelectList