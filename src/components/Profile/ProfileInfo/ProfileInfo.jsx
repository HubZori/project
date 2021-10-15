/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */

import React from 'react'
import s from './ProfileInfo.module.css'
import Preloader from "../../common/Preloader/Preloader";

const ProfileInfo = (props) => {

    if (!props.profile) {
        return <Preloader/>
    }
    return (
        <div>
            <div>
                <img src="https://cdn.wallpapersafari.com/72/22/eJpjwf.jpg"/>
            </div>

            <div className={s.descriptionBlock}>
                <div>пользователь №{props.profile.userId}</div>
                <img src={props.profile.photos.large}/>
                <div>{props.profile.fullName}</div>
                <div>статус "{props.profile.aboutMe}"</div>
                <div> описание "{props.profile.lookingForAJobDescription}"</div>


            </div>
        </div>
    )

}

export default ProfileInfo;