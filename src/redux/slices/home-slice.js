import { createSlice } from "@reduxjs/toolkit";

let initialState = {
  mainCards: {
    cards: [
      {
        id: Math.random(),
        title: "Защита",
        imgSrc: "/assets/imgs/mainCards/shield.svg",
        contentBtn: [
          {
            id: Math.random(),
            content: "Себя и близких",
            to: "/cabinet/programs",
          },
          {
            id: Math.random(),
            content: "Сотрудников",
            to: "/cabinet/programs",
          },
        ],
      },
      {
        id: Math.random(),
        title: "Твоё будущее",
        imgSrc: "/assets/imgs/mainCards/time.svg",
        contentBtn: [
          {
            id: Math.random(),
            content: "Позаботиться о будущем",
            to: "/cabinet/programs",
          },
        ],
      },
      {
        id: Math.random(),
        title: "Бизнес предложения",
        imgSrc: "/assets/imgs/mainCards/bag.svg",
        contentBtn: [
          {
            id: Math.random(),
            content: "Узнать больше",
            to: "/cabinet/programs",
          },
        ],
      },
    ],
  },
  insurancePrograms: {
    title: "Страховые программы",
    cards: [
      {
        id: Math.random(),
        typeService: "Программа",
        service: "Здоровье",
        imgSrc: "/assets/imgs/insurancePrograms/health.svg",
        btnContent: "Купить",
        infoProgram: [
          {
            id: Math.random(),
            beforeContent: "до",
            content: "1 000 000 ₽",
            subContent: "сумма страхования",
          },
          {
            id: Math.random(),
            beforeContent: "до",
            content: "10 дней",
            subContent: "денежное возмещение",
          },
          {
            id: Math.random(),
            beforeContent: "от",
            content: "5 лет",
            subContent: "страховой тариф остается неизменным",
          },
        ],
      },
      {
        id: Math.random(),
        typeService: "Онлайн",
        iconSrc: "/assets/imgs/insurancePrograms/info_outline.svg",
        service: "ДМС",
        imgSrc: "/assets/imgs/insurancePrograms/caduceus-symbol.svg",
        btnContent: "Купить",
        infoProgram: [
          {
            id: Math.random(),
            beforeContent: "до",
            content: "75 000 ₽",
            subContent: "сумма на каждого застрахованного",
          },
          {
            id: Math.random(),
            beforeContent: "до",
            imgSrc: "/assets/imgs/insurancePrograms/infinity.svg",
            content: "чел.",
            subContent: "количество застрахованных по одному договору",
          },
          {
            id: Math.random(),
            beforeContent: "45 000 ₽",
            content: "52 000 ₽",
            subContent: "с возможностью увеличить сумму страхования",
          },
        ],
      },
    ],
  },
  typesInsurance: {
    title: "Виды страхования",
    cards: [
      {
        id: Math.random(),
        content: "страхование жизни на случай смерти",
        imgSrc: "/assets/imgs/typesInsurance/angel.svg",
        sideImg: "right",
      },
      {
        id: Math.random(),
        content: "страхование жизни с условием периодических страховых выплат",
        imgSrc: "/assets/imgs/typesInsurance/coin.svg",
        sideImg: "left",
      },
      {
        id: Math.random(),
        content: "страхование от несчастных случаев и болезней",
        imgSrc: "/assets/imgs/typesInsurance/accident.svg",
        sideImg: "right",
      },
      {
        id: Math.random(),
        content: "медицинское страхование",
        imgSrc: "/assets/imgs/typesInsurance/healthcare.svg",
        sideImg: "left",
      },
    ],
  },
  aboutUs: {
    title: "немного о нас",
    items: [
      {
        id: Math.random(),
        imgSrc: "/assets/imgs/aboutUs/arrow_right.svg",
        content: "380",
        afterContent: "мил. руб.",
        subContent: "капитала",
      },
      {
        id: Math.random(),
        imgSrc: "/assets/imgs/aboutUs/wave.svg",
        content: "78",
        subContent: "региональных предстравительств",
      },
      {
        id: Math.random(),
        imgSrc: "/assets/imgs/aboutUs/arrow_right.svg",
        content: "20",
        subContent: "лет на рынке страховых услуг",
      },
      {
        id: Math.random(),
        content: "ruВВВ",
        subContent: "высокий уровень надежности ",
      },
    ],
    companies: [
      {
        id: Math.random(),
        imgSrc: "/assets/imgs/aboutUs/companies/с1.svg",
      },
      {
        id: Math.random(),
        imgSrc: "/assets/imgs/aboutUs/companies/с2.svg",
      },
      {
        id: Math.random(),
        imgSrc: "/assets/imgs/aboutUs/companies/с3.svg",
      },
      {
        id: Math.random(),
        imgSrc: "/assets/imgs/aboutUs/companies/с4.svg",
      },
      {
        id: Math.random(),
        imgSrc: "/assets/imgs/aboutUs/companies/с5.svg",
      },
      {
        id: Math.random(),
        imgSrc: "/assets/imgs/aboutUs/companies/с6.svg",
      },
    ],
  },
  news: {
    title: 'Новости',
    items: [],
  },
  usefulButtons: {
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
  },
};

let homeSlice = createSlice({
  name: "home",
  initialState,
  reducers: {
    createNews: (state, action) => {
      let d = new Date();
      state.news.items.push({
        ...action.payload,
        id: Math.random(),
        date: [d.getDate(), d.getMonth() + 1, d.getFullYear()].join("."),
      });
    },
  },
});

export let { createNews } = homeSlice.actions
export default homeSlice.reducer