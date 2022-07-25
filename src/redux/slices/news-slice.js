import { createSlice } from "@reduxjs/toolkit"

let initialState = {
    title: 'Новости',
    items: [],
}

let newsSlice = createSlice({
    name: 'news',
    initialState,
    reducers: {
        createNews: (state, action) => {
            state.items.push({
                ...action.payload,
                id: Math.random(),
            })
        }
    }
})

export let { createNews } = newsSlice.actions
export default newsSlice.reducer;