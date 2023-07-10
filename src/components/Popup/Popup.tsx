import {FC, useEffect, useState} from 'react';

import {useAppSelector} from '../../hooks';

import css from './Popup.module.sass';

const Popup: FC = () => {
    const {game} = useAppSelector(state => state.gameReducer);
    const [winner, setWinner] = useState('Player');

    useEffect(() => {
        game.firstGamer % 2 === 0 ? setWinner('Player 1') : setWinner('Player 2');
    }, [game.firstGamer, game.secondGamer]);

    return (
        <div className={css.popup}>
            <h1 className={css.title}>The winner is {winner}!</h1>
            <h2 className={css.score}>Score</h2>
            <h2 className={css.score}>{game.firstGamer} --- {game.secondGamer}</h2>
        </div>
    );
};

export {Popup};