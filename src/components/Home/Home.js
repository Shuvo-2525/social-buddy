import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Form, Button } from 'react-bootstrap';
import SmallButton from '../SmallButton/SmallButton';
import Feeds from '../Feeds/Feeds';
import './Home.css'

const Home = () => {
    

  
  const { register , handleSubmit} = useForm();
  const [data , setData] = useState({});
  
  const onSubmit = (data) => {
    setData(data)
  };


  function decision() {
    if (data.userName === " ") {
      alert ('please enter your user name')
      
    } 
    
    else {
      if (data.password === 'admin'){
        document.getElementById('logIn').style.display='none';
        document.getElementById('feed-section').style.display='block';
      }
      else {
        document.getElementById('logIn').style.display='block';
        document.getElementById('feed-section').style.display='none';
        const errorMsg = `${data.password}` ;
        alert( `${errorMsg}  -This is not the Authorized password `) ;
      }
      
    }
      
    }

  return (
    <div className="App">



        <div className="log-in" id="logIn">
          <center><h3>Welcome to Social-Buddy </h3></center>
          <div className="border-area">

            {/* <center> */}
              <Form onSubmit={handleSubmit(onSubmit)}>
                
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>User Name</Form.Label>
                  <Form.Control type="text" name ='userName' placeholder="Plese enter your username" 
                  ref={register} required/>
                  </Form.Group>
    
                <Form.Group controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" name='password' placeholder="Password" ref={register} required />
                </Form.Group>
                <center>
                <Button variant="danger" type="submit" block onClick={()=>decision()}>
                  Submit
                </Button>
                </center>
              </Form >
              {/* </center> */}
              <SmallButton />
          </div>
        </div>
        
          <Feeds data={data} />
    </div>
  );
};

export default Home;