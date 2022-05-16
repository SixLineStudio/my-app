import React, { useState }from 'react';
import MyInput from './UI/Input/MyInput';
import MyButton from './UI/Button/myButton';

const PostForm = ({create}) => {

    let [post, setPost] = useState({ title:'', body: ''})

    const addNewPost = (e)=>{
        e.preventDefault()
      
        const newPost = {
          id: Date.now(),
          title: post.title,
          body: post.body
        }
        // setPosts([...posts, newPost]) 
        setPost({ title:'', body: ''})
        create(newPost)
      }

    return (
        <form>
        <MyInput
        value = {post.title}
        onChange={(e)=>{setPost({...post, title: e.target.value})}}
        type="text" placeholder="Название поста"></MyInput>
        <MyInput
        value={post.body}
        onChange={(e)=>{setPost({...post, body: e.target.value})}}
        type="text" placeholder="Описание"></MyInput>
        <MyButton onClick={addNewPost} >Создать пост</MyButton>
      </form>
    );
};

export default PostForm;