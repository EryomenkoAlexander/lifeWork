import "./App.css";
import React from "react";
import Home from "./components/main/home/Home";
import { Route, Routes } from "react-router";
import Login from "./components/login/login-assembly/Login";
import Registration from "./components/registration/registration-assembly/Registration";
import Cabinet from "./components/cabinet/cabinet-assembly/Cabinet";
import NotFound from "./components/not-found/NotFound";
import Loader from "./components/snippets/loader/Loader";
import MyAlert from "./components/snippets/alert/MyAlert";
import Layout from "./components/layout/Layout";

function App() {
  return (
    <div className="App">
      <Loader />
      <MyAlert />

      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="registration" element={<Registration />} />
          <Route path="cabinet/*" element={<Cabinet />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
