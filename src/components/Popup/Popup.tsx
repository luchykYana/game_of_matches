import {FC, useEffect, useState} from 'react';

import {useAppDispatch, useAppSelector} from '../../hooks';
import {Button} from '../Button/Button';
import {gameActions} from '../../store';

import css from './Popup.module.sass';

const {clearInfo} = gameActions;

type PopupProp = {
    start: (flag: boolean) => void
}

const Popup: FC<PopupProp> = ({start}) => {
    const {game} = useAppSelector(state => state.gameReducer);
    const [winner, setWinner] = useState('Player');
    const dispatch = useAppDispatch();

    useEffect(() => {
        game.firstGamer % 2 === 0 ? setWinner('Player 1') : setWinner('Player 2');
    }, [game.firstGamer, game.secondGamer]);

    return (
        <div className={css.popup}>
            <h1 className={css.title}>The winner is {winner}!</h1>
            <div className={css.score}>Score</div>
            <div className={css.score}>{game.firstGamer} --- {game.secondGamer}</div>
            <Button text={'Play again'} click={() => {
                start(false);
                dispatch(clearInfo());
            }}/>
        </div>
    );
};

export {Popup};