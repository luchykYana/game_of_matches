import {createSlice} from '@reduxjs/toolkit';

interface IState {
    info: {
        start: string;
        allMatches: number;
        matchesPerTurn: number;
        opponent: string;
    },
    game: {
        all: number,
        firstGamer: number,
        secondGamer: number,
        turn: boolean
    }
}

const initialState: IState = {
    info: {
        start: 'player 1',
        allMatches: 0,
        matchesPerTurn: 1,
        opponent: 'computer'
    },
    game: {
        all: -1,
        firstGamer: 0,
        secondGamer: 0,
        turn: false
    }
}

const gameSlice = createSlice({
    name: 'gameSlice',
    initialState,
    reducers: {
        setParametersForGame: (state, action): void => {
            state.info = {...action.payload};
            state.game.all = action.payload.allMatches;

            action.payload.start === 'player 2' ? state.game.turn = true : state.game.turn = false;
        },

        take: (state, action): void => {
            if (action.payload.player === 1) {
                state.game.firstGamer += action.payload.move
            } else {
                state.game.secondGamer += action.payload.move
            }

            state.game.all -= action.payload.move;
            state.game.turn = !state.game.turn;
        },

        aiTake: (state, action): void => {
            state.game.secondGamer += action.payload.move;
            state.game.all -= action.payload.move;
            state.game.turn = !state.game.turn;
        },

        clearInfo: (state): void => {
            state.game.all = -1;
            state.game.firstGamer = 0;
            state.game.secondGamer = 0;
            state.game.turn = false;
        }
    },
});

const gameReducer = gameSlice.reducer;
const {setParametersForGame, take, aiTake, clearInfo} = gameSlice.actions;

export default gameReducer;

export const gameActions = {
    setParametersForGame, take, aiTake, clearInfo
};