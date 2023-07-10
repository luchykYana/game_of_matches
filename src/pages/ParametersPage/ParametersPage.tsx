import {useState} from 'react';

import {GamePage} from '../GamePage/GamePage';
import {GameSetupForm} from '../../components';

const ParametersPage = () => {
    const [startGame, setStartGame] = useState(false)

    const start = (flag : boolean) => setStartGame(flag);

    return (
        <div>
            {startGame && <GamePage/>}
            {!startGame && <GameSetupForm start={start}/>}
        </div>
    );
};

export {ParametersPage};