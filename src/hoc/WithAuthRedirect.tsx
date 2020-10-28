import React, {FunctionComponent} from "react";
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";
import {ReduxStateType} from "../Redax/redux-store";


let mapStateToPropsForRedirect = (state:ReduxStateType)=>{
    return {
        isAuth: state.auth.isAuth
    }
}
type OwnType ={
    isAuth: boolean
}

export const  WithAuthRedirect=(Component:React.ComponentType)=>{
    class RedirectComponent extends React.Component<OwnType> {
        render() {
            if (!this.props.isAuth) return <Redirect to={'/login'}/>
            return <Component {...this.props}/>
        }
    }

    let  ConnectAuthRedirectComponent = connect(mapStateToPropsForRedirect)(RedirectComponent)
    return ConnectAuthRedirectComponent
}