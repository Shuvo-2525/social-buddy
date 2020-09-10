import React, { useState, useEffect } from 'react';
import './AllFeeds.css'
import Detail from '../Detail/Detail';
import { Link } from 'react-router-dom';


const AllFeeds = (props) => {
    const { name  , id } = props.friend;  //it is from user api -- from here there will come names {user name , id}

    const [image , setImage] = useState([]);
    useEffect(()=> {
        fetch('https://api.generated.photos/api/v1/faces?order_by=random&ethnicity=asian&emotion=joy&api_key=huJGJ5Th3iL03XsYE6lemw')
            .then(response => response.json())
            .then(data => setImage(data.faces[0].urls[4][512]))
    },[])

    const [post , setPost ] = useState([]);

    useEffect(()=> {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}` )
            .then(response => response.json())
            .then(data => setPost(data))
            
            
    },[])

    const { title , body } = post


    return (
        <div className='all-feeds'>
            <div className="container post-card">
            <img src={image} alt="" srcset=""/>
            <h4  style={{width:'200px'}} className='color-font'> {name}</h4>
            <h3 className='title-color-font'>Title -- {title}</h3>
            <h5 className='color-font'>{body}</h5>
            {/* {
            <Detail image={image} name={name} title={title} body={body} id={id}></Detail>
            } */}

            <h3><Link to ={`/about/${id}`}>Continue Reading</Link></h3>
            </div>
            
        </div>
    );
};

export default AllFeeds;