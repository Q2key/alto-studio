import React, { FC } from "react";
import css from './Card.module.css';

export const Card: FC = ({children}) => (
    <div className={css.card}>
        {children}
    </div>
)