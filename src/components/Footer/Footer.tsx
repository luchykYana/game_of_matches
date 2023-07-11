import {FC} from 'react';

import css from './Footer.module.sass';

const Footer: FC = () => {
    return (
        <div className={css.footer}>
            Stormotion | Internship JS Test Task | Yana Luchyk
        </div>
    );
};

export {Footer};