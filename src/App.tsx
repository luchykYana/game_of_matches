import {Route, Routes} from 'react-router-dom';

import {GamePage, HomePage, NotFoundPage, ParametersPage, RulesPage} from './pages';
import {Layout} from './components';

const App = () => {
    return (
        <Routes>
            <Route path={'/'} element={<Layout/>}>
                <Route index element={<HomePage/>}/>

                <Route path={'parameters'} element={<ParametersPage/>}>
                    <Route path={'game'} element={<GamePage/>}/>
                </Route>

                <Route path={'rules'} element={<RulesPage/>}/>

                <Route path={'*'} element={<NotFoundPage/>}/>
            </Route>
        </Routes>
    );
};

export {App};
