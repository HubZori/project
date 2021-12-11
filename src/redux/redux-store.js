import {applyMiddleware, combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer"
import dialogReducer from "./dialog-reducer"
import userReducer from "./user-reducer";
import authReducer from "./auth-reducer";
import thunkMiddleware from "redux-thunk"
import {reducer as formReducer} from 'redux-form'


let reducers = combineReducers({

    profilePage: profileReducer,
    dialogsPage: dialogReducer,
    usersPage: userReducer,
    auth: authReducer,
    form: formReducer
});


let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store