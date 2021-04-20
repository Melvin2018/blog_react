import { createBrowserHistory } from 'history'
import { applyMiddleware, compose, createStore } from 'redux'
import { routerMiddleware } from 'connected-react-router'
import thunk from 'redux-thunk'
import { getReducers } from './reducers'

export const history = createBrowserHistory({ basename: "/melvin/" })

export default function configureStore() {
    const store = createStore(
        getReducers(history),
        compose(
            applyMiddleware(
                routerMiddleware(history),
                thunk,
            ),
        ),
    )

    return store
}