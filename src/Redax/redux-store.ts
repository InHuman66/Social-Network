import {applyMiddleware, combineReducers, createStore} from "redux";
import profileReducer from "./profileReducer";
import dialogReducer from "./dialogReducer";
import usersReducer from "./usersReducer";
import authReducer from "./auth-reducer";
import thunkMiddleware  from "redux-thunk"
export type ReduxStateType = ReturnType<typeof reducersBatch>

let  reducersBatch = combineReducers({
    profilePage: profileReducer,
    dialogPage: dialogReducer,
    usersPage: usersReducer,
    auth: authReducer,
});


let store = createStore(reducersBatch, applyMiddleware(thunkMiddleware));
export type reduxStoreType = typeof store

let state = store.getState()
// export type reduxStateType = typeof state;

let dispatch = store.dispatch
export  type reduxDispatchType = typeof  dispatch;


export default store;