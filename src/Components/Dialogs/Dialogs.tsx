import React, {ChangeEvent} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Dialog from "./Dialog/Dialog";
import DialogList from "./DialogList/DialogList";
import classes from "./Dialogs.module.css";
import { Redirect } from 'react-router-dom';


type DialogType ={
    DialogsItems:Array<{name:string, id:number}>
    Messages:Array<{message:string, id:number}>
    NewTextMassage: string
    MessageTxtChange: (text:string)=>void
    NewMessage:()=>void
    isAuth: boolean
}

const Dialogs: React.FC<DialogType>=(props)=> {
    let onMessageTxtChange = (e:ChangeEvent<HTMLTextAreaElement>)=> {
        props.MessageTxtChange(e.currentTarget.value);
    };
    let sendNewMessage = ()=>{
        props.NewMessage();
    }
    if (!props.isAuth) return <Redirect to={'/login'}/>
    return (
        <div>
            <div className={'row'}>
                <div className={'col col-3'}>
                    <div className={classes.NameDialogs}>
                        {props.DialogsItems.map((dialog) => <DialogList Name={dialog.name} Id={dialog.id}/>)}
                    </div>
                </div>
                <div className={ classes.messageBlock + ' col col-9'}>
                    {props.Messages.map((message) => <Dialog Message={message.message} Id={message.id}/>)}
                    <div className={classes.ControlBlock + ' row'}>
                            <textarea  className={'col-9'} value={props.NewTextMassage} onChange={onMessageTxtChange}></textarea>
                            <button className={'col-3'} onClick={sendNewMessage}>Send</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dialogs;