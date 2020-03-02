import React from 'react';
import {Route, Switch} from 'react-router-dom'
import Header from "./components/Header";
import RedirectContainer from "./containers/RedirectContainer";
import BoardContainer from "./containers/BoardContainer";
import LoginContainer from "./containers/LoginContainer";


function App() {
    return (
        <div className="App">
            <Header/>
            <Switch>

                <Route path={'/social/login/kakao'}>
                    <RedirectContainer/>
                </Route>
                <Route path={'/login'}>
                    <LoginContainer/>
                </Route>
                <Route path={'/'}>
                    <BoardContainer/>
                </Route>
            </Switch>
        </div>
    );
}

export default App;
