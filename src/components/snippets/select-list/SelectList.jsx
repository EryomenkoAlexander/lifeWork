import { Select, MenuItem, FormControl, InputLabel } from "@mui/material";
import React from "react";
import { useEffect } from "react";

const SelectList = ({ title, list, value, setValue }) => {
  useEffect(() => {
    list && list.length && setValue(list[0]);
  }, []);

  return (
    <FormControl fullWidth>
      <InputLabel>{title}</InputLabel>
      <Select
        disabled={list && list.length ? false : true}
        value={value}
        label={title}
        onChange={(e) => setValue(e.target.value)}
      >
        {list &&
          list.map((i) => (
            <MenuItem key={i} value={i}>
              {i}
            </MenuItem>
          ))}
      </Select>
    </FormControl>
  );
};

export default SelectList;