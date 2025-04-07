import { useEffect, useState } from "react"
import apiServices from "../ApiServices/apiServices";

export function ManageQueries(){
    const[queryData,setQueryData]=useState([]);

    useEffect(()=>{
        apiServices.getQueryData()
        .then((res)=>{
            setQueryData(res.data.data)
        })
        .catch((err)=>{
            console.log(err)
        })
    })

    const handleReply = (email, subject, message) => {
        const gmailURL = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;
        window.open(gmailURL, '_blank');
    };
    return(
        <>
        <div className="container">
            <h1 style={{textAlign:"center"}} className="mt-5 mb-5">QUERIES</h1>
            <div className="row">
                <table className="table table-hover table-bordered" >
                    <thead>
                        <tr>
                            <th scope="col">No.</th>
                            <th scope="col">Query Name</th>
                            <th scope="col">Query Email</th>
                            <th scope="col">Query Subject</th>
                            <th scope="col">Query Message</th>
                            <th scope="col"> Send Reply</th>
                        </tr>
                    </thead>
                        {
                            queryData ?.map((el,Index)=>(
                                <>
                                <tr>
                                    <th scope="row">{Index+1}</th>
                                    <td>{el.queryName}</td>
                                    <td>{el.queryEmail}</td>
                                    <td>{el.querySubject}</td>
                                    <td>{el.queryMessage}</td>
                                    <td> 
                                        <button
                                            className="btn bg-success btn-lg"
                                            onClick={() => handleReply(el?.queryEmail, el?.querySubject, el?.queryMessage)}>
                                            Reply
                                        </button>
                                    </td>
                                </tr>
                                </>
                            ))
                        }
                    <tbody>
                    </tbody>
                </table>
            </div>
        </div>
        
        </>
    )
}