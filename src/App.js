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
import Loader from "./components/snippets/loader/Loader";
import MyAlert from "./components/snippets/alert/MyAlert";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Loader />
        <MyAlert />

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
