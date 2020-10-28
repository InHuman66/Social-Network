import React, {ChangeEvent, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import classes from './Profile.module.css';
import MyPostContainer from "./Mypost/MyPostContainer";
import {ProfileInfoType} from "../../Redax/profileReducer";
import userPhotoDefault from "../../Materias/default_user.png";




type ProfileType = {
    profileInfo: ProfileInfoType
    updateUserStatus:(status:string)=>void
    status:string
}


const Profile: React.FC<ProfileType> = (props)=> {
    let [sateEditable, setEditable]=useState(false)
    let [statusEditable, setStatusEditable]= useState(false)
    let [statusValue, setStatusValue]=useState<string>(props.status)
    let currentRef =React.createRef<HTMLInputElement>();

    let activeEditMode =()=>{
        setEditable(true)
    }
    let disableEditMode =()=>{
        setEditable(false)
    }
    let activeEditModeStatus =()=>{
        setStatusEditable(true)
    }
    let disableEditModeStatus =()=>{
        setStatusEditable(false)
        // @ts-ignore
        props.updateUserStatus(currentRef.current.value)
    }
    let onChangeStatus =(e: ChangeEvent<HTMLInputElement>)=>{
        setStatusValue(e.currentTarget.value)
    }
    return (
        <div className={classes.profile}>
            <div className={classes.banner}>
                <object></object>
            </div>
            <div className={'row'}>
                <div className={classes.personalPhoto + ' col col-2'}>
                    <img src={props.profileInfo.photos?.large != null ? props.profileInfo.photos.large : userPhotoDefault}/>
                </div>
                <div className={classes.personalInfo}>
                    <div>
                        <h1>{props.profileInfo.fullName}</h1>
                        <p onDoubleClick={activeEditMode}><span>About Me:</span> <div>
                            {!sateEditable
                                ?<p>{props.profileInfo.aboutMe}</p>
                                : <input  autoFocus={true} onBlur={disableEditMode} value={props.profileInfo.aboutMe !=null ? props.profileInfo.aboutMe : "" }/>
                            }
                        </div></p>
                        <p onDoubleClick={activeEditModeStatus}><span>Status:</span>{
                            !statusEditable
                                ?<p>{props.status}</p>
                                :<input onChange={onChangeStatus} ref={currentRef}  autoFocus={true} onBlur={disableEditModeStatus}  value={statusValue}/>
                        }</p>
                        <p >City: Loss</p>
                    </div>
                </div>
            </div>
            <MyPostContainer></MyPostContainer>
        </div>
    );
}

export default Profile;