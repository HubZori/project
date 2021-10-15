import React from "react";
import s from './../Dialog.module.css'


const Message = (props) => {
    
    return(
    <div className={s.dialogs}>{props.message}</div> 
           )
}

export default Message;