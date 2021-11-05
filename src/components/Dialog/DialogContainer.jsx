import React from "react";
import {addMessageCreator, updateNewMessageTextCreator} from "../../redux/dialog-reducer";
import Dialogs from "./Dialog";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";


let mapStateToPropsForRedirect = (state) => {
    return {
        isAuth: state.auth.isAuth
    }
};


let mapDispatchToProps = (dispatch) => {
    return {
        updateNewMessage: (body) => {
            dispatch(updateNewMessageTextCreator(body));
        },
        addMessageCreator: () => {
            dispatch(addMessageCreator());
        }
    }
};

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,

    }
};


export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs);