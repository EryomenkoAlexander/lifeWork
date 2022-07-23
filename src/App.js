import "./App.css";
import Header from "./components/header/header-assembly/Header";
import React from "react";
import Footer from "./components/footer/footer-assembly/Footer";
import Home from "./components/main/Home";
import { Route, Routes } from "react-router";
import Login from "./components/login/login-assembly/Login";
import Registration from "./components/registration/registration-assembly/Registration";
import Cabinet from "./components/cabinet/cabinet-assembly/Cabinet";
import NotFound from "./components/not-found/NotFound";
import LoginFailPopup from "./components/snippets/login-fail-popup/LoginFailPopup";
import Loader from "./components/snippets/loader/Loader";
import SuccessPopup from "./components/snippets/success-popup/SuccessPopup";
import FailPopup from "./components/snippets/fail-popup/FailPopup";

function App(props) {
  return (
    <div className="App">
      <Header />
      <main>
        <LoginFailPopup />
        <SuccessPopup />
        <FailPopup />
        <Loader />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="registration" element={<Registration />} />
          <Route path="cabinet/*" element={<Cabinet />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
