import { createSlice } from "@reduxjs/toolkit"

let initialState = {
    isOpen: false,
    type: 'info',
    text: 'Hello World!',
}

let myAlertSlice = createSlice({
  name: "myAlert",
  initialState,
  reducers: {
    setOpen: (state, action) => {
      let { type, text } = action.payload;
      state.isOpen = true;
      state.type = type;
      state.text = text;
    },
    setClose: (state, action) => {
      state.isOpen = false;
    },
  },
});

export let { setOpen, setClose } = myAlertSlice.actions
export default myAlertSlice.reducer