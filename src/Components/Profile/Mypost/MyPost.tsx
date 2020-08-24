import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import classes from '../Profile.module.css';
import Post from "../Post/Post";
type PostType ={
    like: number
    massage: string
    id: number
}
type PostTypeFunc ={
    Post: Array<PostType>
    NewTextPost: string
    addPost: ()=>void
    postCheng: (text:string)=>void
}


const MyPost: React.FC<PostTypeFunc> = (props)=> {
    let OnAddPost = ()=>{
        props.addPost();
    };
    let onPostCheng = (e:React.FormEvent<HTMLTextAreaElement>)=> {
        console.log('chang')
        props.postCheng(e.currentTarget.value);
    };
    return (
        <div className={classes.profile}>
            <div className={classes.posts}>
                <p>My posts</p>
                <textarea placeholder={'Your news...'} onChange={onPostCheng} value={props.NewTextPost}></textarea>
                <button onClick={OnAddPost}>Send</button>
            </div>
            {props.Post.map((massage) => <Post Massage={massage.massage} Like={massage.like} Id={massage.id}/>)}
        </div>
    );
}

export default MyPost;