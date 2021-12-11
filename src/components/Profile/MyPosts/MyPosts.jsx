/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */

import React from 'react'
import s from './MyPosts.module.css'
import Post from './Post/Post'
import {Field, reduxForm} from "redux-form";


function AddPostFrom(props) {
    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field component="textarea" name="newPostText"/>
        </div>
        <div>
            <button>Add post</button>
        </div>
    </form>;
}

AddPostFrom = reduxForm({form: "ProfileAddPostFrom"})(AddPostFrom);


const MyPosts = (props) => {


    let postsElements =
        props.posts.map(p => <Post message={p.message} likeCount={p.likeCount} key={p.id}/>)

    /*let newPostElement = React.createRef()*/


    let onAddPost = (values) => {
        props.addPost(values.newPostText);
    }

    return (
        <div className={s.postsBlock}>
            <h3>My Posts</h3>
            <div>
                <AddPostFrom onSubmit={onAddPost}/>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>

        </div>
    )
}


export default MyPosts;