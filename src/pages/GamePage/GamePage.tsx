import {FC, useEffect, useState} from 'react';

import {Box, Popup} from '../../components';

import css from './GamePage.module.sass';
import {useAppSelector} from '../../hooks';

const GamePage: FC = () => {
    const {info, game} = useAppSelector(state => state.gameReducer);
    const [gamerOne, setGamerOne] = useState(game.firstGamer);
    const [gamerTwo, setGamerTwo] = useState(game.secondGamer);
    const [all, setAll] = useState(game.all);
    const [popup, setPopup] = useState(false);

    useEffect(() => {
        if (game.all <= 0) {
            setPopup(true);
        }
    }, [game.all])

    return (
        <div className={css.gamePage}>
            {!popup && <div className={css.game}>
                <div>
                    <Box amount={gamerOne} play={true} player={1}/>
                </div>
                <div>
                    <Box amount={all} play={false} player={0}/>
                </div>
                <div>
                    <Box amount={gamerTwo} play={info.opponent !== 'computer'} player={2}/>
                </div>
            </div>}

            {popup && <Popup/>}
        </div>
    );
};

export {GamePage};