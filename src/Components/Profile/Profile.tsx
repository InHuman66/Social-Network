import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import classes from './Profile.module.css';
import personalPhoto from '../../Materias/avatar7.png'
import MyPostContainer from "./Mypost/MyPostContainer";
import {reduxStoreType} from "../../Redax/redux-store";
type PostType ={
    like: number
    massage: string
    id: number
}
type PostTypeFunc ={
    store:reduxStoreType
}


const Profile: React.FC<PostTypeFunc > = (props)=> {
    let newPostTxt: any = React.createRef();
    return (
        <div className={classes.profile}>
            <div className={classes.banner}>
                <object></object>
            </div>
            <div className={'row'}>
                <div className={classes.personalPhoto + ' col col-2'}>
                    <img src={personalPhoto}/>
                </div>
                <div className={classes.personalInfo}>
                    <div>
                        <h1>Alex N1</h1>
                        <p>Date: 01.02.03</p>
                        <p>City: Loss</p>
                    </div>
                </div>
            </div>
            <MyPostContainer></MyPostContainer>
        </div>
    );
}

export default Profile;