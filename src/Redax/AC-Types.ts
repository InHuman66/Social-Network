export type ActionsTypes = addNewPost | ChangeNewTextActionType | ChangeNewMessageTxtActionType | AddNewMassage;


export type addNewPost ={
    type: 'ADD-POST'
}
export type ChangeNewTextActionType ={
    type: 'UPDATE-NEW-POST-TEXT'
    newText: string
}
export type ChangeNewMessageTxtActionType ={
    type: 'NEW-TXT-MESSAGE'
    body: string
}
export type AddNewMassage ={
    type: 'SEND-NEW-MASSAGE'
}