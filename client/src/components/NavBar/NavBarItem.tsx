import React, { FC } from "react";
import css from './NavBarItem.module.css';

type Props = {
    isActive: boolean;
    title: string;
}

export const NavBarItem: FC<Props> = ({isActive, title}) => {
    const className = `${css.item} ${isActive ? css.active : ''}`
    return (
        <span className={className}>{title}</span>
    )
};