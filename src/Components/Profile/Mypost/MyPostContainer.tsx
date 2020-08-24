import React from 'react';
import {addPostActionCreator, updateNewPost} from "../../../Redax/profileReducer";
import MyPost from "./MyPost";
import {reduxDispatchType, reduxStateType} from "../../../Redax/redux-store";
import {connect} from "react-redux";


let mapStatetoProps=(state:reduxStateType)=>{
    return{
        Post: state.profilePage.post,
        NewTextPost: state.profilePage.newPostText,
    }
}
let mapDispatchToProps =(dispatch:reduxDispatchType)=>{
    return{
        addPost: ()=>{
            dispatch(addPostActionCreator());
        },
        postCheng: (text:string)=>{
            dispatch(updateNewPost(text));
        },
    }
}
const MyPostContainer = connect(mapStatetoProps, mapDispatchToProps)(MyPost);
export default MyPostContainer;