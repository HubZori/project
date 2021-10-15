/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */

import React from 'react'
import s from './Post.module.css'

const Post = (props) => {
    return  (
      
       <div className={s.item}>
         <img src='https://lifehacki.ru/wp-content/uploads/2020/09/Avatarki-dlja-Vatsapa-dlja-muzhchin-2.jpg'/>
         {props.message}
         <div>
         <span> {props.likeCount}like</span>
         </div>
          
      </div>
    )
}

export default Post;