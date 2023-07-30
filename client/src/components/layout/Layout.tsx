import React from "react";
import css from './Layout.module.css';

export const Layout: React.FC = ({children}) => (
    <div className={css.wrapper}>
        {children}
    </div>
)