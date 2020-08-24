import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import classes from './Dialog.module.css';


const Dialog:React.FC<{Message:string, Id:number}>=(props)=> {
    return (
        <div key={props.Id} className={classes.message}>
            <p>{props.Message}</p>
        </div>
    );
}

export default Dialog;