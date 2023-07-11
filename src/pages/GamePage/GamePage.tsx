import {FC, useEffect, useState} from 'react';

import {Box, Popup} from '../../components';
import {useAppSelector} from '../../hooks';

import css from './GamePage.module.sass';

type GamePageProp = {
    start: (flag: boolean) => void
}

const GamePage: FC<GamePageProp> = ({start}) => {
    const {info, game} = useAppSelector(state => state.gameReducer);
    const [popup, setPopup] = useState(false);
    const [gamerOne] = useState(game.firstGamer);
    const [gamerTwo] = useState(game.secondGamer);
    const [all] = useState(game.all);

    useEffect(() => {
        if (game.all <= 0)
            setPopup(true);
    }, [game.all])

    return (
        <div className={css.gamePage}>
            {!popup && <div className={css.game}>
                <Box amount={gamerOne} play={true} player={1}/>
                <Box amount={all} play={false} player={0}/>
                <Box amount={gamerTwo} play={info.opponent !== 'computer'} player={2}/>
            </div>}

            {popup && <Popup start={start}/>}
        </div>
    );
};

export {GamePage};