import React, { useState, useEffect } from 'react';
import './CommentBox.css'

const CommentBox = (props) => {
    const {email , body } = props.data
    
    const [image , setImage] = useState([]);
    useEffect(()=> {
        fetch('https://api.generated.photos/api/v1/faces?order_by=random&ethnicity=asian&emotion=joy&api_key=huJGJ5Th3iL03XsYE6lemw')
            .then(response => response.json())
            .then(data => setImage(data.faces[0].urls[4][512]))
    },[])

    return (
        <div className='container comment-box'>
        
            <img src={image} alt=""/>
            <h3> commented by : {email}</h3>
            <h3 style={{borderTop:'1px solid black'}}>comment : {body}</h3>
            
        </div>
    );
};

export default CommentBox;