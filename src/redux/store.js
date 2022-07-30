import { configureStore } from "@reduxjs/toolkit";
import cabinetSlice from "./slices/cabinet-slice";
import footerSlice from "./slices/footer-slice";
import headerSlice from "./slices/header-slice";
import loaderSlice from "./slices/loader-slice";
import loginSlice from "./slices/login-slice";
import registrationSlice from "./slices/registration-slice";
import userSlice from "./slices/user-slice";
import myAlertSlice from "./slices/myAlert-slice";
import homeSlice from "./slices/home-slice";

let store = configureStore({
    reducer: {
        header: headerSlice,
        footer: footerSlice,
        login: loginSlice,
        registration: registrationSlice,
        user: userSlice,
        cabinet: cabinetSlice,
        loader: loaderSlice,
        myAlert: myAlertSlice,
        home: homeSlice,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false,
    }),
})

export default store;