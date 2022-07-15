import { createSlice } from "@reduxjs/toolkit"

let initialState = {
    isShowPopup: false,
}

let loginFailPopupSlice = createSlice({
    name: 'popup',
    initialState,
    reducers: {
        setShowPopup: (state, action) => {
            state.isShowPopup = action.payload;
        }
    }
})

export let { setShowPopup } = loginFailPopupSlice.actions
export default loginFailPopupSlice.reducer