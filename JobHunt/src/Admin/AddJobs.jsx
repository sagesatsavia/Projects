/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react"
import apiServices from "../ApiServices/apiServices";
import {toast} from "react-toastify"

export function AddJobs(){
  const[jobName, setjobName]=useState("");
  const[jobImage, setjobImage]=useState({});
  const[imageName, setimageName]=useState("");
  const[description, setdescription]=useState("");
  const[categoryID, setcategoryID]=useState("");
  const[salary, setsalary]=useState("");
  const[startDate, setstartDate]=useState("");
  const[endDate, setendDate]=useState("");
  const[location, setlocation]=useState("");
  const[jobType, setjobType]=useState('');
  const[experience, setexperience]=useState("");
  const[qualifications, setqualifications]=useState("");
  const[vacancy, setvacancy]=useState("");

  const[categoryData,setcategoryData]=useState([]);





  const changeImage=(e)=>{
    setjobImage(e.target.files[0])
    setimageName(e.target.value)
  }

  const addData=(e)=>{
    e.preventDefault();
    let data= new FormData();
    data.append("jobName",jobName)
    data.append("jobImage",jobImage)
    data.append("description",description)
    data.append("categoryID",categoryID)
    data.append("salary",salary)
    data.append("startDate",startDate)
    data.append("endDate",endDate)
    data.append("location",location)
    data.append("jobType",jobType)
    data.append("experience",experience)
    data.append("qualifications",qualifications)
    data.append("vacancy",vacancy)


    apiServices.addJobs(data)
    .then((res)=>{
      toast.success(res.data.message)
      console.log(res.data.errors)
      
    })
    .catch((err)=>{
      toast.error(err.message)
    })

  }

  useEffect(()=>{
    apiServices.getCategoryData()
    .then((res)=>{
      setcategoryData(res.data.data)
    })
    .catch((err)=>{
      console.log(err.message)
    })
  })

    return(
        <>
<div style={{marginLeft:"39%"}}>
<div className="row">
       <div className="col-12">
         <h1 className="mt-5 mb-5">ADD JOBS</h1>
       </div>
       <div className="col-lg-8">
         <form className="form-contact contact_form " onSubmit={addData}>
           
           <div className="row">
             <div className="col-sm-8">
               <div className="form-group">
               <h3>Enter a job name</h3>

                 <input
                   className="form-control valid "
                   type="text"
                   value={jobName}
                   onChange={(e)=>{setjobName(e.target.value)}}
                   placeholder="Enter job name" />
               </div>
             </div>

             <div className="col-sm-8">
               <div className="form-group">
                 <h3>Attach a Image</h3>
                 <input
                   className="form-control valid"
                   type="file"
                   onChange={changeImage}
                   placeholder="Email"
                 />
               </div>
             </div>
             <div className="col-sm-8">
               <div className="form-group">
               <h3>Enter Vacancy</h3>

                 <input
                   className="form-control valid"
                   type="text"
                   value={vacancy}
                   onChange={(e)=>{setvacancy(e.target.value)}}
                   placeholder="Enter vacancy" />
             </div>
             </div>

  
             <div className="col-8">
               <div className="form-group">
                 <h3>Give a description</h3>
                 <textarea
                   className="form-control w-100"
                   value={description}
                   onChange={(e)=>{setdescription(e.target.value)}}
                   cols={30}
                   rows={4}
                   placeholder="Add Description "
                 />
               </div>
             </div>

             <div className="col-sm-8">
               <div className="form-group">
               <h3>Give a category id</h3>
               <select className="form-control" onChange={(e)=>{setcategoryID(e.target.value)}}>
                <option>Select A Category :</option>
                {
                  categoryData ?.map((el)=>(
                    <>
                    <option value={el._id}>
                      {el.categoryName}
                    </option>
                    </>
                  ))
                }

               </select>

                 
               </div>
             </div>

             <div className="col-sm-8">
               <div className="form-group">
               <h3>Give salary</h3>

                 <input
                   className="form-control valid"
                   type="text"
                   value={salary}
                   onChange={(e)=>{setsalary(e.target.value)}}
                   placeholder="$..." />
               </div>
             </div>

             <div className="col-sm-8">
               <div className="form-group">
               <h3>Give a start date</h3>

                 <input
                   className="form-control valid"
                   type="text"
                   value={startDate}
                   onChange={(e)=>{setstartDate(e.target.value)}}
                   placeholder="Enter start date" />
               </div>
             </div>

             <div className="col-sm-8">
               <div className="form-group">
               <h3>Give a end date</h3>

                 <input
                   className="form-control valid"
                   type="text"
                   value={endDate}
                   onChange={(e)=>{setendDate(e.target.value)}}
                   placeholder="Enter end date" />
               </div>
             </div>

             <div className="col-sm-8">
               <div className="form-group">
               <h3>Give a location</h3>

                 <input
                   className="form-control valid"
                   type="text"
                   value={location}
                   onChange={(e)=>{setlocation(e.target.value)}}
                   placeholder="Enter location" />
               </div>
             </div>

             <div className="col-sm-8">
               <div className="form-group">
               <h3>Give a job Type</h3>
                 <input
                   className="form-control valid"
                   type="text"
                   value={jobType}
                   onChange={(e)=>{setjobType(e.target.value)}}
                   placeholder="Enter job type" />
               </div>
             </div>

             <div className="col-sm-8">
               <div className="form-group">
               <h3>Enter experience</h3>
                 <input
                   className="form-control valid"
                   type="text"
                   value={experience}
                   onChange={(e)=>{setexperience(e.target.value)}}
                   placeholder="Enter experience" />
               </div>
             </div>

             <div className="col-sm-8">
               <div className="form-group">
               <h3>Enter qualifications</h3>

                 <input
                   className="form-control valid"
                   type="text"
                   value={qualifications}
                   onChange={(e)=>{setqualifications(e.target.value)}}
                   placeholder="Enter qualifications" />
             </div>
       

             <button
               type="submit"
               className="button button-contactForm boxed-btn mb-5" > Save </button>
           </div>
           </div>
         </form>
       </div>
     </div>
     </div>
   
 
</>
    )
}