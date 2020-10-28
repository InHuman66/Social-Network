import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {connect} from 'react-redux';
import {
    followAC,
    setCurrentPage,
    setFollowingProgress,
    setUsersAC,
    setUsersCount,
    unFollowAC,
    userType,
    getUsersThunkCreator,
    followThunkCreator, unFollowThunkCreator
} from "../../Redax/usersReducer";
import {reduxDispatchType, ReduxStateType} from "../../Redax/redux-store";
import axios from "axios";
import Users from "./Users";
import {socialNetworkAPI} from "../../api/Api";

type MSTPType = {
    users: Array<userType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    followingInProgress: Array<Number>
}


let mapStateToProps = (state: ReduxStateType): MSTPType => {
    return {
        followingInProgress: state.usersPage.followingInProgress,
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
    }
}
type UsersTypeFunc ={
    users: Array<userType>
    setUsers: (users:Array<userType>)=>void
    pageSize:number
    totalUsersCount: number
    currentPage:number
    setCurrentPage:(CurrentPage:number)=>void
    setUsersCount: (usersCount:number)=>void
    toggleFollow:(value:boolean,id:number)=>void
    followingInProgress: Array<Number>
    getUsersThunkCreator:(currentPage:number, pageSize:number)=>void
    unFollowThunkCreator:(userId:number)=>void
    followThunkCreator:(userId:number)=>void
}

class UsersAPIContainer extends React.Component<UsersTypeFunc> {
    componentDidMount() {
        if(this.props.users.length === 0){
            // socialNetworkAPI.getUsers(this.props.currentPage, this.props.pageSize)
            //     .then((data) =>{
            //     this.props.setUsers(data.items)
            //     this.props.setUsersCount(data.totalCount)
            // })
            this.props.getUsersThunkCreator(this.props.currentPage,this.props.pageSize);
        }
    }
    onPageChanged = (p:number)=>{
        this.props.setCurrentPage(p)
        this.props.getUsersThunkCreator(p,this.props.pageSize);
    }

    render() {

        let pagesCount = Math.ceil( this.props.totalUsersCount/ this.props.pageSize)
        let pages = [];

        for (let i=1; i<= pagesCount; i++ ){
            pages.push(i)
        }
        return (
            <Users
                followingInProgress={this.props.followingInProgress}
                users={this.props.users}
                setUsers={this.props.setUsers}
                pageSize={this.props.pageSize}
                totalUsersCount={this.props.totalUsersCount}
                currentPage={this.props.currentPage}
                setCurrentPage={this.props.setUsersCount}
                setUsersCount={this.props.setUsersCount}
                onPageChanged={this.onPageChanged}
                toggleFollow={this.props.toggleFollow}
                unFollow={this.props.unFollowThunkCreator}
                follow={this.props.followThunkCreator}
            />
        );
    }
}




export default  connect(mapStateToProps,
{
                unFollowThunkCreator:unFollowThunkCreator,
                followThunkCreator:followThunkCreator,
                getUsersThunkCreator: getUsersThunkCreator,
                toggleFollow: setFollowingProgress,
                setUsers: setUsersAC,
                setCurrentPage: setCurrentPage,
                setUsersCount: setUsersCount,
                 })(UsersAPIContainer);