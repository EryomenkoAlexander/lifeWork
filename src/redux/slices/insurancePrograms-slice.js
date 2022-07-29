import { createSlice } from "@reduxjs/toolkit"

let initialState = {
    title: 'Страховые программы',
    cards: [
        {
            id: Math.random(),
            typeService: 'Программа',
            service: 'Здоровье',
            imgSrc: '/imgs/insurancePrograms/health.svg',
            btnContent: 'Купить',
            infoProgram: [
                {
                    id: Math.random(),
                    beforeContent: 'до',
                    content: '1 000 000 ₽', 
                    subContent: 'сумма страхования'
                },
                {
                    id: Math.random(),
                    beforeContent: 'до',
                    content: '10 дней',
                    subContent: 'денежное возмещение'
                },
                {
                    id: Math.random(),
                    beforeContent: 'от',
                    content: '5 лет',
                    subContent: 'страховой тариф остается неизменным'
                }
            ]
        },
        {
            id: Math.random(),
            typeService: 'Онлайн',
            iconSrc: '/imgs/insurancePrograms/info_outline.svg',
            service: 'ДМС',
            imgSrc: '/imgs/insurancePrograms/caduceus-symbol.svg',
            btnContent: 'Купить',
            infoProgram: [
                {
                    id: Math.random(),
                    beforeContent: 'до',
                    content: '75 000 ₽',
                    subContent: 'сумма на каждого застрахованного'
                },
                {
                    id: Math.random(),
                    beforeContent: 'до',
                    imgSrc: '/imgs/insurancePrograms/infinity.svg',
                    content: 'чел.',
                    subContent: 'количество застрахованных по одному договору'
                },
                {
                    id: Math.random(),
                    beforeContent: '45 000 ₽',
                    content: '52 000 ₽',
                    subContent: 'с возможностью увеличить сумму страхования'
                }
            ]
        }
    ]
}

let insuranceProgramsSlice = createSlice({
    name: 'insurancePrograms',
    initialState
})

export default insuranceProgramsSlice.reducer;