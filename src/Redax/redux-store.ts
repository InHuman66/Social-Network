import {combineReducers, createStore} from "redux";
import profileReducer from "./profileReducer";
import dialogReducer from "./dialogReducer";
export type ReduxStateType = ReturnType<typeof reducersBatch>

let  reducersBatch = combineReducers({
    profilePage: profileReducer,
    dialogPage: dialogReducer,
});

let store = createStore(reducersBatch);
export type reduxStoreType = typeof store

let state = store.getState()
export type reduxStateType = typeof state;

let dispatch = store.dispatch
export  type reduxDispatchType = typeof  dispatch;


export default store;