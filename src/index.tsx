import {BrowserRouter} from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import {Provider} from 'react-redux';
import React from 'react';

import {setupStore} from './store';
import {App} from './App';

import './styles/index.sass';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

const store = setupStore();

root.render(
    <Provider store={store}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>
);
