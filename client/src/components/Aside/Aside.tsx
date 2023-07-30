import React, {FC} from "react";
import css from './Aside.module.css';
import { Card } from "../Card/Card";

export const Aside: FC = ({children}) => (
    <aside className={css.aside}>
        <Card>
            Additional info
        </Card>
    </aside>
)