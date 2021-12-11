/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-unused-vars */
import React from 'react'
import s from './Header.module.css'
import {NavLink} from "react-router-dom";

const Header = (props) => {

    return <header className={s.header}>
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwS70r6aZEg6-wofSf66x7MU7FiZSEFSOIQA&usqp=CAU"/>
   <div className={s.loginBlock}>
        {props.isAuth ? props.login
            : <NavLink to={'/login'}>Login</NavLink> }

    </div>

</header>

}

export default Header ;