import { useState } from "react"
import apiServices from "../ApiServices/apiServices";
import {toast} from "react-toastify"
import {Link} from "react-router-dom"


export function UserRegister(){
    const[name,setName]=useState("");
    const[email,setEmail]=useState("");
    const[password,setPassword]=useState("");
    const[contact,setContact]=useState("");


    const Register=(e)=>{
        e.preventDefault();
        let data = {
            name:name,
            email:email,
            password:password,
            contact:contact
        }
        apiServices.registerUser(data)
        .then((res)=>{
            toast.success(res.data.message)
        })
        .catch((err)=>{
            toast.error(err.message)
          })
    }



    return(
        <>
        <div className="container">
            <div className="row">
                <div className="col">
                <h1 className="mt-5 mb-5" style={{textAlign:"center"}}>REGISTER NOW!!</h1>
                    <form onSubmit={Register}>
                        <label>Enter Name: </label>
                        <input type="text" className="form-control" placeholder="First name" value={name} onChange={(e)=>{setName(e.target.value)}} />
                        
                        <label className="mt-4">Enter Contact: </label>
                        <input type="text" className="form-control" placeholder="Enter Contact" value={contact} onChange={(e)=>{setContact(e.target.value)}} />
                        
                        <label className="mt-4">Enter Email Address: </label>
                        <input type="email" className="form-control" placeholder="name@example.com" value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
                        
                        <label className="mt-4">Enter Password: </label>
                        <input type="password"  className="form-control mb-5" placeholder="Enter Password" value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
                        
                        <button type="submit" className="btn mb-5">REGISTER</button>
                        
                            <Link to={"/login"}>
                            <button style={{marginLeft:"10%"}} className="btn mb-5">Login</button>
                            </Link>
                            <label style={{marginLeft:"3%"}}> Have an account? Login here!</label>

                    </form>

                </div>
            </div>
        </div>
        
        </>

    )
}