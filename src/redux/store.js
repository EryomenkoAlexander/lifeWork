import { configureStore } from "@reduxjs/toolkit";
import aboutUsSlice from "./slices/aboutUs-slice";
import cabinetSlice from "./slices/cabinet-slice";
import footerSlice from "./slices/footer-slice";
import headerSlice from "./slices/header-slice";
import insuranceProgramsSlice from "./slices/insurancePrograms-slice";
import loaderSlice from "./slices/loader-slice";
import loginSlice from "./slices/login-slice";
import mainCardsSlice from './slices/mainCard-slice'
import newsSlice from "./slices/news-slice";
import loginFailPopupSlice from "./slices/loginFailPopup-slice";
import registrationSlice from "./slices/registration-slice";
import typesInsuranceSlice from "./slices/typesInsurance-slice";
import usefulButtonsSlice from "./slices/usefulButtons-slice";
import userSlice from "./slices/user-slice";
import successPopupSlice from "./slices/successPopup-slice";

let store = configureStore({
    reducer: {
        header: headerSlice,
        mainCards: mainCardsSlice,
        insurancePrograms: insuranceProgramsSlice,
        typesInsurance: typesInsuranceSlice,
        aboutUs: aboutUsSlice,
        news: newsSlice,
        usefulButtons: usefulButtonsSlice,
        footer: footerSlice,
        login: loginSlice,
        registration: registrationSlice,
        user: userSlice,
        cabinet: cabinetSlice,
        loginFailPopup: loginFailPopupSlice,
        successPopup: successPopupSlice,
        loader: loaderSlice,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false,
    }),
})

export default store;