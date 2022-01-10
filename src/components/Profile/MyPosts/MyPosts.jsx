/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */

import React from 'react'
import s from './MyPosts.module.css'
import Post from './Post/Post'
import {Field, reduxForm} from "redux-form";
import {maxLenghtCreator, required} from "../../../utilits/validators/validators";
import {Textarea} from "../../common/FormsControl/FormsControls";

const maxLengyt10 = maxLenghtCreator(10);

let AddPostFrom = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field component={Textarea} name="newPostText" placeholder={"post message"}
                   validate={[required, maxLengyt10]}
            />
        </div>
        <div>
            <button>Add post</button>
        </div>
    </form>;
}

let AddPostFromRedux = reduxForm({form: "ProfileAddPostFrom"})(AddPostFrom);


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
                <AddPostFromRedux onSubmit={onAddPost}/>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>

        </div>
    )
}


export default MyPosts;