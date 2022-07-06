import React, { useState }  from 'react'
import axios from "axios"
import { useHistory } from 'react-router-dom'



const Register=()=>{
      const history=useHistory()  
     const[user,setuser]=useState({
         name:"",
         email:"",
         password:"",
         reenterpassword:""
     }) 
     const handlechange= e =>{
         const { name,value } = e.target
         setuser({
             ...user,
             [name]: value
         })
     }
     const register= ()=>{
         const { name,email,password,reenterpassword } = user
         if(name&& email&&password&&(password===reenterpassword)){

         axios.post("https://jalikoppa.herokuapp.com/register" || "http://localhost:3001/register", user)
        
         .then(res =>{
             history.push("/login")
             alert(res.data.message)
         }) 
        }
      else{
         alert("Please Fill the all fields")
     } 
    }     

    return(
        <>
        <div className="container">

        <div className="form">
            <h2 className='btnn blue'>Register Here</h2>
            <input type="text" name="name" value={user.name} placeholder="Enter Your Name" onChange={handlechange} />
            <input type="email" name="email" value={user.email} placeholder="Enter Email Here" onChange={handlechange} />
            <input type="password" name="password" value={user.password} placeholder="Enter a New Password Here " onChange={handlechange} />
            <input type="password" name="reenterpassword" value={user.reenterpassword} placeholder="R-enter Your Password Here" onChange={handlechange} />
            <h2 className="btnn orange" onClick={register}><a href="#" >Register</a></h2>
            <p className="link">If you have created your account<br/>
            <a href="#" onClick={()=>history.push("/login")} >Sign in </a> here</p>
        
        </div>
        </div>

        </>
    )
}
export default Register;