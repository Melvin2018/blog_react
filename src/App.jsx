import React from 'react';
import Loading from './components/Loading'
import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router'

const App = ({ history }) => {
    const Page = React.lazy(() => import('./components/structure/Page'));
    const Login = React.lazy(() => import('./views/pages/Login'));
    const Page404 = React.lazy(() => import('./views/pages/Page404'));
    const Page500 = React.lazy(() => import('./views/pages/Page500'));
    return (
        <ConnectedRouter history={history}>
            <React.Suspense fallback={<Loading />}>
                <Switch>
                    <Route exact path="/login" name="Login Page" render={props => <Login {...props} />} />
                    <Route exact path="/404" name="Page 404" render={props => <Page404 {...props} />} />
                    <Route exact path="/500" name="Page 500" render={props => <Page500 {...props} />} />
                    <Route path="/" name="Page Initial" render={props => <Page  {...props} />} />
                </Switch>
            </React.Suspense>
        </ConnectedRouter>
    );
}
export default App;