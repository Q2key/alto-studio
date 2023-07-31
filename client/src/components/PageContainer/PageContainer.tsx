import React, { FC } from "react";
import { Card } from "../Card/Card";
import css from './PageContainer.module.css';
import { PageHeader } from "./PageHeader";
import { PageBody } from "./PageBody";

type Props = {
    title: string;
}

export const PageContainer: FC<Props> = ({title, children}) => (
    <div className={css.container}>
        <Card>
            <div>
                <PageHeader>
                    {title}
                </PageHeader>
                <PageBody>
                    {children}
                </PageBody>
            </div>
        </Card>
    </div>
)