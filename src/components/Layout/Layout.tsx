import {Outlet} from 'react-router-dom';

import {Header} from '../Header/Header';
import {Footer} from '../Footer/Footer';

import css from './Layout.module.sass';

const Layout = () => {
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