import {FormEvent, useState} from 'react';
import {useNavigate} from 'react-router-dom';

import {Button} from '../Button/Button';

import css from './GameSetupForm.module.sass';

type FormProp = {
    start: (flag: boolean) => void
}

const GameSetupForm = ({start}: FormProp) => {
    const [firstPlayer, setFirstPlayer] = useState('user');
    const [n, setN] = useState(12);
    const [m, setM] = useState(3);
    const [opponent, setOpponent] = useState('computer');
    const navigate = useNavigate();

    const handleStartGame = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        // Додайте обробку старту гри з вибраними параметрами
        console.log('Start game with the following settings:');
        console.log('First Player:', firstPlayer);
        console.log('All:', 2 * n + 1);
        console.log('Per:', m);
        console.log('Opponent:', opponent);
        start(true)
    };

    return (
        <form onSubmit={handleStartGame} className={css.form}>
            <div className={css.form__input}>
                <label> Who starts first:
                    <select value={firstPlayer} onChange={(e) => setFirstPlayer(e.target.value)}>
                        <option value="user">User (me)</option>
                        <option value="opponent">Opponent</option>
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