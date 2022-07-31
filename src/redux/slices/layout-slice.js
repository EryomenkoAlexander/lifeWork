import { createSlice } from "@reduxjs/toolkit";

let initialState = {
  header: {
    logo: {
      id: Math.random(),
      logoImg: "/assets/imgs/header/logo.svg",
      to: "/",
    },

    nav: {
      main: {
        id: Math.random(),
        title: "Главная",
        to: "/",
      },
      about: {
        id: Math.random(),
        title: "О нас",
        to: "/",
      },
      help: {
        id: Math.random(),
        typeList: "help",
        title: "Помощь",
        isShowList: false,
        arrowImg: "/assets/imgs/header/arrow-bottom.svg",
        list: [
          {
            id: Math.random(),
            content: "Правоустанавливающие документы",
          },
          {
            id: Math.random(),
            content: "Правила страхования и тарифы",
          },
          {
            id: Math.random(),
            content: "Годовая отчетность",
          },
          {
            id: Math.random(),
            content: "Политика в отношении обработки персональных данных",
          },
        ],
      },
      location: {
        id: Math.random(),
        typeList: "location",
        isShowList: false,
        arrowImg: "/assets/imgs/header/arrow-bottom.svg",
        list: [
          {
            id: Math.random(),
            content: "Архангельск",
          },
          {
            id: Math.random(),
            content: "Барнаул",
          },
          {
            id: Math.random(),
            content: "Воронеж",
          },
          {
            id: Math.random(),
            content: "Екатеринбург",
          },
          {
            id: Math.random(),
            content: "Ессентуки",
          },
          {
            id: Math.random(),
            content: "Иваново",
          },
          {
            id: Math.random(),
            content: "Ижевск",
          },
          {
            id: Math.random(),
            content: "Кемерово",
          },
          {
            id: Math.random(),
            content: "Санкт-Петербург",
          },
          {
            id: Math.random(),
            content: "Кострома",
          },
          {
            id: Math.random(),
            content: "Краснодар",
          },
        ],
      },
    },
    connection: {
      number: "+7 705 572 04 24",
    },

    cabinet: {
      id: Math.random(),
      title: "Личный кабинет",
      to: "cabinet",
      cabinetImg: "/assets/imgs/header/cabinet.svg",
    },
  },
  footer: {
    nav: [
      { id: Math.random(), content: "Главная", to: "/" },
      { id: Math.random(), content: "О нас", to: "/" },
      { id: Math.random(), content: "Новости", to: "/" },
      { id: Math.random(), content: "Спецпредложения", to: "/cabinet" },
      { id: Math.random(), content: "Бизнес предложения", to: "/cabinet" },
      { id: Math.random(), content: "Твое будущее", to: "/cabinet/programs" },
      {
        id: Math.random(),
        content: "Защита себя и близких",
        to: "/cabinet/programs",
      },
      {
        id: Math.random(),
        content: "Защита сотрудников",
        to: "/cabinet/programs",
      },
      {
        id: Math.random(),
        content: "Страховая документация",
        to: "/cabinet/archives",
      },
      {
        id: Math.random(),
        content: "Финансовые показатели",
        to: "/cabinet/payment",
      },
      { id: Math.random(), content: "Контакты", to: "/" },
      { id: Math.random(), content: "Карта сайта", to: "/" },
    ],
    locationInfo: `
        График работы главного офиса
        125252, г. Москва, 
        ул. Зорге, д. 22 А, офис 811
        Пн. - Чт. с 9:00 до 18:00
        Пт.  с 9:00 до 16:45 
        Сб-Вс выходной
        `,
    btnContent: "Как добраться",
    locationOffice: "https://goo.gl/maps/h8KVXonCYN4kebneA",
    contacts: [
      {
        id: Math.random(),
        beforeContent: "тел:",
        content: "+7 705 572 04 24",
      },
      {
        id: Math.random(),
        beforeContent: "Email для связи с нами",
        content: "sasha.eryomenko77@gmail.com",
      },
    ],
    socialNetwork: [
      {
        id: Math.random(),
        imgSrc: "/assets/imgs/footer/vk.svg",
      },
      {
        id: Math.random(),
        imgSrc: "/assets/imgs/footer/telegram.svg",
      },
      {
        id: Math.random(),
        imgSrc: "/assets/imgs/footer/facebook.svg",
      },
      {
        id: Math.random(),
        imgSrc: "/assets/imgs/footer/instagram.svg",
      },
    ],
    subContent:
      "© 1998 – 2021 ООО СК 'ДЕЛО ЖИЗНИ'. Все права защищены. Полное или частичное копирование любых материалов сайта запрещено. ООО СК «ДЕЛО ЖИЗНИ» осуществляет свою деятельность на основании лицензий ЦБ РФ:СЖ № 3870 от 24.03.2017СЛ № 3870 от 24.03.2017 Органом, осуществляющим полномочия по контролю и надзору за ООО СК «ДЕЛО ЖИЗНИ» является Банк России. Адрес официального сайта Банк России - www.cbr.ru.",
  },
};

let layoutSlice = createSlice({
    name: 'layout',
    initialState,
    reducers: {
        setShowPopup: (state, action) => {
          state.header.isShowPopup = action.payload
        },
        setShowList: (state, action) => {
          if (action.payload === 'location') {
            state.header.nav.location.isShowList = !state.header.nav.location.isShowList;
          } else {
            state.header.nav.help.isShowList = !state.header.nav.help.isShowList;
          }
        }
      }
})

export let { setShowPopup, setShowList } = layoutSlice.actions
export default layoutSlice.reducer