import React, {FC} from 'react';
import css from './VideoCard.module.css';

export const VideoCard: FC = ({children}) => {
    return (
        <div className={css['v-card']}>
            {children}
        </div>
    )
}