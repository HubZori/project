/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import MyPostsContainer from './MyPosts/MyPostsContainer.jsx'
import ProfileInfo from './ProfileInfo/ProfileInfo'
/* import Post from './MyPosts/Post/Post' */

const Profile = (props) => {
 
  return <content>
    <ProfileInfo profile={props.profile} />
    <MyPostsContainer  />
         
  </content>

}

export default Profile 
