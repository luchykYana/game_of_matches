import {Outlet} from 'react-router-dom';
import {FC} from 'react';

import {Header} from '../Header/Header';
import {Footer} from '../Footer/Footer';

import css from './Layout.module.sass';

const Layout: FC = () => {
    return (
        <div>
            <Header/>

            <div className={css.outlet}>
                <Outlet/>
            </div>

            <Footer/>
        </div>
    );
};

export {Layout};