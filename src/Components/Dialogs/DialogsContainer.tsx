import {reduxDispatchType, ReduxStateType} from "../../Redax/redux-store";
import {connect} from "react-redux";
import Dialogs from "./Dialogs";
import {addNewMassage, updateNewMessageTxt} from "../../Redax/dialogReducer";
import React from "react";
import {WithAuthRedirect} from "../../hoc/WithAuthRedirect";
import {compose} from "redux";

type MSTPType = {
    DialogsItems: Array<{name:string, id:number}>
    Messages: Array<{message:string, id:number}>
    NewTextMassage: string
    isAuth: boolean
}


let mapStatetoProps=(state:ReduxStateType):MSTPType=>{
    return{
        DialogsItems: state.dialogPage.dialogItems,
        Messages: state.dialogPage.messageData,
        NewTextMassage: state.dialogPage.newMessageTxt,
        isAuth: state.auth.isAuth,
    }
}
let mapDispatchToProps =(dispatch:reduxDispatchType)=>{
    return{
        MessageTxtChange:(text:string)=> {
            dispatch(updateNewMessageTxt(text));
        },
        NewMessage: ()=>{
            dispatch(addNewMassage());
        }
    }
}

export  default compose(
    connect(mapStatetoProps,mapDispatchToProps),
    WithAuthRedirect,
)(Dialogs) as React.ComponentType;

