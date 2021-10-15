import { combineReducers, createStore } from "redux";
import profileReducer from "./profile-reducer"
import dialogReducer from "./dialog-reducer"
import userReducer from "./user-reducer";
import authReducer from "./auth-reducer";


let reducers = combineReducers({

    profilePage:profileReducer,
    dialogsPage:dialogReducer,
    usersPage:userReducer,
    auth:authReducer
});




let store = createStore (reducers);

window.store = store;

export default store