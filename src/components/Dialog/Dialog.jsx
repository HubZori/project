import React from "react";
import s from './Dialog.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {Redirect} from "react-router-dom";
import {Field, reduxForm} from "redux-form";
import {maxLenghtCreator, required} from "../../utilits/validators/validators";
import {Textarea} from "../common/FormsControl/FormsControls";


const maxLengyt10 = maxLenghtCreator(10);

const Dialogs = (props) => {

    let state = props.dialogsPage;


    let dialogElements = state.dialogs.map(d => <DialogItem name={d.name} key={d.id} id={d.id} />);
    let mesagesElements = state.messages.map(m => <Message message={m.message} key={m.id} />)
/*
    let newTextMessage = state.newTextMessage;
*/



    let addNewMessage = (value) => {
        props.addMessageCreator(value.newTextMessage);
    };


    if (!props.isAuth) return <Redirect to={'/login'} />;

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogElements}
            </div>
            <div className={s.messages}>
               <div>{mesagesElements}</div>
            </div>
            <AddMessageFormRedux onSubmit={addNewMessage} />
        </div>
    )
}

const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
        <div>
            <Field component={Textarea} name="newTextMessage" placeholder="Enter your message"
                   validate={[required, maxLengyt10]}
            />
        </div>
        <div>
            <button>add message</button>
        </div>
    </form>
    )
}

const AddMessageFormRedux = reduxForm({form:"dialogAddMessageForm"})(AddMessageForm);

export default Dialogs;