import React from "react";
import s from './Dialog.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {Redirect} from "react-router-dom";


const Dialogs = (props) => {

    let state = props.dialogsPage;


    let dialogElements = state.dialogs.map(d => <DialogItem name={d.name} key={d.id} id={d.id} />);
    let mesagesElements = state.messages.map(m => <Message message={m.message} key={m.id} />)
    let newTextMessage = state.newTextMessage;



    let addMessage = () => {
       props.addMessageCreator();
    };

    let onMessageChange = (e) => {
       let body= e.target.value;
       props.updateNewMessage(body);
    }

    if (!props.isAuth) return <Redirect to={'/login'} />;

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogElements}
            </div>
            <div className={s.messages}>
               <div>{mesagesElements}</div> 
                <div>
                    <textarea onChange={onMessageChange}
                     placeholder='Enter your message'  value={newTextMessage} />
                </div>
                <div>
                    <button onClick={addMessage} >add message</button>
                </div>
            </div>
        </div>
    )
}
 
export default Dialogs;