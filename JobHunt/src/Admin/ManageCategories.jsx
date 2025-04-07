/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react"
import apiServices, { BASE_IMAGE_URL } from "../ApiServices/apiServices";
import {toast} from "react-toastify"
import {Link} from "react-router-dom"


export  default function ManageCategories(){
    const[categoryData,setcategoryData]=useState([]);
    const[isdelete,setIsDelete]=useState(false);

    
    useEffect(()=>{
        apiServices.getCategoryData()
        .then((res)=>{
            setcategoryData(res.data.data)
        })
        .catch((err)=>{
            console.log(err)
        })
    })

    const deleteData= (id)=>{
        setIsDelete(true);
        let data = {
            _id : id
        }
        apiServices.deleteCategoryData(data)
        .then((res)=>{
            toast.success(res.data.message)
        })
        .catch((err)=>{
            console.log(err)
            })
    }

    return(
        <>
        <div className="container">
        <h1>MANAGE CATEGORIES</h1>
        <table className="table table-hover table-bordered ">     
        <thead>
            <tr>
                <th scope="col">sr No.</th>
                <th scope="col">Category Name</th>
                <th scope="col">Image</th>
                <th scope="col">Description</th>
                <th scope="col">Action</th>
            </tr>
        </thead>
        <tbody>
            {
                categoryData ?.map((el,Index)=>(
                    <>
                    <tr >
                        <th scope="row">{Index+1}</th>
                        <td>{el.categoryName}</td>
                        <td>
                            <img src={BASE_IMAGE_URL+el.categoryImage} style={{height:"200px",width:"350px"}}/>
                        </td>
                        <td>{el.categoryDescription}</td>
                        <td>
                            <Link to={"/admin/updateCategories/"+el._id}>
                            <button style={{backgroundColor:"blue", width: "70px", marginRight: "20px"}}>Edit</button>
                            </Link>
                            <button style={{backgroundColor:"red", width: "70px", marginRight: "20px"}} onClick={()=>deleteData(el._id)}>Delete</button>
                        </td>
                    </tr>
                    </>
                ))
            }
            
            
        </tbody>
        </table>
    </div>
        </>
    )
}