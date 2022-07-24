import React, { useEffect } from 'react'
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

const RadioList = ({data, setValue}) => {
  return (
    <FormControl>
      <FormLabel>{data.title}</FormLabel>
      <RadioGroup
        defaultValue={data.list[0]}
        onChange={(e) => setValue(e.target.value)}
      >
        {data.list.map((i) => (
          <FormControlLabel key={i} value={i} control={<Radio />} label={i} />
        ))}
      </RadioGroup>
    </FormControl>
  );
}

export default RadioList