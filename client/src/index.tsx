import "normalize.css";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MainPage } from "./pages/main/MainPage";
import { AboutPage } from "./pages/about/AboutPage";
import { HomePage } from "./pages/home/HomePage";
import { SubscriptionsPage } from "./pages/subscriptions/SubscriptionsPage";
import { Layout } from "./layout/Layout";
import { NavBar } from "./components/NavBar/NavBar";
import { Header } from "./components/Header/Header";
import { Aside } from "./components/Aside/Aside";
import { Footer } from "./components/Footer/Footer";

ReactDOM.render(
  <BrowserRouter>
    <Layout>
      <Header />
      <NavBar />
      {/* <Aside /> */}
      <Footer />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/subscriptions" element={<SubscriptionsPage />} />
      </Routes>
    </Layout>
  </BrowserRouter>,
  document.getElementById("root")
);
