import React from "react";
import {addMessageCreator, updateNewMessageTextCreator} from "../../redux/dialog-reducer";
import Dialogs from "./Dialog";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";


let mapStateToPropsForRedirect = (state) => {
    return {
        isAuth: state.auth.isAuth
    }
};

let AuthRedirectComponent = withAuthRedirect(Dialogs);
AuthRedirectComponent = connect(mapStateToPropsForRedirect)(AuthRedirectComponent);

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


const DialogContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent);

export default DialogContainer;