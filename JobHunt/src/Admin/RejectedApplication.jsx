import { useEffect, useState } from "react"
import apiServices, { BASE_IMAGE_URL } from "../ApiServices/apiServices";
import {Link} from "react-router-dom";

export default function RejectedApplication(){
    const[jobApply,setJobApply]=useState([]);

    useEffect(()=>{
        apiServices.getApplyJobData()
        .then((res)=>{
            setJobApply(res.data.data)
        })
        .catch((err)=>{
            console.log(err)
        })
    })      
    
  


    return(
        <>
        <div className="container">
            <div className="row">
                <h1>MANAGE REJECTED APPLICATIONS</h1>
            </div>
            <div className="row">
                <table className="table table-hover table-bordered">
                <thead>
                    <tr>
                        <th scope="col">No.</th>
                        <th scope="col">Job Info</th>
                        <th scope="col">Application Info</th>
                        <th scope="col">Status </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        jobApply ?.map((el,Index)=>(
                            <>
                            {
                                el.status=="Rejected"?(
                                    <>
                            <tr>
                                <th scope="row">{Index+1}</th>
                                <td>
                                    <ul type="disc">
                                        <li> Job Name:  {el.jobId?.jobName}</li>
                                        <li> Salary:  {el.jobId?.salary}</li>
                                        <li> Start Date:  {el.jobId?.startDate}</li>
                                        <li> End date:  {el.jobId?.endDate}</li>
                                        <li> Location:  {el.jobId?.location}</li>
                                        <li> Job Type:  {el.jobId?.jobType}</li>
                                        <li> Experience:  {el.jobId?.experience}</li>
                                        <li> Qualifications:  {el.jobId?.qualifications}</li>
                                    </ul>
                                </td>
                                <td>
                                    <Link className="text-dark" to={BASE_IMAGE_URL+el.resume} target="_blank">Click to View</Link>
                                </td>
                                <td>{el.status}</td>
                                

                            </tr>
                            </>
                                ):
                                null
                            }
                            </>
                        ))
                    }

                </tbody>
                </table>
            </div>
        </div>
        
        </>
    )
}