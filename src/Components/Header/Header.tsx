import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import classes from './Header.module.css';
import logo from '../../Materias/conversation.png'
import {NavLink} from "react-router-dom";

type HeaderType ={
    login: string
    isAuth: boolean
}

const Header:React.FC<HeaderType> = (props)=> {
    return (
        <div>
            <div className={'container'}>
                <div className={classes.bg_header + ' row'}>
                    <div className={classes.logo_position + ' col col-3'}>
                        <div className={classes.logo}>
                            <img className={classes.img_logo} src={logo}/>
                            <h1 className={classes.logo_txt}>Social Network</h1>
                        </div>
                    </div>
                    <div className={classes.search_menu + ' col col-3 offset-1 '}>
                        <div className={classes.search}>
                            <button></button>
                            <input placeholder={"Search"}/>
                        </div>
                    </div>
                    <div className={classes.header_menu + ' col col-4'}>
                        <a href={'#'}>Home</a>
                        <a href={'#'}>Newsfeed</a>
                        <a href={'#'}>All&nbsp;Pages</a>
                        <a href={'#'}>Contact</a>
                    </div>
                    <div className={classes.loginBlock + ' col col-1'}>
                        { props.isAuth ? <NavLink to={'/'}>{props.login}</NavLink>: <NavLink to={'/login'}>Login</NavLink> }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;