import "normalize.css";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MainPage } from "./pages/main/MainPage";
import { AboutPage } from "./pages/about/AboutPage";

import { SubscriptionsPage } from "./pages/subscriptions/SubscriptionsPage";
import { Layout } from "./components/layout/Layout";
import { NavBar } from "./components/NavBar/NavBar";
import { Header } from "./components/layout/Header/Header";
import { Footer } from "./components/layout/Footer/Footer";
import { FinancesPage } from "./pages/finances/SubscriptionsPage";
import { UsersPage } from "./pages/users/UsersPage";
import { PublicationsPage } from "./pages/publications/PublicationsPage";
import { ResourcesPage } from "./pages/resources/ResourcesPage";

ReactDOM.render(
  <BrowserRouter>
    <Layout>
      <Header />
      <NavBar />
      <Footer />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/subscriptions" element={<SubscriptionsPage />} />
        <Route path="/publications" element={<PublicationsPage />} />
        <Route path="/resources" element={<ResourcesPage />} />
        <Route path="/finances" element={<FinancesPage />} />
        <Route path="/users" element={<UsersPage />} />
      </Routes>
    </Layout>
  </BrowserRouter>,
  document.getElementById("root")
);
