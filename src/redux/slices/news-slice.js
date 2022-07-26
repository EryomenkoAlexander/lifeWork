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
            let d = new Date()
            state.items.push({
                ...action.payload,
                id: Math.random(),
                date: [d.getDate(), d.getMonth() + 1, d.getFullYear()].join("."),
            })
        }
    }
})

export let { createNews } = newsSlice.actions
export default newsSlice.reducer;