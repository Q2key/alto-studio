import React, {FC} from 'react';
import css from './VideoStack.module.css';

export const VideoStack: FC = ({children}) => {
    return (
        <div className={css['video-stack']}>
            {children}
        </div>
    )
}