import { createSlice } from "@reduxjs/toolkit"

let initialState = {
    isShowLoading: false
}

let loaderSlice = createSlice({
    name: 'loader',
    initialState,
    reducers: {
        setShowLoading: (state, action) => {
            state.isShowLoading = action.payload
        }
    }
})

export let { setShowLoading } = loaderSlice.actions
export default loaderSlice.reducer