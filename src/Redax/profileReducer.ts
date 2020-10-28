import {ActionsTypes} from "./AC-Types";
import {reduxDispatchType} from "./redux-store";
import {socialNetworkAPI} from "../api/Api";
import {setFollowingProgress, unFollowAC} from "./usersReducer";
type addNewPost ={
    type: 'ADD-POST'
}
export type ProfileInfoType ={
    aboutMe: string | null
    contacts: {
        facebook: string | null
        website: string | null
        vk: string | null
        twitter: string | null
        instagram: string | null
        youtube: string | null
        github: string | null
        mainLink: string | null
    }
    lookingForAJob: boolean
    lookingForAJobDescription: string | null
    fullName: string | null
    userId: number
    photos: {
        small: null | string
        large: null | string
    }

}
export  type postType ={
    massage: string
    like:number
    id:number
}


type ChangeNewTextActionType ={
    type: 'UPDATE-NEW-POST-TEXT'
    newText: string
}
export type TypeSetProfileInfo = {
    type: 'SETPROFILEINFO'
    profileInfo: ProfileInfoType
}
type TypeSetProfileID ={
    type: 'SETPROFILEID'
    id: number
}
type TypeSetProfileStatus={
    type: 'SETPROFISTUS'
    status: string
}

let initialState = {
    profileDataInfo: {} as ProfileInfoType,
    post:[
        {massage: 'hello' , like: 4 , id: 1 ,},
        {massage: 'I`m not human' , like: 2 , id: 2 ,},
        {massage: '......' , like: 3 , id: 3 ,},
        {massage: 'It`s me' , like: 6 , id: 4 ,},
    ],
    profileId: 0,
    newPostText:'',
    profileStatus: ""
}
type initialStateType = typeof initialState


const profileReducer = (state:initialStateType= initialState,  action:ActionsTypes):initialStateType => {
    switch (action.type) {
        case 'ADD-POST' : {
            let newPost = {
                massage: state.newPostText,
                like: 0,
                id: 5,
            };
            let stateCopy = {...state}
            stateCopy.post = [...state.post]
            stateCopy.post.push(newPost);
            stateCopy.newPostText = '';
            return stateCopy;
        }
        case 'UPDATE-NEW-POST-TEXT': {
            let stateCopy = {...state}
            stateCopy.newPostText = action.newText
            return  stateCopy;
        }
        case 'SETPROFILEINFO': {
            return  {...state, profileDataInfo: action.profileInfo };
        }
        case 'SETPROFILEID': {

            return  {...state, profileId: action.id};
        }
        case 'SETPROFISTUS': {
            return  {...state, profileStatus: action.status};
        }
        default :
            return {...state};
    }
}
export  const addPostActionCreator = ():addNewPost=>{
    return {
        type:'ADD-POST'
    }
}
export  const updateNewPost = (text:string):ChangeNewTextActionType=>{
    return {
        type:'UPDATE-NEW-POST-TEXT',
        newText: text
    }
}
export  const setProfileInfo = (profileInfo:ProfileInfoType):TypeSetProfileInfo=>{
    return {
        type:'SETPROFILEINFO',
        profileInfo: profileInfo
    }
}
export  const setProfileId = (id:number):TypeSetProfileID=>{
    return {
        type:'SETPROFILEID',
        id: id
    }
}
export  const setProfileStatus = (status: string):TypeSetProfileStatus=>{
    return {
        type:'SETPROFISTUS',
        status: status
    }
}

export  const  getUserProfile = (userId:string)=>{
    let userID= userId
    if (!userID){
        userID = '2'
    }
    return (dispatch:reduxDispatchType)=>{
        socialNetworkAPI.getUserProfile(userID)
            .then((response) =>{
                dispatch(setProfileInfo(response.data))
            })
    }
}
export  const  getUserStatus= (userId:string)=>{
    let userID= userId
    if (!userID){
        userID = '2'
    }
    return (dispatch:reduxDispatchType)=>{
        socialNetworkAPI.getStatus(userID)
            .then((response) =>{
                dispatch(setProfileStatus(response.data))
            })
    }
}
export  const  updateUserStatus= (status:string)=>{
    return (dispatch:reduxDispatchType)=>{
        socialNetworkAPI.updateStatus(status)
            .then((response) =>{
                if (response.data.resultCode === 0){
                    dispatch(setProfileStatus(status))
                }
            })
    }
}
export default  profileReducer;