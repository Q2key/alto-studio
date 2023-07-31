import React, { FC } from "react";
import css from './PageHeader.module.css';

export const PageHeader: FC = ({children}) => (
        <h1 className={css.header}>
            <div>
                {children}
            </div>
        </h1>
)