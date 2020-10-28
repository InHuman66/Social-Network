import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {connect} from 'react-redux';
import {ReduxStateType} from "../../Redax/redux-store";
import SideBar from "./SideBar";

type mapStateToProps ={
    ProfileId: number
}

let mapStateToProps = (state: ReduxStateType):mapStateToProps => {
    return {
        ProfileId: state.profilePage.profileId,
    }
}
type SideBarContainerType= {
    ProfileId:number
}

class SideBarContainer extends React.Component<SideBarContainerType> {
    render() {
        return (
            <SideBar userId={this.props.ProfileId}/>
        );
    }
}

export default connect(mapStateToProps)(SideBarContainer);