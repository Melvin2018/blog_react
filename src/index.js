import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import getStore, { history } from './store/index'
import { ThemeProvider } from '@material-ui/styles';
import theme from './theme'
import './App.css'
const store = getStore()
ReactDOM.render(
    <Provider store={store}>
        <ThemeProvider theme={theme}>
            <App history={history} />
        </ThemeProvider>
    </Provider>,
    document.getElementById('root')
);