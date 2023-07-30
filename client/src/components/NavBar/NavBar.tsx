import React, { FC } from "react";
import { NavLink } from "react-router-dom";
import css from './NavBar.module.css'
import { Card } from "../Card/Card";

export const NavBar: FC = () => (
    <nav className={css.navbar}>
        <Card>
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
                <li>
                    <NavLink to="/subscriptions">Subscriptions</NavLink>
                </li>
            </ul>
        </Card>
    </nav> 
)