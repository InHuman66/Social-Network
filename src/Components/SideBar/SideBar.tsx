import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import classes from './SideBar.module.css';
import {NavLink} from "react-router-dom";

type SideBarType ={
    userId:number
}

const SideBar:React.FC<SideBarType> =(props)=> {
    return (
        <div className={classes.side_bar}>
            <div className={classes.side_bar_position}>
                <div className={classes.button}>
                    <NavLink to={"/profile/" + props.userId} className={classes.txt_s}
                             activeClassName={classes.active}>Profile</NavLink>
                </div>
                <div className={classes.button}>
                    <NavLink to="/messages" className={classes.txt_s}
                             activeClassName={classes.active}>Messages</NavLink>
                </div>
                <div className={classes.button}>
                    <NavLink to="/news" className={classes.txt_s} activeClassName={classes.active}>News</NavLink>
                </div>
                <div className={classes.button}>
                    <NavLink to="/music" className={classes.txt_s} activeClassName={classes.active}>Music</NavLink>
                </div>
                <div className={classes.button}>
                    <NavLink to="/settings" className={classes.txt_s}
                             activeClassName={classes.active}>Settings</NavLink>
                </div>
                <div className={classes.button}>
                    <NavLink to="/users" className={classes.txt_s} activeClassName={classes.active}>Users</NavLink>
                </div>
            </div>
        </div>
    );
}

export default SideBar;