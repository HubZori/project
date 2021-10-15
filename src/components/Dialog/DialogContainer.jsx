import React from "react";
import { addMessageCreator, updateNewMessageTextCreator }
   from "../../redux/dialog-reducer";
import Dialogs from "./Dialog";
import { connect } from "react-redux";




let mapStateToProps = (state) => {
   return {
      dialogsPage: state.dialogsPage
   }

};

let mapDispatchToProps = (dispatch) => {
   return {
      updateNewMessage: (body)=> {
         dispatch(updateNewMessageTextCreator(body));
      },
      addMessageCreator: ()=> {
         dispatch(addMessageCreator());
   }
      }
   };



const DialogContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogContainer;