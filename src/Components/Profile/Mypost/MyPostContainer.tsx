import React from 'react';
import {addPostActionCreator, postType, updateNewPost} from "../../../Redax/profileReducer";
import MyPost from "./MyPost";
import {reduxDispatchType, ReduxStateType} from "../../../Redax/redux-store";
import {connect} from "react-redux";




let mapStatetoProps=(state:ReduxStateType)=>{
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