import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const FormEvent = () => {

    const[UserName,setUserName]=useState("")

    const[newUserDetails,setnewUseraDetails] = useState("")

    const notify = () => toast("your data is submitted successfully");


const getUserName = (event) => {
    setUserName(event.target.value)
}

const userDetails = (e) =>{
    e.preventDefault();
    setnewUseraDetails(UserName)
    notify();
}



  return (
<section class="formSection">
    <h1>Hello,{newUserDetails}</h1>
    <ToastContainer/>
    <div class="inputDiv">
        <form onSubmit={userDetails}>
        <input type="text" placeholder='enter text' onChange={getUserName} />
        <br />
        <button class="submitBtn" type='submit'>Submit</button>
        </form>
    </div>
    </section>
  )
}

export default FormEvent