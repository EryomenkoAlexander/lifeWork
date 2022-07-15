import { createSlice } from "@reduxjs/toolkit"

let initialState = {
    title: 'немного о нас',
    items: [
        {
            id: Math.random(),
            imgSrc: '/imgs/aboutUs/arrow_right.svg',
            content: '380',
            afterContent: 'мил. руб.',
            subContent: 'капитала'
        },
        {
            id: Math.random(),
            imgSrc: '/imgs/aboutUs/wave.svg',
            content: '78',
            subContent: 'региональных предстравительств'
        },
        {
            id: Math.random(),
            imgSrc: '/imgs/aboutUs/arrow_right.svg',
            content: '20',
            subContent: 'лет на рынке страховых услуг'
        },
        {
            id: Math.random(),
            content: 'ruВВВ',
            subContent: 'высокий уровень надежности '
        }
    ],
    companies: [
        {
            id: Math.random(),
            imgSrc: '/imgs/aboutUs/companies/с1.svg'
        },
        {
            id: Math.random(),
            imgSrc: '/imgs/aboutUs/companies/с2.svg'
        },
        {
            id: Math.random(),
            imgSrc: '/imgs/aboutUs/companies/с3.svg'
        },
        {
            id: Math.random(),
            imgSrc: '/imgs/aboutUs/companies/с4.svg'
        },
        {
            id: Math.random(),
            imgSrc: '/imgs/aboutUs/companies/с5.svg'
        },
        {
            id: Math.random(),
            imgSrc: '/imgs/aboutUs/companies/с6.svg'
        },
    ]
}

let aboutUsSlice = createSlice({
    name: 'aboutUs',
    initialState
})

export default aboutUsSlice.reducer;