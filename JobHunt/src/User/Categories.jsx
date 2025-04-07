import { useEffect, useState } from "react";
import apiServices, { BASE_IMAGE_URL } from "../ApiServices/apiServices";
import {Link} from "react-router-dom";

export default function Categories(){
      const[categoryData,setcategoryData]=useState([]);
    
      useEffect(()=>{
            apiServices.getCategoryData()
            .then((res)=>{
              setcategoryData(res.data.data)
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
                <h1 className="mt-5 mb-5" style={{textAlign:"center"}}>Browse all the categories we have !!!</h1>
                </div>
            </div>
            <div  className="row d-flex justify-contnet-center">
        {
          categoryData ?.map((el)=>(
            <>
            <Link to={"/showjobs/"+el._id}>
            <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6">
              <div className="single-services text-center mb-30" style={{backgroundColor:"lightgrey",height:"400px",width:"400px"}}>
                <div className="services-cap" >
                  <img src={BASE_IMAGE_URL + el.categoryImage}  style={{height:"200px",width:"300px", marginTop:"30px"}}/>
                    <h4 className="mt-3">
                      {el.categoryName}
                    </h4>
                    <span>{el.categoryDescription}</span>
                  </div>
                </div>
              </div>
            </Link>
            
            </>
          ))
        } 
      </div>
        </div>
        
        </>
    )
}