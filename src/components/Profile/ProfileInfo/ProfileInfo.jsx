/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */

import React from 'react'
import s from './ProfileInfo.module.css'
import Preloader from "../../common/Preloader/Preloader";
import userPhoto from "../../../assets/images/115-1150152_default-profile-picture-avatar-png-green.png";
import ProfileStatus from "./ProfileStatus";

const ProfileInfo = (props) => {

    if (!props.profile) {
        return <Preloader/>
    }
    return (
        <div>
{/*
            <div>
                <img src="https://cdn.wallpapersafari.com/72/22/eJpjwf.jpg"/>
            </div>
*/}

            <div className={s.descriptionBlock}>
                <div>пользователь №{props.profile.userId}</div>
                <img src={ props.profile.photos.large !=null ? props.profile.photos.large : userPhoto}/>
                <div> описание "{props.profile.lookingForAJobDescription}"</div>
                <ProfileStatus status={"hello"}/>
            </div>
        </div>
    )

}

export default ProfileInfo;