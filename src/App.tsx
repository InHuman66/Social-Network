import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import classes from './App.module.css';
import Header from "./Components/Header/Header";
import SideBar from "./Components/SideBar/SideBar";
import {BrowserRouter, Route} from "react-router-dom";
import Profile from "./Components/Profile/Profile";
import Dialogs from "./Components/Dialogs/Dialogs";
import {ActionsTypes} from "./Redax/AC-Types";
import {ReduxStateType, reduxStoreType} from "./Redax/redux-store";
import DialogsContainer from "./Components/Dialogs/DialogsContainer";
const App:React.FC<{ state:ReduxStateType, dispatch:(action:ActionsTypes)=>void, store:reduxStoreType}>=(props)=> {
  return (
      <BrowserRouter>
          <div className="App">
              <Header/>
              <div className={classes.content_position +' container'}>
                  <div className={'row'}>
                      <div className={'col col-3'}>
                          <SideBar/>
                      </div>
                      <div className={'col col-9'}>
                          <Route path={'/profile'}
                             render={()=>
                            <Profile
                              store={props.store}
                            />
                             }
                            />
                          <Route path={'/messages'} render={()=>
                              <DialogsContainer></DialogsContainer>
                          }/>
                      </div>
                  </div>
              </div>
          </div>
      </BrowserRouter>
  );
}

export default App;
