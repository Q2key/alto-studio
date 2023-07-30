import React, { FC } from 'react';
import { Card } from '../../Card/Card';
import css from './Header.module.css';
import { UserOptionProps, UserOptions } from '../../UserOptions/UserOptions';

const mockAdminProps:UserOptionProps = {
    userName: 'Alisa Totskaya',
    imgSrc: '/assets/u.jpg'
}

export const Header: FC = () => (
    <header className={css.header}>
        <Card>
            <UserOptions {...mockAdminProps} />
        </Card>
    </header>
)