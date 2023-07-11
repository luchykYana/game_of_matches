import {FC, useEffect, useState} from 'react';

import {GamePage} from '../GamePage/GamePage';
import {GameSetupForm} from '../../components';
import {useAppDispatch} from '../../hooks';
import {gameActions} from '../../store';

const {clearInfo} = gameActions;

const ParametersPage: FC = () => {
    const [startGame, setStartGame] = useState(false)
    const dispatch = useAppDispatch();

    const start = (flag: boolean) => {
        setStartGame(flag)
    };

    useEffect(() => {
        dispatch(clearInfo());
        setStartGame(false);
    }, []);

    return (
        <div>
            {startGame && <GamePage start={start}/>}
            {!startGame && <GameSetupForm start={start}/>}
        </div>
    );
};

export {ParametersPage};