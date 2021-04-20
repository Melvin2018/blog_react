import React, { Suspense } from "react";
import { Grow } from "@material-ui/core";
import Loading from '../Loading'
import routes from '../../routes/index'
import { Switch, Redirect, Route } from "react-router-dom";

const Content = () => {
    return (
        <>
            <Suspense fallback={<Loading />}>
                <Switch>
                    {routes.map((route, index) => {
                        return route.component && (
                            <Route
                                key={index}
                                path={route.path}
                                exact={route.exact}
                                name={route.name}
                                render={props => (
                                    <Grow>
                                        <route.component {...props} />
                                    </Grow>
                                )} />
                        )
                    })}
                    <Redirect from="/" to="/blog" />
                </Switch>
            </Suspense>
        </>
    )
}

export default Content;