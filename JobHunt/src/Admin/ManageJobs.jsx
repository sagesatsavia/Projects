/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react"
import apiServices, { BASE_IMAGE_URL } from "../ApiServices/apiServices";
import {toast} from "react-toastify"
import {Link} from "react-router-dom"



export function ManageJobs(){
    const[jobsData,setJobsData]=useState([]);
    const[isdelete,setIsDelete]=useState(false);


    useEffect(()=>{
        apiServices.getJobsData()
        .then((res)=>{
            setJobsData(res.data.data)
        })
        .catch((err)=>{
            console.log(err)
        })
    })

    const deleteData= (id)=>{
        setIsDelete(true)
        let data = {
            _id : id
        }
        apiServices.deleteJobsData(data)
        .then((res)=>{
            toast.success("data deleted successfully")
        })
        .catch((err)=>{
            console.log(err)
            })
    }

    return(
        <>
        <h1 className="mt-5 mb-5" style={{textAlign:"center"}}>MANAGE JOBS</h1>
        <table className="table table-hover table-bordered">     
        <thead>
            <tr>
                <th scope="col">sr No.</th>
                <th scope="col">Job Name</th>
                <th scope="col">Image</th>
                <th scope="col">Description</th>
                <th scope="col">Vacancy</th>
                <th scope="col">Category Name</th>
                <th scope="col">Salary</th>
                <th scope="col">Start Date</th>
                <th scope="col">End Date</th>
                <th scope="col">Location</th>
                <th scope="col">Job Type</th>
                <th scope="col">Experience</th>
                <th scope="col">Qualifications</th>
                <th scope="col">Action</th>
            </tr>
        </thead>
        <tbody>

            {
                jobsData ?.map((el,Index)=>(
                    <>
                    <tr>
                        <th scope="row">{Index+1}</th>
                        <td>{el.jobName}</td>
                        <td>
                            <img src={BASE_IMAGE_URL+el.jobImage} style={{height:"200px",width:"350px"}}/>
                        </td>
                        <td>{el.description}</td>
                        <td>{el.vacancy}</td>
                        <td>{el.categoryID?.categoryName}</td> 
                        <td>{el.salary}</td>
                        <td>{el.startDate}</td>
                        <td>{el.endDate}</td>
                        <td>{el.location}</td>
                        <td>{el.jobType}</td>
                        <td>{el.experience}</td>
                        <td>{el.qualifications}</td>
                        <td>
                        <Link to={"/admin/updateJobs/"+el._id}>
                        <button className="mb-3 mt-5 " style={{backgroundColor:"blue", width: "70px", marginRight: "20px"}}>Edit</button>
                        </Link>
                            <button style={{backgroundColor:"red", width: "70px", marginRight: "20px"}} onClick={()=>deleteData(el._id)}>Delete</button>
                        </td>
                        </tr>
                    </>
                ))
            }


            
           
        </tbody>
        </table>s
        </>
    )
}