import React, { FC } from "react";
import css from './PageBody.module.css';

export const PageBody: FC = ({children}) => (
        <div className={css.body}>
            <div>
                {children}
            </div>
        </div>
)