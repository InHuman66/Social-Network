import {ActionsTypes} from "./AC-Types";
type addNewPost ={
    type: 'ADD-POST'
}
type ProfilePage ={
    post:Array<{
        massage: string
        like: number
        id: number
    }>
    newPostText: string
}
type ChangeNewTextActionType ={
    type: 'UPDATE-NEW-POST-TEXT'
    newText: string
}

let initialState = {
    post:[
        {massage: 'hello' , like: 4 , id: 1 ,},
        {massage: 'I`m not human' , like: 2 , id: 2 ,},
        {massage: '......' , like: 3 , id: 3 ,},
        {massage: 'It`s me' , like: 6 , id: 4 ,},
    ],
    newPostText:'',
}

const profileReducer = (state:ProfilePage = initialState,  action:ActionsTypes) => {
    switch (action.type) {
        case 'ADD-POST' : {
            let newPost = {
                massage: state.newPostText,
                like: 0,
                id: 5,
            };
            let stateCopy = {...state}
            stateCopy.post = [...state.post]
            stateCopy.post.push(newPost);
            stateCopy.newPostText = '';
            return stateCopy;
        }
        case 'UPDATE-NEW-POST-TEXT': {
            let stateCopy = {...state}
            stateCopy.newPostText = action.newText
            return  stateCopy;
        }
        default :
            return {...state};
    }
}
export  const addPostActionCreator = ():addNewPost=>{
    return {
        type:'ADD-POST'
    }
}
export  const updateNewPost = (text:string):ChangeNewTextActionType=>{
    return {
        type:'UPDATE-NEW-POST-TEXT',
        newText: text
    }
}
export default  profileReducer;