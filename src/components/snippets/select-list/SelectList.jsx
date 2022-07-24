import { Select, MenuItem, FormControl, InputLabel } from '@mui/material'
import React from 'react'
import { useEffect } from 'react';

const SelectList = ({data, value, setValue}) => {
  useEffect(() => {
    setValue(data.list[0])
  }, [])

  return (
    <FormControl fullWidth>
      <InputLabel>{data.title}</InputLabel>
      <Select
        value={value}
        label={data.title}
        onChange={(e) => setValue(e.target.value)}
      >
        {data.list.map((i) => (
          <MenuItem key={i} value={i}>
            {i}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default SelectList