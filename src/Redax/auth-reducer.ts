import {reduxDispatchType, ReduxStateType} from "./redux-store";
import {authUser} from "../api/Api";
import { setProfileId } from "./profileReducer";

type setUserDataType ={
    type :'SET-USERDATA'
    data: stateData
}

type ActionsTypes = setUserDataType
export type stateData ={
    id: number,
    email: string
    login: string
}
type stateType={
    data: stateData
    isAuth: boolean
}
let initialState = {
    data:{} as stateData,
    isAuth: false

}
const authReducer = (state: stateType = initialState,  action:ActionsTypes) => {

    switch (action.type) {
        case "SET-USERDATA":{
            state.isAuth = true;
         return {...state, data: action.data}
        }
        default: return  state;
    }
}

export  const setUserData= (data:stateData):setUserDataType=>{
    return {
        type:'SET-USERDATA',
        data: data
    }
}

export  const authMe =()=>{
    return (dispatch:reduxDispatchType)=>{
        authUser.authUserEnter()
            .then((response) =>{
                if (response.data.resultCode === 0){
                    dispatch(setUserData(response.data.data))
                    dispatch(setProfileId(response.data.data.id))
                }
            })
    }
}



export default  authReducer;