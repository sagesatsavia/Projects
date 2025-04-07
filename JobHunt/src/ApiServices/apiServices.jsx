import axios from "axios";
import qs from "qs";

const BASE_URL = "http://localhost:3030/api/";
export const BASE_IMAGE_URL = "http://localhost:3030/";


class apiServices{
    addCategories(data){
        return axios.post(BASE_URL+"category/add",data,
            {headers:{
                "Content-Type":"multipart/form-data"
            }
        })
    }

    getCategoryData(data){
        return axios.post(BASE_URL+"category/getAllData",qs.stringify(data))
    }

    getSingleCategoryData(data){
        return axios.post(BASE_URL+"category/getsingleData",qs.stringify(data))
    }

    deleteCategoryData(data){
        return axios.post(BASE_URL+"category/deleteData",qs.stringify(data))
    }
    updateCategories(data){
        return axios.post(BASE_URL+"category/updateData",data,
            {headers:{
                "Content-Type":"multipart/form-data"
            }
        })
    }

    addJobs(data){
       return axios.post(BASE_URL+"jobs/addJob",data,
            {headers:{
                "Content-Type":"multipart/form-data"
            }
        })
    }
    updateJobs(data){
        return axios.post(BASE_URL+"jobs/updateData",data,
             {headers:{
                 "Content-Type":"multipart/form-data"
             }
         })
     }
     getSingleJobData(data){
        return axios.post(BASE_URL+"jobs/getSingleData",qs.stringify(data))
    }


    getJobsData(data){
        return axios.post(BASE_URL+"jobs/getAllData",qs.stringify(data))
    }


    deleteJobsData(data){
        return axios.post(BASE_URL+"jobs/deleteData",qs.stringify(data))
    }

    addQuery(data){
        return axios.post(BASE_URL+"query/addQuery",data)
    }

    getQueryData(data){
        return axios.post(BASE_URL+"query/getAllData",qs.stringify(data))

    }

    registerUser(data){
        return axios.post(BASE_URL+"customers/register",data)
    }

    applyJob(data){
        return axios.post(BASE_URL+"jobApplication/applyjob",data,
            {headers:{
                "Content-Type":"multipart/form-data"
            }
        })
    }

    getApplyJobData(data){
        return axios.post(BASE_URL+"jobApplication/getAllData",qs.stringify(data))
    }

    updateApplicationStatus(data){
        return axios.post(BASE_URL+"jobApplication/updateStatus",data)
    }
    

}

export default new apiServices();