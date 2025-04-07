/* eslint-disable no-unused-vars */
import { useState } from "react"
import apiServices from "../ApiServices/apiServices";
import {toast} from "react-toastify"


export function AddCategories(){
  const[categoryName, setcategoryName]=useState("");
  const[categoryImage, setcategoryImage]=useState({});
  const[imageName, setimageName]=useState();
  const[categoryDescription, setcategoryDescription]=useState();

  const changeImage=(e)=>{
    setcategoryImage(e.target.files[0])
    setimageName(e.target.value)
  }

  const addData=(e)=>{
    e.preventDefault();
    let data= new FormData();
    data.append("categoryName",categoryName)
    data.append("categoryImage",categoryImage)
    data.append("categoryDescription",categoryDescription)
    apiServices.addCategories(data)
    .then((res)=>{
      toast.success("data added successfully")
    })
    .catch((err)=>{
      toast.error(err.message)
    })

  }

    return(
        <>
        <div className="container" style={{marginLeft:"39%"}}>
          <div className="row">
            <div className="col-12">
            <h1 className="contact-title">ADD CATEGORIES</h1>
          </div>

          
        <div className="col-lg-8">
          <form className="form-contact contact_form" onSubmit={addData}>
            <div className="row">
              <div className="col-lg-8">
                <div className="form-group">
                  <input className="form-control valid" value={categoryName} onChange={(e)=>{setcategoryName(e.target.value)}} type="text" placeholder="Enter Category name" />
                </div>
              </div>
              <div className="col-lg-8">
                <div className="form-group">
                  <h3>Attach a Image</h3>
                  <input
                    className="form-control valid"
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