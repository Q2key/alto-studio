import React, { FC } from "react";
import { NavLink } from "react-router-dom";
import { Card } from "../Card/Card";
import css from "./NavBar.module.css";
import { NavBarItem } from "./NavBarItem";

export const NavBar: FC = () => (
  <nav className={css.navbar}>
    <Card>
      <div className={css.list}>
        <NavLink to="/">
          {({ isActive, isPending }) => (
            <NavBarItem isActive={isActive} title="Главная" />
          )}
        </NavLink>
        {/* <NavLink to="/about">
          {({ isActive, isPending }) => (
            <NavBarItem isActive={isActive} title="Обо мне" />
          )}
        </NavLink> */}
        <NavLink to="/publications">
          {({ isActive, isPending }) => (
            <NavBarItem isActive={isActive} title="Контент" />
          )}
        </NavLink>
        <NavLink to="/users">
          {({ isActive, isPending }) => (
            <NavBarItem isActive={isActive} title="Пользователи" />
          )}
        </NavLink>
        <NavLink to="/finances">
          {({ isActive, isPending }) => (
            <NavBarItem isActive={isActive} title="Финансы" />
          )}
        </NavLink>
        <NavLink to="/subscriptions">
          {({ isActive, isPending }) => (
            <NavBarItem isActive={isActive} title="Подписки и тарифы" />
          )}
        </NavLink>
        <NavLink to="/resources">
          {({ isActive, isPending }) => (
            <NavBarItem isActive={isActive} title="Ресурсы" />
          )}
        </NavLink>
      </div>
    </Card>
  </nav>
);
