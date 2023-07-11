import {useNavigate} from 'react-router-dom';
import {FC} from 'react';

import {Button} from '../../components';

import css from './HomePage.module.sass';

const HomePage: FC = () => {
    const navigate = useNavigate();

    return (
        <div className={css.home}>
            <h1 className={css.title}>
                Game of Matches
            </h1>
            <Button text={'Go Go Go!'} click={() => navigate('parameters')}/>
        </div>
    );
};

export {HomePage};