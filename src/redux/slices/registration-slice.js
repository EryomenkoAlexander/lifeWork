import { createSlice } from "@reduxjs/toolkit"

let initialState = {
    title: 'Регистрация',
    remark: 'На указанные контактные данные придет код для подтверждения регистрации',
    btnContent: 'Зарегистрироваться',
    steps: {
        step_1: [
            {
                id: Math.random(),
                type: 'text',
                title: 'Фамилия',
                name: 'lastName',
                placeholder: 'Иванов',
                options: {
                    required: {
                        value: true,
                        message: 'Введите фамилию'
                    },
                    minLength: {
                        value: 2,
                        message: 'Минимум 2 символа'
                    },
                    pattern: {
                        value: /[A-Za-zА-Яа-яЁё]/,
                        message: 'Неверный формат'
                    }
                }
            },
            {
                id: Math.random(),
                type: 'text',
                title: 'Имя',
                name: 'firstName',
                placeholder: 'Иван',
                options: {
                    required: {
                        value: true,
                        message: 'Введите имя'
                    },
                    minLength: {
                        value: 2,
                        message: 'Минимум 2 символа'
                    },
                    pattern: {
                        value: /[A-Za-zА-Яа-яЁё]/,
                        message: 'Неверный формат'
                    }
                }
            },
            {
                id: Math.random(),
                type: 'text',
                title: 'Отчество',
                name: 'patronymic',
                placeholder: 'Иванович',
                options: {
                    required: {
                        value: true,
                        message: 'Введите отчество'
                    },
                    minLength: {
                        value: 2,
                        message: 'Минимум 2 символа'
                    },
                    pattern: {
                        value: /[A-Za-zА-Яа-яЁё]/,
                        message: 'Неверный формат'
                    }
                }
            }
        ],
        step_2: [
            {
                id: Math.random(),
                type: 'tel',
                title: 'Телефон',
                name: 'tel',
                placeholder: '+7(___)___-__-__',
                options: {
                    required: {
                        value: true,
                        message: 'Введите телефон'
                    },
                    pattern: {
                        value: /^\+?77([0124567][0-8]\d{7})$/,
                        message: 'Неверный формат'
                    },
                    maxLength: {
                        value: 12,
                        message: 'Неверный формат'
                    }
                }
            },
            {
                id: Math.random(),
                type: 'email',
                title: 'E-mail',
                name: 'login',
                placeholder: 'mail@example.ru',
                options: {
                    required: {
                        value: true,
                        message: 'Введите e-mail'
                    },
                    pattern: {
                        value: /^[a-z0-9](\.?[a-z0-9]){5,}@g(oogle)?mail\.com$/,
                        message: 'Неверный формат'
                    }
                }
            },
            {
                id: Math.random(),
                type: 'password',
                changedType: 'text',
                title: 'Пароль',
                name: 'password',
                placeholder: 'Придумайте пароль',
                options: {
                    required: {
                        value: true,
                        message: 'Введите пароль'
                    },
                    minLength: {
                        value: 5,
                        message: 'Минимум 5 символов'
                    }
                }
            },
            {
                id: Math.random(),
                type: 'password',
                changedType: 'text',
                title: 'Подтверждение пароля',
                name: 'repeatPassword',
                placeholder: 'Повторите пароль',
                options: {
                    required: {
                        value: true,
                        message: 'Повторите пароль'
                    }
                }
            }
        ],
        step_3: [
            {
                id: Math.random(),
                type: 'date',
                title: 'Дата рождения',
                name: 'date',
                placeholder: 'ДД.ММ.ГГГГ',
                options: {
                    required: {
                        value: true,
                        message: 'Введите дату рождения'
                    }
                }
            },
            {
                id: Math.random(),
                type: 'number',
                title: 'Номер карты клиента',
                name: 'card',
                placeholder: '123456',
                subContent: 'Укажите (если имеется) последние шесть цифр ',
                options: {
                    required: {
                        value: false
                    },
                    minLength: {
                        value: 6,
                        message: 'Неверный формат'
                    },
                    maxLength: {
                        value: 6,
                        message: 'Неверный формат'
                    }
                }
            }
        ],
        step_4: [
            {
                id: Math.random(),
                title: 'Подписка на рассылку',
                name: 'subscription',
                options: {
                    required: false
                }
            },
            {
                id: Math.random(),
                title: 'Согласие на обработку перональных данных',
                name: 'agreement',
                options: {
                    required: true
                }
            }
        ]
    }
}

let registrationSlice = createSlice({
    name: 'registration',
    initialState
})

export default registrationSlice.reducer;