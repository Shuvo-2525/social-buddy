import React, { useState, useEffect } from 'react';
import './Feeds.css'
import '../AllFeeds/AllFeeds.css'
import NavBar from '../NavBar/NavBar';
import AllFeeds from '../AllFeeds/AllFeeds';

const Feeds = (props) => {
    const {userName , password} = props.data;
    const [friends , setFriends] = useState([]);
    
    

    useEffect(()=> {
        // const url = 'https://jsonplaceholder.typicode.com/users';
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(data => setFriends(data))
            
    },[])


    
    

    

    return (
        <div id="feed-section">

            <header>
                <div className="container">
                    <NavBar userName={userName}/>
                </div>
            </header>
            <div>
                <section style={{backgroundColor: 'rgb(49, 2, 2)'}}>
                <center>
               <div className="top-feed container">
               <h1 className="color-font">Welcome <span style={{color : 'green' , fontFamily:'roboto'}}>{userName}</span></h1> 
               </div>
                </center>
                    {
                    friends.map(friend => <AllFeeds friend={friend}></AllFeeds>)
                    } 
                   
                                   

                </section>


                <footer>

                </footer>

            </div>
        </div>
    );
};

export default Feeds;