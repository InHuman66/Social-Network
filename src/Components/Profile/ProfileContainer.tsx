import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {connect} from 'react-redux';
import {ReduxStateType} from "../../Redax/redux-store";
import Profile from "./Profile"
import axios from "axios";
import {
    getUserProfile,
    getUserStatus,
    ProfileInfoType,
    setProfileInfo,
    updateUserStatus
} from "../../Redax/profileReducer";
import { withRouter, RouteComponentProps, Redirect } from 'react-router-dom';
import {socialNetworkAPI} from "../../api/Api";
import {WithAuthRedirect} from "../../hoc/WithAuthRedirect";
import {compose} from "redux";

type mapStateToProps ={
    ProfileInfo:ProfileInfoType
    ProfileId: number
    isAuth:boolean
    profileStatus: string
}

let mapStateToProps = (state: ReduxStateType):mapStateToProps => {
    return {
        ProfileInfo: state.profilePage.profileDataInfo,
        ProfileId: state.profilePage.profileId,
        isAuth: state.auth.isAuth,
        profileStatus: state.profilePage.profileStatus,
    }
}

type pathParamsType ={
    userId: string
}
type OwnType = RouteComponentProps<pathParamsType> & mapStateToProps & {
    setUserProfile: (profileInfo:ProfileInfoType)=>void
    getUserProfile: (userId:string)=>void
    isAuth:boolean
    getUserStatus: (usersId:string)=>void
    updateUserStatus: (status:string)=>void
    profileStatus: string | null
}

class ProfileContainerAPI extends React.Component<OwnType> {
    componentDidMount() {
        this.props.getUserStatus(this.props.match.params.userId);
        this.props.getUserProfile(this.props.match.params.userId);
    }
    render() {
        if (!this.props.isAuth) return <Redirect to={'/login'}/>
        return (
            <Profile status={this.props.profileStatus} updateUserStatus={this.props.updateUserStatus} profileInfo={this.props.ProfileInfo}/>
        );
    }
}
export default compose(
    connect(mapStateToProps,
    {
        setUserProfile: setProfileInfo,
        getUserProfile: getUserProfile,
        getUserStatus: getUserStatus,
        updateUserStatus: updateUserStatus,
    }),
    withRouter,
    WithAuthRedirect,
)(ProfileContainerAPI) as React.ComponentType;

