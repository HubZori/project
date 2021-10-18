/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import Profile from "./Profile";
import * as axios from "axios";
import {connect} from "react-redux";
import {setUsersProfile} from "../../redux/profile-reducer";
import {withRouter} from "react-router-dom";
import {profileAPI} from "../../api/api";

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 10;
        };

       /* axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)*/
        profileAPI.profileUserId(userId)
            .then(response => {
                this.props.setUsersProfile(response.data);
            });
    }

    render() {
        return (<div>
                <Profile {...this.props} profile={this.props.profile}/>
            </div>

        )
    }


}


let MapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    fullName: state.profilePage.fullName,
})


let WithUrlDataContainerComponent = withRouter(ProfileContainer)


export default connect(MapStateToProps, {setUsersProfile})(WithUrlDataContainerComponent);
