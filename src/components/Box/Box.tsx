import {FC, FormEvent, useEffect, useState} from 'react';

import {useAppDispatch, useAppSelector} from '../../hooks';
import {gameActions} from '../../store';
import {Match} from '../Match/Match';

import css from './Box.module.sass';

const {take, aiTake} = gameActions;

type BoxProp = {
    amount: number,
    play: boolean,
    player: number
}

const Box: FC<BoxProp> = ({amount, play, player}) => {
    const {info, game} = useAppSelector(state => state.gameReducer);
    const [perTurn, setPerTurn] = useState(info.matchesPerTurn);
    const [amountM, setAmountM] = useState(amount);
    const [turn, setTurn] = useState(game.turn);
    const [move, setMove] = useState(1);
    const dispatch = useAppDispatch();

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

        if (perTurn > game.all)
            setPerTurn(game.all);
    }, [game.all, game.firstGamer, game.secondGamer, game.turn, info.opponent, perTurn, player, turn]);

    useEffect(() => {
        if (turn && info.opponent === 'computer' && player === 2)
            computerTake();
    }, []);

    const computeComputerMove = (): number => {
        const remainingMatches = game.all - move;
        const computerMatches = game.secondGamer;
        const maxMatchesPerTurn = info.matchesPerTurn;

        if (remainingMatches <= maxMatchesPerTurn) {
            if (remainingMatches % 2 === 0) {
                if (computerMatches % 2 === 0) {
                    return remainingMatches;
                } else {
                    return remainingMatches - 1;
                }
            } else {
                if (computerMatches % 2 === 0) {
                    return remainingMatches - 1;
                } else {
                    return remainingMatches;
                }
            }
        } else {
            if (computerMatches % 2 === 0) {
                if (remainingMatches % 2 === 0) {
                    return maxMatchesPerTurn;
                } else {
                    return maxMatchesPerTurn - 1;
                }
            } else {
                if (remainingMatches % 2 === 0) {
                    return maxMatchesPerTurn - 1;
                } else {
                    return maxMatchesPerTurn;
                }
            }
        }
    };

    function computerTake() {
        const aiMove = computeComputerMove();

        dispatch(aiTake({move: aiMove}));
    }

    const takeMatches = (event: FormEvent<HTMLFormElement>): void => {
        event.preventDefault();

        dispatch(take({player, move}));
        if (player === 1) {
            setAmountM(game.firstGamer);
            if (info.opponent === 'computer' && game.all > 1) {
                computerTake()
            }
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