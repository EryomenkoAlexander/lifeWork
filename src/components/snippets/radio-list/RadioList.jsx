import React from 'react'
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

const RadioList = ({title, list, setValue}) => {
  return (
    <FormControl>
      <FormLabel>{title}</FormLabel>
      <RadioGroup
        defaultValue={list[0]}
        onChange={(e) => setValue(e.target.value)}
      >
        {list.map((i) => (
          <FormControlLabel key={i} value={i} control={<Radio />} label={i} />
        ))}
      </RadioGroup>
    </FormControl>
  );
}

export default RadioList