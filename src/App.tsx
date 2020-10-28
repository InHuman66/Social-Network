import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import classes from './App.module.css';
import Header from "./Components/Header/Header";
import SideBar from "./Components/SideBar/SideBar";
import {BrowserRouter, Route} from "react-router-dom";
import Profile from "./Components/Profile/Profile";
import {ActionsTypes} from "./Redax/AC-Types";
import {ReduxStateType, reduxStoreType} from "./Redax/redux-store";
import DialogsContainer from "./Components/Dialogs/DialogsContainer";
import UsersContainer from "./Components/Users/UsersContainer";
import ProfileContainer from "./Components/Profile/ProfileContainer";
import HeaderContainer from "./Components/Header/HeaderContainer";
import SideBarContainer from "./Components/SideBar/SideBarContainer";
import Login from "./Components/Login/Login";

const App:React.FC<{ state:ReduxStateType, dispatch:(action:ActionsTypes)=>void, store:reduxStoreType}>=(props)=> {
    // @ts-ignore
    return (
      <BrowserRouter>
          <div className="App">
              <HeaderContainer/>
              <div className={classes.content_position +' container'}>
                  <div className={'row'}>
                      <div className={'col col-3'}>
                          <SideBarContainer/>
                      </div>
                      <div className={'col col-9'}>
                          <Route path={'/profile/:userId?'}
                             render={()=> <ProfileContainer/>}
                            />
                          <Route path={'/messages'} render={()=>
                              <DialogsContainer></DialogsContainer>
                          }/>
                          <Route path={'/users'} render={()=>
                              <UsersContainer/>
                          }/>
                          <Route path={'/login'} render={()=>
                              <Login/>
                          }/>
                      </div>
                  </div>
              </div>
          </div>
      </BrowserRouter>
  );
}

export default App;
