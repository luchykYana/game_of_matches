import {FC} from 'react';

import css from './RulesPage.module.sass'

const RulesPage: FC = () => {
    return (
        <div className={css.rules}>
            Congratulations, player!<br/><br/>
            Welcome to a game where you will be immersed in an exciting world of strategy and logic. Come to exciting
            moments when you will compete in an intellectual battle with your opponent.<br/><br/>
            This game requires you to pay attention, calculate and make quick decisions. You will choose the number of
            matches you take each turn, with the goal of reaching an even number of matches at the end of the game. Can
            you calculate the right strategy to win?<br/><br/>
            Let each move be a challenge for you that requires logical thinking and strategic planning. Don't forget
            about your opponent's moves, as this can affect your decisions. Carefully analyze your failures and choose
            the best approach that will lead you to victory.<br/><br/>
            Let your mental abilities shine brighter than ever! By playing this game, you have fun and develop your
            strategic and analytical skills.<br/><br/>
            Remember that victory belongs to those who can see far and make wise decisions. Get ready for an adventure
            where your intelligence will be your strongest weapon.<br/><br/>
            Good luck in the game! Get ready to enter the battlefield and become a true strategist!
        </div>
    );
};

export {RulesPage};