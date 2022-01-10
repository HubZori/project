import {applyMiddleware, combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer"
import dialogReducer from "./dialog-reducer"
/*
import sidebarReducer from "./sidebar-reducer";
*/
import userReducer from "./user-reducer";
import authReducer from "./auth-reducer";
import thunkMiddleware from "redux-thunk"
import {reducer as formReducer} from 'redux-form'
import appReducer from "./app-reducer";


let reducers = combineReducers({

    profilePage: profileReducer,
    dialogsPage: dialogReducer,
/*
    sidebar: sidebarReducer,
*/
    usersPage: userReducer,
    auth: authReducer,
    form: formReducer,
    app: appReducer
});


let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store