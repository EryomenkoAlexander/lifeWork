import { createSlice } from "@reduxjs/toolkit"

let initialState = {
    nav: [
      { id: Math.random(), content: "Главная" },
      { id: Math.random(), content: "О нас" },
      { id: Math.random(), content: "Новости" },
      { id: Math.random(), content: "Спецпредложения" },
      { id: Math.random(), content: "Бизнес предложения" },
      { id: Math.random(), content: "Твое будущее" },
      { id: Math.random(), content: "Защита себя и близких" },
      { id: Math.random(), content: "Защита сотрудников" },
      { id: Math.random(), content: "Страховая документация" },
      { id: Math.random(), content: "Финансовые показатели" },
      { id: Math.random(), content: "Контакты" },
      { id: Math.random(), content: "Карта сайта" },
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
        imgSrc: "/imgs/footer/vk.svg",
      },
      {
        id: Math.random(),
        imgSrc: "/imgs/footer/telegram.svg",
      },
      {
        id: Math.random(),
        imgSrc: "/imgs/footer/facebook.svg",
      },
      {
        id: Math.random(),
        imgSrc: "/imgs/footer/instagram.svg",
      },
    ],
    subContent: "© 1998 – 2021 ООО СК 'ДЕЛО ЖИЗНИ'. Все права защищены. Полное или частичное копирование любых материалов сайта запрещено. ООО СК «ДЕЛО ЖИЗНИ» осуществляет свою деятельность на основании лицензий ЦБ РФ:СЖ № 3870 от 24.03.2017СЛ № 3870 от 24.03.2017 Органом, осуществляющим полномочия по контролю и надзору за ООО СК «ДЕЛО ЖИЗНИ» является Банк России. Адрес официального сайта Банк России - www.cbr.ru.",
  }

let footerSlice = createSlice({
    name: 'footer',
    initialState
})

export default footerSlice.reducer;