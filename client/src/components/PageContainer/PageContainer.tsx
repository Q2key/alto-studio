import React, {FC} from "react";
import css from './PageContainer.module.css';
import { Card } from "../Card/Card";

export const PageContainer: FC = ({children}) => (
    <div className={css.container}>
        <Card>
            {children}
        </Card>
    </div>
)