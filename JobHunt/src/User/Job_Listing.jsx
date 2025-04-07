import { useEffect, useState } from "react";
import apiServices, { BASE_IMAGE_URL } from "../ApiServices/apiServices";
import {Link} from "react-router-dom"

export function Job_Listing(){
    const[jobsData,setJobsdata]=useState([]);
    useEffect(()=>{
        apiServices.getJobsData()
        .then((res)=>{
          setJobsdata(res.data.data)
        })
        .catch((err)=>{
          console.log(err)
      })
      })
  
    return(
        <>
        <div className="container">
          <div className="row">
            <div className="col">
              <h1 style={{textAlign:"center"}} className="mt-5 mb-5">Apply for Jobs here!</h1>
            </div>
          </div>
              <div className="row justify-content-center">
                    
                    {
                      jobsData ?.map((el)=>(
                        <>
                        <div className="col-xl-10">
                        {/* single-job-content */}
                        
              
                        <div className="single-job-items mb-30" style={{backgroundColor:"lightgrey"}}>
                          <div className="job-items" >
                            <div className="company-img" >
                              <a href="job_details.html">
                              <img src={BASE_IMAGE_URL + el.jobImage} className="img-fluid" style={{height:"200px",width:"250px"}}/>
                              </a>
                            </div>
                            <div className="job-title">
                              <a href="job_details.html">
                                <h4>{el.jobName}</h4>
                              </a>
                              <ul>
                                <li>{el.description}</li>
                                <li>
                                  <i className="fas fa-map-marker-alt" style={{marginRight:"10px"}} />
                                  
                                  {el.location}
                                </li>
                                <li>{el.salary}</li>
                              </ul>
                            </div>
                          </div>
                          <div className="items-link f-right">
                            <h5>Job Type</h5>
                            <div style={{height:"32px", fontSize:"20px", borderRadius:"20px", backgroundColor:"white"}} className=" text-center">{el.jobType}</div>
                          </div>
                          <Link to={'/applyjob/'+el._id}>
                          <button style={{marginTop:"50%"}} className="btn"> Apply </button>
                          
                          </Link>
                        </div>
                        
                      </div>
                        </>
                      ))
                    }
                    
                      
                    </div>

                
              {/* single-job-content */}
              
            </div>

        </>
    )
}