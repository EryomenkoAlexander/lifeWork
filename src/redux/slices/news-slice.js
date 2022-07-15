import { createSlice } from "@reduxjs/toolkit"

let initialState = {
    title: 'Новости',
    items: [],
    inputs: [
        {
            id: Math.random(),
            type: 'text',
            title: 'Превью',
            name: 'preview',
            placeholder: 'url',
        },
        {
            id: Math.random(),
            type: 'text',
            title: 'Заголовок',
            name: 'title',
            placeholder: 'Заголовок',
            options: {
                required: {
                    value: true,
                    message: 'Введите заголовок'
                },
                minLength: {
                    value: 2,
                    message: 'Минимум 2 символ'
                },
                maxLength: {
                    value: 30,
                    message: 'Максимум 30 символов'
                }
            }
        },
        {
            id: Math.random(),
            type: 'text',
            title: 'Хештеги',
            name: 'hashtag',
            placeholder: '#hashtag',
        },
    ],
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