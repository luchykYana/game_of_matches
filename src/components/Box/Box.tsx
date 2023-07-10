import {FC, FormEvent, useEffect, useState} from 'react';

import {useAppDispatch, useAppSelector} from '../../hooks';
import {gameActions} from '../../store';
import {Match} from '../Match/Match';

import css from './Box.module.sass';

const {take} = gameActions;

type BoxProp = {
    amount: number,
    play: boolean,
    player: number
}

const Box: FC<BoxProp> = ({amount, play, player}) => {
    const {info, game} = useAppSelector(state => state.gameReducer);
    const dispatch = useAppDispatch();
    const [move, setMove] = useState(1);
    const [amountM, setAmountM] = useState(amount);
    const [perTurn, setPerTurn] = useState(info.matchesPerTurn);
    const [turn, setTurn] = useState(game.turn);
    const [all, setAll] = useState(game.all);
    const [gamer, setGamer] = useState(play);

    useEffect(() => {
        switch (player) {
            case 0:
                setAmountM(game.all);
                break;
            case 1:
                setAmountM(game.firstGamer);
                game.turn ? setTurn(true) : setTurn(false);
                break;
            case 2:
                setAmountM(game.secondGamer);
                !game.turn ? setTurn(true) : setTurn(false);
                break;
            default:
                console.error('something wrong')
                break;
        }

        if (perTurn > game.all) {
            setPerTurn(game.all);
        }
    }, [game.all, game.firstGamer, game.secondGamer, game.turn, perTurn, player])

    const takeMatches = (event: FormEvent<HTMLFormElement>): void => {
        event.preventDefault();

        dispatch(take({player, move}));
        if (player === 1) {
            setAmountM(game.firstGamer);
        } else {
            setAmountM(game.secondGamer);
        }
    }

    return (
        <div className={css.box}>
            <div className={css.box__matches}>
                {Array.from({length: amountM}, (_, index) => <Match key={index}/>)}
            </div>
            <div className={css.box__cover}>&#x1F525;</div>
            <div className={css.box__amount}>{amountM}</div>

            {play && <div>
                <form className={css.box__form} onSubmit={takeMatches}>
                    <label> Number of matches:
                        <input type="number" value={move} min={1} step={1} max={perTurn}
                               onChange={(e) => setMove(parseInt(e.target.value))}
                        />
                    </label>
                    <button disabled={turn}>Take</button>
                </form>

                {!turn && <div className={css.box__turn}>
                    ↑ player's turn ↑
                </div>}
            </div>}
        </div>
    );
};

export {Box};