import React from 'react';
import './index.css';
import * as serviceWorker from './serviceWorker';
import store from "./Redax/redux-store";
import ReactDOM from "react-dom";
import App from "./App";
import {Provider} from "react-redux";




let rerenderEntireTree =()=> {
    ReactDOM.render(
        <React.StrictMode>
            <Provider store={store}>
                <App state={store.getState()} store={store} dispatch={store.dispatch.bind(store)}/>
            </Provider>
        </React.StrictMode>,
        document.getElementById('root')
    );
};
rerenderEntireTree();
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
