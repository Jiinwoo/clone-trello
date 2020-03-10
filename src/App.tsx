import React from 'react';
import {Route, Switch} from 'react-router-dom'
import KakaoSignupFormContainer from "./containers/KakaoSignupFormContainer";
import BoardContainer from "./containers/BoardContainer";
import LoginContainer from "./containers/LoginContainer";
import Layout from "./components/Layout/Layout";
import SignupFormContainer from "./containers/SignupFormContainer";


function App() {
    return (
        <div className="App">
            <Switch>
                <Route path={'/social/login/kakao'}>
                    <KakaoSignupFormContainer/>
                </Route>
                <Route path={'/login'}>
                    <LoginContainer/>
                </Route>
                <Route path={'/signup'}>
                    <SignupFormContainer/>
                </Route>
                <Layout>
                    <Route path={'/'}>
                        <BoardContainer/>
                    </Route>
                </Layout>
            </Switch>
        </div>
    );
}

export default App;
