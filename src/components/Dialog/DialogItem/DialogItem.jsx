import React from "react";
import s from './../Dialog.module.css'
import { NavLink } from "react-router-dom";



const DialogItem = (props) => {

    let path = '/dialogs/' + props.id;

    return <div className={s.dialog + ' ' + s.active}>
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSo7S86HLw3FSPP3Iflpfq1OkfEfkB8zdRGpw&usqp=CAU' />
        <NavLink to={path}>{props.name}</NavLink>
    </div>
}


export default DialogItem;