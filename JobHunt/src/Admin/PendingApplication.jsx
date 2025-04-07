import { useEffect, useState } from "react"
import apiServices, { BASE_IMAGE_URL } from "../ApiServices/apiServices";
import {Link, useNavigate} from "react-router-dom";
import {toast} from "react-toastify"

export default function PendingApplication(){
    const[jobApply,setJobApply]=useState([]);
    const nav = useNavigate();

    useEffect(()=>{
        apiServices.getApplyJobData()
        .then((res)=>{
            setJobApply(res.data.data)
        })
        .catch((err)=>{
            console.log(err)
        })
    })      
    
    const UpdateStatus=(id,status)=>{
        let data ={
            _id : id,
            status : status
        }
        apiServices.updateApplicationStatus(data)
        .then((res)=>{
            toast.success(res.message)
        })
        .catch((err)=>{
            toast.err(err.message)

        })
        if(status=="Accepted"){
            setTimeout(() => {
                nav("/admin/acceptedapplication")
            }, 1000);
        }

    }


    return(
        <>
        <div className="container">
            <div className="row">
                <h1>MANAGE PENDING APPLICATIONS</h1>
            </div>
            <div className="row">
                <table className="table table-hover table-bordered">
                <thead>
                    <tr>
                        <th scope="col">No.</th>
                        <th scope="col">Job Info</th>
                        <th scope="col">Application Info</th>
                        <th scope="col">Status </th>
                        <th scope="col">Action </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        jobApply ?.map((el,Index)=>(
                            <>
                            {
                                el.status=="Pending"?(
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
                                <td>
                                    <button onClick={()=> UpdateStatus(el._id, "Accepted")} className=" btn bg-success ">Accept</button>
                                    <br></br>
                                    <button onClick={()=> UpdateStatus(el._id, "Rejected")} className="btn mt-4 bg-danger">Reject</button>

                                </td>

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