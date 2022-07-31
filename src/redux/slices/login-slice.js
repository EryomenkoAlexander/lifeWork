import { createSlice } from "@reduxjs/toolkit"

let initialState = {
    form: {
        title: 'Добрый день!',
        btnContent: 'Войти',
        registration: 'Зарегистрироваться',
        inputs: [
            {
                id: Math.random(),
                type: 'text',
                title: 'Логин',
                name: 'login',
                placeholder: 'Введите свой номер телефона или email',
                options: {
                    required: {
                        value: true,
                        message: 'Введите логин'
                    },
                }
            },
            {
                id: Math.random(),
                type: 'password',
                title: 'Пароль',
                name: 'password',
                placeholder: 'Введите пароль',
                options: {
                    required: {
                        value: true,
                        message: 'Введите пароль'
                    }
                }
            }
        ]
    },
    dignitys: {
        title: 'причин зарегист рироваться',
        imgSrc: '/assets/imgs/login/five.svg',
        items: [
            {
                id: Math.random(),
                imgSrc: '/assets/imgs/login/clock.svg',
                content: 'быстрые и удобные правки '
            },
            {
                id: Math.random(),
                imgSrc: '/assets/imgs/login/shield.svg',
                content: 'надежность'
            },
            {
                id: Math.random(),
                imgSrc: '/assets/imgs/login/hand.svg',
                content: 'приватность'
            },
            {
                id: Math.random(),
                imgSrc: '/assets/imgs/login/file.svg',
                content: 'все документы в одном месте'
            },
            {
                id: Math.random(),
                imgSrc: '/assets/imgs/login/imprint.svg',
                content: 'индивидуaльный подход'
            }
        ]
    }
}

let loginSlice = createSlice({
    name: 'login',
    initialState
})


export default loginSlice.reducer;