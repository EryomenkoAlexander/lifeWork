import { createSlice } from "@reduxjs/toolkit"

let initialState = {
    isShowPopup: false
}

let failPopupSlice = createSlice({
    name: 'succesPopup',
    initialState,
    reducers: {
        setShowPopup: (state, action) => {
            state.isShowPopup = action.payload
        }
    }
})

export let { setShowPopup } = failPopupSlice.actions
export default failPopupSlice.reducer