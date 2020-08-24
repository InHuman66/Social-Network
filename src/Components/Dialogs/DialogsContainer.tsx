import {reduxDispatchType, reduxStateType} from "../../Redax/redux-store";
import {connect} from "react-redux";
import Dialogs from "./Dialogs";
import {addPostActionCreator, updateNewPost} from "../../Redax/profileReducer";
import {ChangeEvent} from "react";
import {addNewMassage, updateNewMessageTxt} from "../../Redax/dialogReducer";


let mapStatetoProps=(state:reduxStateType)=>{
    return{
        DialogsItems: state.dialogPage.dialogItems,
        Messages: state.dialogPage.messageData,
        NewTextMassage: state.dialogPage.newMessageTxt,
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

const DialogsContainer = connect(mapStatetoProps,mapDispatchToProps)(Dialogs);
export default DialogsContainer;