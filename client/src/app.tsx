import 'normalize.css';
import React from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter, Link, Route, Routes, NavLink, Outlet 
} from "react-router-dom";

import { MainPage } from "./pages/main/MainPage";
import { AboutPage } from './pages/about/AboutPage';
import { HomePage } from './pages/home/HomePage';

const NavBar: React.FC = () => {
  return (
    <ul>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/home">HomePage</NavLink>
      </li>
      <li>
        <NavLink to="/about">AboutPage</NavLink>
      </li>
    </ul>
  )
}

ReactDOM.render(
  <BrowserRouter>
    <NavBar/>
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />

    </Routes>

  </BrowserRouter>,
  document.getElementById("root")
);