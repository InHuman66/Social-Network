import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import axios from "axios";
import {authMe, setUserData, stateData} from "../../Redax/auth-reducer";
import {ReduxStateType} from "../../Redax/redux-store";
import { setProfileId } from "../../Redax/profileReducer";
import {authUser} from "../../api/Api";







type MainType ={
    setUserData: (data:stateData)=>void
    login: string
    isAuth: boolean
    setProfileId: (id:number)=>void
    authMe: ()=>void
}

class HeaderContainer  extends  React.Component<MainType>{

    componentDidMount() {
       this.props.authMe()
    }

    render() {
        return (
            <Header login={this.props.login} isAuth={this.props.isAuth}/>
        );
    }

}
const  mapStateToProps =(state: ReduxStateType)=>({
        login: state.auth.data.login,
        isAuth: state.auth.isAuth,
})

export  default  connect(mapStateToProps,{ setUserData:setUserData, setProfileId:setProfileId, authMe: authMe})(HeaderContainer)