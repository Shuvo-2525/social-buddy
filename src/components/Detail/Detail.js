import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import CommentBox from '../CommentBox/CommentBox';

const Detail = (props) => {
    // console.log(props)
    const {id} = useParams();

    const [post , setPost ] = useState([]);

    useEffect(()=> {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}` )
            .then(response => response.json())
            .then(data => setPost(data))
            
            
    },[])


    const [friends , setFriends] = useState([]);
    useEffect(()=> {
        // const url = 'https://jsonplaceholder.typicode.com/users';
        fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then(response => response.json())
            .then(data => setFriends(data))
            
    },[])


    const [comments , setComments] = useState([]);
    useEffect(()=> {
        // const url = 'https://jsonplaceholder.typicode.com/users';
        fetch(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)
            .then(response => response.json())
            .then(data => setComments(data))
            
    },[])

    




    const { name } = friends; 
    const { title , body } = post
    
    return (
        <div className='container'>
            <h1>{name}</h1>
            <h4> title : { title}</h4>
            <h2 style={{textAlign:'center'}}>{body}</h2>
           

            <h1 style={{borderTop: '1px solid black',marginTop:'25px',borderBottom: '1px solid black', backgroundColor:'grey',color:'white'}}> See the comments Below </h1>

            {
                comments.map((data)=>
                <CommentBox data={data}></CommentBox>
                )
            }
            

        </div>
    );
};

export default Detail;