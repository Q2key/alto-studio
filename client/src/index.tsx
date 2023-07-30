import "normalize.css";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MainPage } from "./pages/main/MainPage";
import { AboutPage } from "./pages/about/AboutPage";
import { HomePage } from "./pages/home/HomePage";
import { SubscriptionsPage } from "./pages/subscriptions/SubscriptionsPage";
import { Layout } from "./components/layout/Layout";
import { NavBar } from "./components/NavBar/NavBar";
import { Header } from "./components/layout/Header/Header";
import { Footer } from "./components/layout/Footer/Footer";

ReactDOM.render(
  <BrowserRouter>
    <Layout>
      <Header />
      <NavBar />
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
