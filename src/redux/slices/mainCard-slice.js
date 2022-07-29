import { createSlice } from "@reduxjs/toolkit"

let initialState = {
    cards: [
        {
            id: Math.random(),
            title: 'Защита',
            imgSrc: '/imgs/mainCards/shield.svg',
            contentBtn: [
                {
                    id: Math.random(),
                    content: 'Себя и близких',
                    to: '/cabinet/programs'
                },
                {
                    id: Math.random(),
                    content: 'Сотрудников',
                    to: '/cabinet/programs'
                }
            ]
        },
        {
            id: Math.random(),
            title: 'Твоё будущее',
            imgSrc: '/imgs/mainCards/time.svg',
            contentBtn: [
                {
                    id: Math.random(),
                    content: 'Позаботиться о будущем',
                    to: '/cabinet/programs'
                }
            ]
        },
        {
            id: Math.random(),
            title: 'Бизнес предложения',
            imgSrc: '/imgs/mainCards/bag.svg',
            contentBtn: [
                {
                    id: Math.random(),
                    content: 'Узнать больше',
                    to: '/cabinet/programs'
                }
            ]
        }
    ]
}

let mainCardsSlice = createSlice({
    name: 'mainCards',
    initialState,
})

export default mainCardsSlice.reducer;