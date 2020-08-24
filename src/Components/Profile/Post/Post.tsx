import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import classes from './Post.module.css';


const Post: React.FC<{Id:number, Massage:string, Like:number}>=(props)=> {

    return (
        <div key={props.Id}>
            <div className={classes.post + ' row col col-12'}>
                <object></object>
                <p>{props.Massage}</p>
            </div>
            <p className={classes.like}>Likes: {props.Like}</p>
        </div>
    );
}

export default Post;