import React, { useState } from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom'


const Login=({setLoginUser})=>{

const history=useHistory()

    const[user,setuser]=useState({
        
        email:"",
        password:""
    }) 
    const handlechange= e =>{
        const { name,value } = e.target
        setuser({
            ...user,
            [name]: value
        })
    } 
    const login = ()=>{
        axios.post("https://jalikoppa.herokuapp.com/login" || "http://localhost:3001/login", user)
        
        .then(res=>{
            alert(res.data.message)
            setLoginUser(res.data.user)
        })
    }  
    
    return(
        <>
    
<div className='container ' >
        <div className="form">
            <h2 className='btnn blue'>Login Here</h2>
            <input type="email" name="email" value={user.email} placeholder="Enter Email Here" onChange={handlechange} />
            <input type="password" name="password" value={user.password} placeholder="Enter Your Password Here " onChange={handlechange} />
            <h2 className="btnn orange" onClick={login} ><a href="#" >Login</a></h2>
            <p className="link">Don't have an account<br/>
            <a href="#" onClick={()=>history.push("/register")} >Sign up</a> here</p>
            <p className="liw">Log in with</p>

        
        </div>
        </div>


        </>
    )
}
export default Login;