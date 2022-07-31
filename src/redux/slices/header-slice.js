import { createSlice } from "@reduxjs/toolkit";

let initialState = {
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
        typeList: 'help',
        title: "Помощь",
        isShowList: false,
        arrowImg: "/assets/imgs/header/arrow-bottom.svg",
        list: [
          {
            id: Math.random(),
            content: 'Правоустанавливающие документы',
          },
          {
            id: Math.random(),
            content: 'Правила страхования и тарифы',
          },
          {
            id: Math.random(),
            content: 'Годовая отчетность',
          },
          {
            id: Math.random(),
            content: 'Политика в отношении обработки персональных данных',
          },
        ]
      },
      location: {
        id: Math.random(),
        typeList: 'location',
        isShowList: false,
        arrowImg: "/assets/imgs/header/arrow-bottom.svg",
        list: [
          {
            id: Math.random(),
            content: 'Архангельск',
          },
          {
            id: Math.random(),
            content: 'Барнаул',
          },
          {
            id: Math.random(),
            content: 'Воронеж',
          },
          {
            id: Math.random(),
            content: 'Екатеринбург',
          },
          {
            id: Math.random(),
            content: 'Ессентуки',
          },
          {
            id: Math.random(),
            content: 'Иваново',
          },
          {
            id: Math.random(),
            content: 'Ижевск',
          },
          {
            id: Math.random(),
            content: 'Кемерово',
          },
          {
            id: Math.random(),
            content: 'Санкт-Петербург',
          },
          {
            id: Math.random(),
            content: 'Кострома',
          },
          {
            id: Math.random(),
            content: 'Краснодар',
          },
        ]
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
  };

let headerSlice = createSlice({
    name: 'header',
    initialState,
    reducers: {
      setShowPopup: (state, action) => {
        state.isShowPopup = action.payload
      },
      setShowList: (state, action) => {
        if (action.payload === 'location') {
          state.nav.location.isShowList = !state.nav.location.isShowList;
        } else {
          state.nav.help.isShowList = !state.nav.help.isShowList;
        }
      }
    }
})

export let { setShowPopup, setShowList } = headerSlice.actions
export default headerSlice.reducer;