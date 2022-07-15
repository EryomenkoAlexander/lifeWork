import { createSlice } from "@reduxjs/toolkit";

let initialState = {
    title: 'Виды страхования',
    cards: [
        {
            id: Math.random(), 
            content: 'страхование жизни на случай смерти',
            imgSrc: '/imgs/typesInsurance/angel.svg',
            sideImg: 'right'
        },
        {
            id: Math.random(),
            content: 'страхование жизни с условием периодических страховых выплат',
            imgSrc: '/imgs/typesInsurance/coin.svg',
            sideImg: 'left'
        },
        {
            id: Math.random(),
            content: 'страхование от несчастных случаев и болезней',
            imgSrc: '/imgs/typesInsurance/accident.svg',
            sideImg: 'right'
        },
        {
            id: Math.random(),
            content: 'медицинское страхование',
            imgSrc: '/imgs/typesInsurance/healthcare.svg',
            sideImg: 'left'
        }
    ]
}

let typesInsuranceSlice = createSlice({
    name: 'typesInsurance',
    initialState
})

export default typesInsuranceSlice.reducer;