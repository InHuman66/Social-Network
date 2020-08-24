import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import classes from './DialogList.module.css';
import {NavLink} from "react-router-dom";


const DialogList: React.FC<{Id:number, Name:string}>=(props)=> {
    return (
        <div>
            <div className={classes.boxName}>
                <NavLink to={"/messages/" + props.Id} className={classes.listItem}>{props.Name}</NavLink>
            </div>
        </div>
    );
}

export default DialogList;