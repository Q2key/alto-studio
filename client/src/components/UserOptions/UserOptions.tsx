import React, { FC } from 'react';
import css from './UserOptions.module.css';
import enot from '../../assets/u.png';

export type UserOptionProps = {
    userName: string;
    imgSrc: string;
}

export const UserOptions: FC<UserOptionProps> = ({userName, imgSrc}) => (
    <div className={css.wrapper}>
        <div className={css.container}>
            <div>{userName}</div>
            <img className={css.avatar} src={enot}></img>
        </div>
    </div>
)