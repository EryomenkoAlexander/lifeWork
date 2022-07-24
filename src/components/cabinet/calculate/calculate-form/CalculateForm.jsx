import React from 'react'
import s from './CalculateForm.module.css'
import Input from '../../../snippets/input/Input'
import { useForm } from 'react-hook-form'

import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { useState } from 'react'

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import SelectList from '../../../snippets/select-list/SelectList';

const CalculateForm = ({inputs}) => {
    const {
      register,
      handleSubmit,
      setError,
      formState: { errors },
    } = useForm({
      mode: "onBlur",
    });

    let onSubmit = (data) => {
        console.log(data);
      }
    
      let [gender, setGender] = useState('')
      let [fee, setFee] = useState('')

      console.log(fee);

  return (
    <div className={s.calculateForm}>
      <div className={s.wrapper}>
        <form onSubmit={handleSubmit(onSubmit)}>
          {inputs.map((i) => (
            <div key={i.id}>
              {i.list ? (
                i.type === "radio" ? (
                  <FormControl>
                    <FormLabel>{i.title}</FormLabel>
                    <RadioGroup
                      defaultValue={i.list[0]}
                      onChange={(e) => setGender(e.target.value)}
                    >
                      {i.list.map((j) => (
                        <FormControlLabel
                          key={j}
                          value={j}
                          control={<Radio />}
                          label={j}
                        />
                      ))}
                    </RadioGroup>
                  </FormControl>
                ) : (
                    <SelectList
                        data={i}
                        value={fee}
                        setValue={setFee}
                    />
                )
              ) : (
                <Input data={i} register={register} error={errors} />
              )}
            </div>
          ))}
        </form>
      </div>
    </div>
  );
}

export default CalculateForm