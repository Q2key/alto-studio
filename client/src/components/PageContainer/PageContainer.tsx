import React, { FC } from "react";
import { Card } from "../Card/Card";
import css from './PageContainer.module.css';

export const PageContainer: FC = ({children}) => (
    <div className={css.container}>
        <Card>
            {children}
        </Card>
    </div>
)