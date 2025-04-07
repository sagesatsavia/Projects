import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { toast } from "react-toastify";


export function AdminHeader(){
  const[token, setToken]=useState(sessionStorage.getItem("token"));
  const nav=useNavigate();

  useEffect(()=>{
    const interval = setInterval(()=>{
      setToken(sessionStorage.getItem("token"));  // update token whenever it changes
    },1000)
    return()=> clearInterval(interval)
  },[]);

  console.log("token in header:", token);

  const Logout=()=>{
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("name");
    sessionStorage.removeItem("userId");
    toast.success("Logout successfull");
    setTimeout(() => {
      nav('/')
    }, 1000);
  }



    return(
        <>
        {/* Header Start */}
        <div className="header-area header-transparrent">
          <div className="headder-top header-sticky">
            <div className="container-fluid">
              <div className="row align-items-center">
                <div className="col-lg-3 col-md-2">
                  {/* Logo */}
                  <div className="logo">
                    <Link to={'/'}>
                      <img src="/assets/img/logo/logo.png" alt="" />
                    </Link>
                  </div>
                </div>
                <div className="col-lg-9 col-md-9">
                  <div className="menu-wrapper">
                    {/* Main-menu */}
                    <div className="main-menu">
                      <nav className="d-none d-lg-block">
                        <ul id="navigation">
                          <li>
                            <Link to={'/admin'}>Dashboard</Link>
                          </li>

                          <li>
                            <Link to={'#'}>Categories</Link>
                            <ul className="submenu">
                              <li>
                                <Link to={'/admin/addCategories'}>Add Category</Link>
                              </li>
                              <li>
                                <Link to={'/admin/manageCategories'}>Manage Category</Link>
                              </li>
                              
                            </ul>
                          </li>

                          <li>
                            <Link to={'#'}>Jobs</Link>
                            <ul className="submenu">
                              <li>
                                <Link to={'/admin/addJobs'}>Add Jobs</Link>
                              </li>
                              <li>
                                <Link to={'/admin/manageJobs'}>Manage Jobs</Link>
                              </li> 
                            </ul>
                          </li>
                          <li>
                            <Link to={'/admin/manageQueries'}>Queries</Link>
                          </li>
                          

                          <li>
                            <Link to={'#'}>Applications</Link>
                            <ul className="submenu">
                              <li>
                                <Link to={'/admin/pendingapplication'}>Manage Pending Applications</Link>
                              </li>
                              <li>
                                <Link to={'/admin/acceptedapplication'}>Manage Accepted Applications</Link>
                              </li>
                              <li>
                                <Link to={'/admin/rejectedapplication'}>Manage Rejected Applications</Link>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </nav>
                    </div>
                    <div className="header-btn d-none f-right d-lg-block">
                    <Link onClick={Logout} className="btn head-btn2">
                      Logout
                    </Link>
                  </div>
                  </div>
                </div>
                {/* Mobile Menu */}
                <div className="col-12">
                  <div className="mobile_menu d-block d-lg-none" />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Header End */}
      </>
    )
}