import {ActionsTypes} from "./AC-Types";
import {socialNetworkAPI} from "../api/Api";
import {reduxDispatchType} from "./redux-store";

export type userType = {
    name: string
    id: number
    uniqueUrlName: null | string
    photos: {
        small: null | string
        large: null | string
    }
    followed: boolean
    status: string | null
}


type TypeFollow = {
    type: 'FOLLOW'
    id: number
}
type TypeUnFollow = {
    type: 'UNFOLLOW'
    id: number
}
type TypeSetUsers = {
    type: 'SETUSERS'
    users: Array<userType>
}
type TypeSetCurrentPage = {
    type: 'SETCURRENTPAGE'
    currentPage:number
}
type TypeSetUsersCount = {
    type: 'SETUSERSCOUNT'
    usersCount:number
}
type TypeSetFollowingProgress ={
    type: 'TOGGLE_IS_FOLLOWING_PROGRESS'
    value: boolean
    id:number
}



let initialState = {
    users: [] as Array<userType>,
    pageSize:5,
    totalUsersCount:19,
    currentPage: 1,
    followingInProgress: [] as Array<number>,
}

type  InitialStateType = typeof initialState


const usersReducer = (state: InitialStateType = initialState, action: ActionsTypes): InitialStateType => {
    switch (action.type) {
        case 'FOLLOW' : {
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.id) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            }
        }
        case 'UNFOLLOW' : {
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.id) {
                        return {...u, followed: false}
                    }
                    return u;
                })
            }
        }
        case 'SETUSERS' : {
            return {...state, users: action.users}

        }
        case 'SETCURRENTPAGE' : {
            return {...state, currentPage: action.currentPage}

        }
        case 'SETUSERSCOUNT' : {
            return {...state, totalUsersCount: action.usersCount}

        }
        case 'TOGGLE_IS_FOLLOWING_PROGRESS' : {
            return {...state, followingInProgress: action.value
                    ? [...state.followingInProgress, action.id]
                    : state.followingInProgress.filter(i => i !== action.id)
                }

        }
        default :
            return {...state};
    }
}
export const followAC = (id: number): TypeFollow => {
    return {
        type: 'FOLLOW',
        id: id,
    }
}
export const unFollowAC = (id: number): TypeUnFollow => {
    return {
        type: 'UNFOLLOW',
        id: id,
    }
}
export const setUsersAC = (users: Array<userType>): TypeSetUsers => {
    return {
        type: 'SETUSERS',
        users: users
    }
}
export const setCurrentPage = (currentpage:number): TypeSetCurrentPage => {
    return {
        type: 'SETCURRENTPAGE',
        currentPage:currentpage
    }
}
export const setUsersCount = (usersCount:number): TypeSetUsersCount  => {
    return {
        type: 'SETUSERSCOUNT',
        usersCount:usersCount
    }
}
export const setFollowingProgress = (value:boolean , id:number): TypeSetFollowingProgress  => {
    return {
        type: 'TOGGLE_IS_FOLLOWING_PROGRESS',
        value:value,
        id: id,
    }
}

export  const  getUsersThunkCreator = (currentPage:number, pageSize:number)=>{
    return (dispatch:reduxDispatchType)=>{
        socialNetworkAPI.getUsers(currentPage, pageSize)
            .then((data) =>{
                dispatch(setUsersAC(data.items))
                dispatch(setUsersCount(data.totalCount))
            })
    }
}
export  const  followThunkCreator = (userId:number)=>{
    return (dispatch:reduxDispatchType)=>{
        dispatch(setFollowingProgress(true, userId))
        socialNetworkAPI.follow(userId)
            .then((response) =>{
                if (response.data.resultCode === 0 ){
                    dispatch(followAC(userId))
                }
                dispatch(setFollowingProgress(false, userId))
            })
    }
}
export  const  unFollowThunkCreator = (userId:number)=>{
    return (dispatch:reduxDispatchType)=>{
        dispatch(setFollowingProgress(true, userId))
        socialNetworkAPI.unFollow(userId)
            .then((response) =>{
                if (response.data.resultCode === 0 ){
                    dispatch(unFollowAC(userId))
                }
                dispatch(setFollowingProgress(false, userId))
            })
    }
}

export default usersReducer;