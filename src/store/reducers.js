import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import header from './reducers/header'
import blog from './reducers/blog'
import user from './reducers/user'
import auth from './reducers/auth'
export const getReducers = (history) => {
    const reducers = combineReducers({ header, blog, user, auth, router: connectRouter(history) })
    return reducers;
}

export default getReducers;