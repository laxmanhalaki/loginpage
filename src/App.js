import React, { useState } from 'react'
import './App.css';
import Home from './components/home'
import Login from './components/login';
import Register from './components/register';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";


function App() {
  
const [user,setLoginUser] =useState({})
  return (
    <>
    <div className='background'>
  <Router>
    <Switch>
      <Route exact path="/loginpage">
        {
          user&& user._id ? <Home setLoginUser={setLoginUser}/> : <Login setLoginUser={setLoginUser}/>
        }
        </Route>
      <Route path="/login"><Login setLoginUser={setLoginUser} /></Route>
      <Route path="/register"><Register/></Route>
      <Route path="/*"><h1 style={{color:"white"}}>404 page not found</h1></Route>
      
    </Switch>
  </Router>
  

  
  </div>
       
</>        
        
        
        
    
  )
};
        
export default App;
