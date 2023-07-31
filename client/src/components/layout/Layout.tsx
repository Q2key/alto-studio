import React from "react";
import css from './Layout.module.css';
import "../../assets/colors.css";

export const Layout: React.FC = ({children}) => (
    <div className={`theme-light ${css.wrapper}`}>
        {children}
    </div>
)