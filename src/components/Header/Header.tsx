import {NavLink} from 'react-router-dom';
import {FC} from 'react';

import css from './Header.module.sass';

const Header: FC = () => {
    return (
        <div className={css.header}>
            <NavLink to={'/'}>Main</NavLink>
            <NavLink to={'/parameters'}>Game</NavLink>
            <NavLink to={'/rules'}>Rules</NavLink>
        </div>
    );
};

export {Header};