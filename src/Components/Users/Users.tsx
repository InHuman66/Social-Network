import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import classes from './Users.module.css';
import {userType} from "../../Redax/usersReducer";
import userPhotoDefault from '../../Materias/default_user.png';
import {NavLink} from "react-router-dom";
import axios from "axios";
import {socialNetworkAPI} from "../../api/Api";

type UsersTypeFunc ={
    users: Array<userType>
    follow: (userId:number)=>void
    unFollow: (userId:number)=>void
    setUsers: (users:Array<userType>)=>void
    pageSize:number
    totalUsersCount: number
    currentPage:number
    setCurrentPage:(CurrentPage:number)=>void
    setUsersCount: (usersCount:number)=>void
    onPageChanged:(pageCount:number)=>void
    toggleFollow: (value:boolean,id:number)=>void
    followingInProgress:Array<Number>
}


function Users(props: UsersTypeFunc) {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = [];

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    return (
        <div>
            <div>
                {
                    pages.map(p =>
                        <span
                            className={props.currentPage === p ? classes.selectedPage : ''}
                            onClick={() => {
                                props.onPageChanged(p)
                            }}
                        >{p}</span>
                    )
                }
            </div>
            {
                props.users.map(u =>
                    <div key={u.id} className={classes.userBlock + ' row'}>
                        <div className={classes.ImgFollowBlock + ' col-2'}>
                            <NavLink to={'/profile/' + u.id}>
                                <img src={u.photos.small != null ? u.photos.small : userPhotoDefault}/>
                            </NavLink>
                            {u.followed
                                ? <button
                                    disabled={props.followingInProgress.some(id => id === u.id)}
                                    onClick={() => {props.unFollow(u.id)}}
                                >Unfollow</button>
                                : <button
                                    disabled={props.followingInProgress.some(id => id === u.id)}
                                    onClick={() => {props.follow(u.id)}}
                                    >Follow</button>
                            }
                        </div>
                        <div className={classes.contentBlock + ' col-10'}>
                            <div className={classes.personalInfoBlock + ' row'}>
                                <h1>{u.name}</h1>
                                <p>{"u.location.country"}, {"u.location.city"}</p>
                            </div>
                            <div className={classes.description}>
                                <p>{u.status != null ? u.status : ""}</p>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    );
}

export default Users;