/* eslint-disable no-extra-boolean-cast */
import { useEffect, useState } from "react"
import apiServices, { BASE_IMAGE_URL } from "../ApiServices/apiServices";
import {toast} from "react-toastify"
import { useParams } from "react-router-dom";

export default function UpdateCategories(){
      const[categoryName, setcategoryName]=useState("");
      const[categoryImage, setcategoryImage]=useState({});
      const[imageName, setimageName]=useState();
      const[categoryDescription, setcategoryDescription]=useState();
      const[previousImage, setPreviousImage]=useState([]);
      const param = useParams();
      const id = param.id;
    
      const changeImage=(e)=>{
        setcategoryImage(e.target.files[0])
        setimageName(e.target.value)
      }
    
      const UpdateData=(e)=>{
        e.preventDefault();
        let data= new FormData();
        data.append("categoryName",categoryName)
        if(!!imageName){
            data.append("categoryImage",categoryImage)
        }
        data.append("_id",id)
        data.append("categoryDescription",categoryDescription)
        console.log(data)
        apiServices.updateCategories(data)
        .then((res)=>{
          toast.success(res.data.message)
        })
        .catch((err)=>{
          toast.error(err.message)
        })
      }


    useEffect(()=>{
        let data={
            _id:id
        }
        apiServices.getSingleCategoryData(data)
        .then((res)=>{
            setcategoryName(res.data.data.categoryName);
            setcategoryDescription(res.data.data.categoryDescription);
            setPreviousImage(res.data.data.categoryImage);
        })
    },[id])


    return(
        <>
        <div className="container" style={{marginLeft:"39%"}}>
          <div className="row">
            <div className="col-12">
            <h1 className="contact-title">UPDATE CATEGORIES</h1>
          </div>

          
        <div className="col-lg-8">
          <form className="form-contact contact_form" onSubmit={UpdateData}>
            <div className="row">
              <div className="col-lg-8">
                <div className="form-group">
                  <input className="form-control valid" value={categoryName} onChange={(e)=>{setcategoryName(e.target.value)}} type="text" placeholder="Enter Category name" />
                </div>
              </div>

              <div className="col-lg-8">
                <div className="form-group">
                <h3>Previous Image</h3>
                  <img src={BASE_IMAGE_URL+previousImage} style={{height:"150px",width:"250px"}}/>
                </div>
              </div>

              <div className="col-lg-8">
                <div className="form-group">
                  <h3>Attach a Image</h3>
                  <input
                    className="form-control valid"
                    value={imageName}
                    onChange={changeImage}
                    type="file"
                    placeholder="Email"  />
                </div>
              </div>
              
              <div className="col-lg-8">
                <div className="form-group">
                  <h3>Give a description</h3>
                  <textarea
                    className="form-control w-100"
                    value={categoryDescription}
                    onChange={(e)=>{setcategoryDescription(e.target.value)}}
                    cols={30}
                    rows={4}
                    placeholder=" Description "  />
                </div>
              </div>
            </div>
            <div className="form-group mt-3">
              <button
                type="submit"
                className="button button-contactForm boxed-btn"> Save </button>
            </div>
          </form>
        </div>
        
      </div>
      </div>

</>
    )
}