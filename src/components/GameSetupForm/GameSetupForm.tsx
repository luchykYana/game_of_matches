import {FC, FormEvent, useState} from 'react';
import {useNavigate} from 'react-router-dom';

import {Button} from '../Button/Button';
import {gameActions} from '../../store'

import css from './GameSetupForm.module.sass';
import {useAppDispatch} from '../../hooks';

const {setParametersForGame} = gameActions;

type FormProp = {
    start: (flag: boolean) => void
}

const GameSetupForm: FC<FormProp> = ({start}) => {
    const [firstPlayer, setFirstPlayer] = useState('player 1');
    const [n, setN] = useState(12);
    const [m, setM] = useState(3);
    const [opponent, setOpponent] = useState('computer');
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    const handleStartGame = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const info = {
            start: firstPlayer,
            allMatches: 2 * n + 1,
            matchesPerTurn: m,
            opponent: opponent
        };

        dispatch(setParametersForGame(info));
        start(true);
    };

    return (
        <form onSubmit={handleStartGame} className={css.form}>
            <div className={css.form__input}>
                <label> Who starts first:
                    <select value={firstPlayer} onChange={(e) => setFirstPlayer(e.target.value)}>
                        <option value={'player 1'}>Player 1</option>
                        <option value={'player 2'}>Player 2</option>
                    </select>
                </label>
            </div>
            <div className={css.form__input}>
                <label> Number of matches: 2 *
                    <input type="number" value={n} min={2} step={1} max={99}
                           onChange={(e) => setN(parseInt(e.target.value))}
                    /> + 1 = {2 * n + 1}
                </label>
            </div>
            <div className={css.form__input}>
                <label> Matches per Turn: 1 to
                    <input type="number" value={m} min={1} step={1} max={n}
                           onChange={(e) => setM(parseInt(e.target.value))}
                    />
                </label>
            </div>
            <div className={css.form__input}>
                <label>
                    Play against:
                    <select value={opponent} onChange={(e) => setOpponent(e.target.value)}>
                        <option value="computer">Computer</option>
                        <option value="friend">Friend</option>
                    </select>
                </label>
            </div>

            <Button text={'Start Game!'} click={() => navigate('/parameters/game')}/>
        </form>
    );
};

export {GameSetupForm};