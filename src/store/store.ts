import {combineReducers, configureStore} from '@reduxjs/toolkit';

import gameReducer from './game.slice';

const rootReducer = combineReducers({
    gameReducer
});

const setupStore = () => configureStore({
    reducer: rootReducer
});

type RootState = ReturnType<typeof rootReducer>
type AppStore = ReturnType<typeof setupStore>
type AppDispatch = AppStore['dispatch']

export type {
    RootState, AppStore, AppDispatch
}

export {setupStore};