/* eslint-disable no-unused-vars */
import { useState } from "react"
import apiServices from "../ApiServices/apiServices";
import { useParams } from "react-router-dom";
import {toast} from "react-toastify"


export default function ApplyJob(){
  const[resume, setResume]=useState([]);
  const[resumeName, setResumeName]=useState("");
  const[description,setDescription]=useState("");
  const param = useParams();
  const id = param.id;
  const changeResume=(e)=>{
    setResume(e.target.files[0])
    setResumeName(e.target.value)
  }

  const addData=(e)=>{
    e.preventDefault();
    let data = new FormData()
    data.append("description",description)
    data.append("resume",resume)
    data.append("jobId",id)
    data.append("customerId",sessionStorage.getItem("customerId"))


    console.log(id)
    apiServices.applyJob(data)
        .then((res)=>{
          toast.success(res.data.message)
          console.log(res.data.errors)
        })
        .catch((err)=>{
          toast.error(err.message)
        })
    

  }
    
    return(
        <>
        <div className="container">
        <div className="row">
          <div className="col-12">
          <h1 className="mt-5 mb-5">APPLY FOR THIS JOB</h1>
          </div>

          <form className="col-lg-8" onSubmit={addData}>
            <div className="border mt-4 mb-4 pt-3 ">
              <h3>Add Description: </h3>
              <input 
              className="border"  
              type="text" 
              value={description} 
              onChange={(e)=>{setDescription(e.target.value)}} 
              placeholder="Enter Description"
              />
            </div>           

            <div className="border mt-4 mb-4 pt-3">
              <h4>Attach Your Resume here </h4>
              <input 
              className="border" 
              type="file" 
              onChange={changeResume}
              />
            </div>           
              <button type="submit" className="btn mb-5"> Send </button>
            </form>
     </div>
     </div>
   
 
</>
    )
}