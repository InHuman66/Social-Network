import {ActionsTypes,} from "./AC-Types";

type ChangeNewMessageTxtActionType ={
    type: 'NEW-TXT-MESSAGE'
    body: string
}
type AddNewMassage ={
    type: 'SEND-NEW-MASSAGE'
}
type DialogPage ={
    dialogItems: Array<{
        name: string
        id: number
        }>
    messageData: Array<{
        message: string
        id: number
        }>
    newMessageTxt:string
}

 let initialState = {
     dialogItems:[
         {name: 'Loki', id: 1 ,},
         {name: 'Olya', id: 2 ,},
         {name: 'Sasha', id: 3 ,},
         {name: 'Ilya', id: 4 ,},
         {name: 'Oleg', id: 5 ,},
         {name: 'Andriy', id: 6 ,},
     ],
     messageData:[
         {message:'Hello my friend', id: 1 ,},
         {message:'Helloooo', id: 2 ,},
         {message:'Just kidding', id: 3 ,},
         {message:'=)', id: 4 ,},
         {message:'Alooooo', id: 5 ,},
         {message:'.............', id: 6 ,},
     ],
     newMessageTxt: '',
 }
const dialogsReducer = (state:DialogPage = initialState,  action:ActionsTypes) => {
    let stateCopy ={
        ...state,
        messageData: [...state.messageData]
    }

    switch (action.type) {
        case "NEW-TXT-MESSAGE":
            stateCopy.newMessageTxt = action.body
            return stateCopy;
        case "SEND-NEW-MASSAGE":
            if (state.newMessageTxt === ''){
            }else{
                stateCopy.messageData.push({message: state.newMessageTxt, id: 6,})
                stateCopy.newMessageTxt = '';
            }
            return  stateCopy;
        default: return  state;
    }
}

export  const updateNewMessageTxt = (text:string):ChangeNewMessageTxtActionType=>{
    return {
        type:'NEW-TXT-MESSAGE',
        body: text
    }
}
export  const addNewMassage = ():AddNewMassage=>{
    return {
        type:'SEND-NEW-MASSAGE',
    }
}

export default  dialogsReducer;