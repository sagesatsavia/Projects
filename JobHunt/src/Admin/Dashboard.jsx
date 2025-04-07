import { useEffect, useState } from "react";
import apiServices from "../ApiServices/apiServices";
import {Link} from "react-router-dom"

export function Dashboard(){
  const[categoryData,setcategoryData]=useState([]);
  const[queryData,setQueryData]=useState([]);
  const[jobsData,setJobsData]=useState([]);
  const[jobApplyData,setJobApplyData]=useState([]);

  
  useEffect(()=>{
          apiServices.getCategoryData()
          .then((res)=>{
              setcategoryData(res.data.data.length)
          })
          .catch((err)=>{
              console.log(err)
          })
      })
  useEffect(()=>{
          apiServices.getQueryData()
          .then((res)=>{
            setQueryData(res.data.data.length)
          })
          .catch((err)=>{
              console.log(err)
          })
      })

  useEffect(()=>{
          apiServices.getJobsData()
          .then((res)=>{
            setJobsData(res.data.data.length)
          })
          .catch((err)=>{
              console.log(err)
          })
      })

  useEffect(()=>{
          apiServices.getApplyJobData()
          .then((res)=>{
            setJobApplyData(res.data.data.length)
          })
          .catch((err)=>{
              console.log(err)
          })
      })

      

    return(
         <>
                <main>


                <div className="slider-area ">
                  <div
                    className="single-slider section-overly slider-height2 d-flex align-items-center"
                    style={{backgroundImage:"url(./bg1.jpg)"}}
                  >
                    <div className="container">
                      <div className="row">
                        <div className="col-xl-12">
                          <div className="hero-cap text-center">
                            <h2>welcome to Dash Board</h2>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div> 

          <div className="container">
            <div  className="row justify-content-center">

              <div className="card w-75 mb-5 mt-5" style={{maxWidth: "900px"}}>
                <div className="row g-0">
                  <div className="col-md-4">
                  <img src="./c.jpg" className="img-fluid rounded-start" style={{height: "200px"}}/>
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                    <h2 className="card-title text-center">Categories : </h2>
                    <h2 className="card-text text-center">{categoryData}</h2>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card w-75 mb-5" style={{maxWidth: "900px"}}>
                <div className="row g-0">
                  <div className="col-md-4">
                    <img src="./mail.jpg" className="img-fluid rounded-start" style={{height: "200px"}}/>
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                    <h2 className="card-title text-center">Queries : </h2>
                    <h2 className="card-text text-center">{queryData}</h2>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card w-75 mb-5" style={{maxWidth: "900px"}}>
                <div className="row g-0">
                  <div className="col-md-4">
                  <img src="./jobs.avif" className="img-fluid rounded-start" style={{height: "200px"}}/>
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                    <h2 className="card-title text-center">Job Applications : </h2>
                    <h2 className="card-text text-center">{jobApplyData}</h2>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card w-75 mb-3" style={{maxWidth: "900px"}}>
                <div className="row g-0">
                  <div className="col-md-4">
                    <img src="./jobs.jpg" className="img-fluid rounded-start" style={{height: "200px"}}/>
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                    <h2 className="card-title text-center">Jobs :</h2>
                    <h2 className="card-text text-center">{jobsData}</h2>
                    </div>
                  </div>
                </div>
              </div>

            </div>

            
          </div>
        </main>
        
                </>
    )
}