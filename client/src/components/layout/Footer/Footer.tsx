import React, { FC } from "react";
import css from './Footer.module.css';
import { Card } from "../../Card/Card";

export const Footer: FC = () => (
    <footer className={css.footer}>
        <Card>About us</Card>
    </footer>
);