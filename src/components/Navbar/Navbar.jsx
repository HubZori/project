/* eslint-disable jsx-a11y/anchor-is-valid */

import React from 'react'
import s from'./Navbar.module.css'
import { NavLink } from 'react-router-dom'

const Nav = () => {
    return <nav className={s.nav}>
     
     <div className={s.item}>
       <NavLink to="/Profile" activeClassName={s.activeLink}><span>Profile</span></NavLink>
       </div>
     <div className={s.item}>
       <NavLink to="/Dialogs" activeClassName={s.activeLink}><span>Messeges</span></NavLink>
       </div><div className={s.item}>
       <NavLink to="/Users" activeClassName={s.activeLink}><span>Users</span> </NavLink>
       </div>
     <div className={s.item}>
       <NavLink to="/News" activeClassName={s.activeLink}><span>News</span></NavLink>
       </div>
     <div className={s.item}>
       <NavLink to='Music' activeClassName={s.activeLink}><span>Music</span></NavLink>
       </div>
     <div className={s.item}>
       <NavLink to='Setting' activeClassName={s.activeLink}><span>Setting</span></NavLink>
       </div>
     <div className={s.item}>
       <NavLink to='Friends' activeClassName={s.activeLink}><span>Friends</span></NavLink>
       </div>
       
   </nav>

}

export default Nav ;