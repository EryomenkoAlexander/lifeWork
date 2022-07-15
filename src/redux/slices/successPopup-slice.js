import { createSlice } from "@reduxjs/toolkit"

let initialState = {
    isShowPopup: false
}

let successPopupSlice = createSlice({
    name: 'succesPopup',
    initialState,
    reducers: {
        setShowPopup: (state, action) => {
            state.isShowPopup = action.payload
        }
    }
})

export let { setShowPopup } = successPopupSlice.actions
export default successPopupSlice.reducer