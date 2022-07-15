import { createSlice } from "@reduxjs/toolkit"

let initialState = {
    title: 'полезные кнопки',
    buttons: [
        {
            id: Math.random(),
            content: 'Задать вопрос',
            route: 'cabinet/askQuestion'
        },
        {
            id: Math.random(),
            content: 'Калькулятор',
            route: 'cabinet/calculate'
        },
        {
            id: Math.random(),
            content: 'Проверить агента',
            route: 'cabinet/checkAgent'
        }
    ]
}

let usefulButtonsSlice = createSlice({
    name: 'usefulButtons',
    initialState
})

export default usefulButtonsSlice.reducer;