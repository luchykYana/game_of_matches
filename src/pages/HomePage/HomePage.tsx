import {Button} from '../../components';
import {useNavigate} from 'react-router-dom';

import css from './HomePage.module.sass';

const HomePage = () => {
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