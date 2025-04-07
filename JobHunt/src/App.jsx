import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Home } from "./User/Home"
import { Master } from "./User/Master"
import { Job_Listing } from "./User/Job_Listing"
import { About } from "./User/About"
import { Blog } from "./User/Blog"
import { Single_Blog } from "./User/Single_Blog"
import { Job_Details } from "./User/Job_Details"
import { Contact } from "./User/Contact"
import { AdminMaster } from "./Layout/AdminMaster"
import { Dashboard } from "./Admin/Dashboard"
import { AddCategories } from "./Admin/AddCategories"
import { AddJobs } from "./Admin/AddJobs"
import { ManageJobs } from "./Admin/ManageJobs"
import { Login } from "./Login/Login"
import { ToastContainer } from 'react-toastify'
import { ManageQueries } from "./Admin/ManageQueries"
import { UserRegister } from "./Authentication/UserRegister"
import ManageCategories from "./Admin/ManageCategories"
import UpdateCategories from "./Admin/UpdateCategories"
import { UpdateJobs } from "./Admin/UpdateJobs"
import Categories from "./User/Categories"
import ApplyJob from "./User/ApplyJob"
import TrackApplyJob from "./User/TrackApplyJob"
import ShowJobs from "./User/ShowJobs"
import PendingApplication from "./Admin/PendingApplication"
import AcceptedApplication from "./Admin/AcceptedApplication"
import RejectedApplication from "./Admin/RejectedApplication"



function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Master/>}>
          <Route path="/" element={<Home/>}/>
          <Route path="/job_listing" element={<Job_Listing/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/blog" element={<Blog/>}/>
          <Route path="/single_blog" element={<Single_Blog/>}/>
          <Route path="/job_details" element={<Job_Details/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/userRegister" element={<UserRegister/>}/>
          <Route path="/categories" element={<Categories/>}/>
          <Route path="/applyjob/:id" element={<ApplyJob/>}/>
          <Route path="/trackapplyjob" element={<TrackApplyJob/>}/>
          <Route path="/showjobs/:id" element={<ShowJobs/>}/>


      </Route>


      <Route path="/admin" element={<AdminMaster/>}>
      <Route path="/admin" element={<Dashboard/>}/>
      <Route path="/admin/addCategories" element={<AddCategories/>}/>
      <Route path="/admin/addJobs" element={<AddJobs/>}/>
      <Route path="/admin/manageJobs" element={<ManageJobs/>}/>
      <Route path="/admin/manageQueries" element={<ManageQueries/>}/>
      <Route path="/admin/manageCategories" element={<ManageCategories/>}/>
      <Route path="/admin/updateCategories/:id" element={<UpdateCategories/>}/>
      <Route path="/admin/updateJobs/:id" element={<UpdateJobs/>}/>
      <Route path="/admin/pendingapplication" element={<PendingApplication/>}/>
      <Route path="/admin/acceptedapplication" element={<AcceptedApplication/>}/>
      <Route path="/admin/rejectedapplication" element={<RejectedApplication/>}/>

      
      </Route>
    </Routes>
    </BrowserRouter>

    <ToastContainer/>

    </>
  )
}

export default App
