import React from 'react';
import './App.css';
import Home from './components/Home/Home';
// import { Router, Route } from 'react-router-dom';
// import Switch from 'react-bootstrap/esm/Switch';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import NotFound from './components/NotFound/NotFound';
import Detail from './components/Detail/Detail';



 function App (){
return (

 <Router>
   <Switch>
     <Route path="/home">
        <Home />
     </Route>

     <Route exact path="/">
        <Home />
     </Route>

     <Route path="/about/:id">
        <Detail></Detail>
     </Route>

     <Route path="*">
        <NotFound />
     </Route>

     

   </Switch>
 </Router>

  


)
  
  
  
}

export default App;
