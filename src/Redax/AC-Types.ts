import { userType } from "./usersReducer";
import { ProfileInfoType } from "./profileReducer";

export type ActionsTypes = addNewPost
    | ChangeNewTextActionType
    | ChangeNewMessageTxtActionType
    | AddNewMassage
    | TypeFollow
    | TypeUnFollow
    | TypeSetUsers
    | TypeSetCurrentPage
    | TypeSetUsersCount
    | TypeSetProfileInfo
    | TypeSetProfileID
    | TypeSetFollowingProgress
    | TypeSetProfileStatus

export type addNewPost ={
    type: 'ADD-POST'
}
export type ChangeNewTextActionType ={
    type: 'UPDATE-NEW-POST-TEXT'
    newText: string
}
export type ChangeNewMessageTxtActionType ={
    type: 'NEW-TXT-MESSAGE'
    body: string
}
export type AddNewMassage ={
    type: 'SEND-NEW-MASSAGE'
}
export type TypeFollow ={
    type: 'FOLLOW'
    id: number
}
export type TypeUnFollow ={
    type: 'UNFOLLOW'
    id: number
}
export  type TypeSetUsers ={
    type: 'SETUSERS'
    users: Array<userType>
}
export  type TypeSetCurrentPage ={
    type: 'SETCURRENTPAGE'
    currentPage:number
}
export type TypeSetUsersCount = {
    type: 'SETUSERSCOUNT'
    usersCount:number
}
export type TypeSetProfileInfo = {
    type: 'SETPROFILEINFO'
    profileInfo: ProfileInfoType
}
export type TypeSetProfileID ={
    type: 'SETPROFILEID'
    id: number
}
export type TypeSetFollowingProgress ={
    type: 'TOGGLE_IS_FOLLOWING_PROGRESS'
    value: boolean
    id:number
}
export  type TypeSetProfileStatus={
    type: 'SETPROFISTUS'
    status: string
}