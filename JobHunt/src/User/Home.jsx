import { useEffect, useState } from "react"
import apiServices, { BASE_IMAGE_URL } from "../ApiServices/apiServices";
import{Link} from "react-router-dom"

export function Home(){
  const[categoryData,setcategoryData]=useState([]);
  const[jobsData,setJobsdata]=useState([]);

  useEffect(()=>{
      apiServices.getCategoryData()
      .then((res)=>{
        setcategoryData(res.data.data)
      })
      .catch((err)=>{
        console.log(err)
    })
  })

  useEffect(()=>{
    apiServices.getJobsData()
    .then((res)=>{
      setJobsdata(res.data.data)
    })
    .catch((err)=>{
      console.log(err)
  })
  })



    return(
        <>
        <main>
  {/* slider Area Start*/}
  <div className="slider-area ">
    {/* Mobile Menu */}
    <div className="slider-active">
      <div
        className=" slider-height d-flex align-items-center bg-image"
      >
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-9 col-md-10">
              <div className="hero__caption">
                <h1>Find the most exciting startup jobs</h1>
              </div>
            </div>
          </div>
          {/* Search Box */}
          <div className="row">
            <div className="col-xl-8">
              {/* form */}
              <form action="#" className="search-box">
                <div className="input-form">
                  <input type="text" placeholder="Job Tittle or keyword" />
                </div>
                <div className="select-form">
                  <div className="select-itms">
                    <select style={{height:"70px", width:"200px"}}  name="select" id="select1">
                      <option value="">ON</option>
                      <option value="">BC</option>
                      <option value="">PEI</option>
                      <option value="">SK</option>
                    </select>
                  </div>
                </div>
                <div>
                  <Link to={"/job_listing"}>
                    <button style={{height:"70px"}}  className="btn ">Find job</button>
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* slider Area End*/}
  {/* Our Services Start */}
  <div className="our-services section-pad-t30">
    <div className="container">
      {/* Section Tittle */}

      <div className="row">
        <div className="col-lg-12">
          <div className="section-tittle text-center">
            <span>FEATURED TOURS Packages</span>
            <h2>Browse Top Categories </h2>
          </div>
        </div>
      </div>
      <div  className="row d-flex justify-contnet-center">
        {
          categoryData ?.map((el)=>(
            <>
            <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6">
              <div className="single-services text-center mb-30" style={{backgroundColor:"lightgrey"}}>
                <div className="services-cap" >
                  <img src={BASE_IMAGE_URL + el.categoryImage} className="img-fluid" style={{height:"170px",width:"350px"}}/>
                    <h4 className="mt-3">
                      {el.categoryName}
                    </h4>
                    <span>{el.categoryDescription}</span>
                  </div>
                </div>
              </div>
            </>
          ))
        } 
      </div>


      {/* More Btn */}
      {/* Section Button */}
      <div className="row">
        <div className="col-lg-12">
          <div className="browse-btn2 text-center mt-50">
            <Link to={"/categories"}>
             <button className="border-btn2">Browse All Sectors</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Our Services End */}
  {/* Online CV Area Start */}
  <div
    className="online-cv cv-bg section-overly pt-90 pb-120"
    data-background="assets/img/gallery/cv_bg.jpg"
  >
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-xl-10">
          <div className="cv-caption text-center">
            <p className="pera1">FEATURED TOURS Packages</p>
            <p className="pera2"> Make a Difference with Your Online Resume!</p>
            <a href="#" className="border-btn2 border-btn4">
              Upload your cv
              <input style={{marginLeft:"20px"}} type="file"/>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Online CV Area End*/}
  {/* Featured_job_start */}
  <section className="featured-job-area feature-padding">
    <div className="container">
      {/* Section Tittle */}
      <div className="row">
        <div className="col-lg-12">
          <div className="section-tittle text-center">
            <span>Recent Job</span>
            <h2>Featured Jobs</h2>
          </div>
        </div>
      </div>
      <div className="row justify-content-center">
      
      {
        jobsData ?.map((el)=>(
          <>
          <div style={{backgroundColor:"lightgrey"}} className="col-xl-10">
          {/* single-job-content */}
          

          <div className="single-job-items mb-30">
            <div className="job-items">
              <div className="company-img">
                <a href="job_details.html">
                <img src={BASE_IMAGE_URL + el.jobImage} className="img-fluid" style={{height:"200px",width:"250px"}}/>
                </a>
              </div>
              <div className="job-title">
                <a href="job_details.html">
                  <h4>{el.jobName}</h4>
                </a>
                <ul>
                  <li>{el.description}</li>
                  <li>
                    <i className="fas fa-map-marker-alt" style={{marginRight:"10px"}} />
                    
                    {el.location}
                  </li>
                  <li>{el.salary}</li>
                </ul>
              </div>
            </div>
            <div className="items-link f-right">
              <h5>Job Type</h5>
              <a href="job_details.html">{el.jobType}</a>
            </div>
          </div>
          
        </div>
          </>
        ))
      }
      
        
      </div>
    </div>
  </section>



  {/* Featured_job_end */}
  {/* How  Apply Process Start*/}
  <div
    className="apply-process-area apply-bg pt-150 pb-150"
    data-background="assets/img/gallery/how-applybg.png"
  >
    <div className="container">
      {/* Section Tittle */}
      <div className="row">
        <div className="col-lg-12">
          <div className="section-tittle white-text text-center">
            <span>Apply process</span>
            <h2> How it works</h2>
          </div>
        </div>
      </div>
      {/* Apply Process Caption */}
      <div className="row">
        <div className="col-lg-4 col-md-6">
          <div className="single-process text-center mb-30">
            <div className="process-ion">
              <span className="flaticon-search" />
            </div>
            <div className="process-cap">
              <h5>1. Search a job</h5>
              <p>
                Sorem spsum dolor sit amsectetur adipisclit, seddo eiusmod
                tempor incididunt ut laborea.
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6">
          <div className="single-process text-center mb-30">
            <div className="process-ion">
              <span className="flaticon-curriculum-vitae" />
            </div>
            <div className="process-cap">
              <h5>2. Apply for job</h5>
              <p>
                Sorem spsum dolor sit amsectetur adipisclit, seddo eiusmod
                tempor incididunt ut laborea.
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6">
          <div className="single-process text-center mb-30">
            <div className="process-ion">
              <span className="flaticon-tour" />
            </div>
            <div className="process-cap">
              <h5>3. Get your job</h5>
              <p>
                Sorem spsum dolor sit amsectetur adipisclit, seddo eiusmod
                tempor incididunt ut laborea.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* How  Apply Process End*/}
  {/* Testimonial Start */}
  <div className="testimonial-area testimonial-padding">
    <div className="container">
      {/* Testimonial contents */}
      <div className="row d-flex justify-content-center">
        <div className="col-xl-8 col-lg-8 col-md-10">
          <div className="h1-testimonial-active dot-style">
            {/* Single Testimonial */}
            <div className="single-testimonial text-center">
              {/* Testimonial Content */}
              <div className="testimonial-caption ">
                {/* founder */}
                <div className="testimonial-founder  ">
                  <div className="founder-img mb-30">
                    <img
                      src="assets/img/testmonial/testimonial-founder.png"
                      alt=""
                    />
                    <span>Margaret Lawson</span>
                    <p>Creative Director</p>
                  </div>
                </div>
                <div className="testimonial-top-cap">
                  <p>
                    “I am at an age where I just want to be fit and healthy our
                    bodies are our responsibility! So start caring for your body
                    and it will care for you. Eat clean it will care for you and
                    workout hard.”
                  </p>
                </div>
              </div>
            </div>
            {/* Single Testimonial */}
            <div className="single-testimonial text-center">
              {/* Testimonial Content */}
              <div className="testimonial-caption ">
                {/* founder */}
                <div className="testimonial-founder  ">
                  <div className="founder-img mb-30">
                    <img
                      src="assets/img/testmonial/testimonial-founder.png"
                      alt=""
                    />
                    <span>Margaret Lawson</span>
                    <p>Creative Director</p>
                  </div>
                </div>
                <div className="testimonial-top-cap">
                  <p>
                    “I am at an age where I just want to be fit and healthy our
                    bodies are our responsibility! So start caring for your body
                    and it will care for you. Eat clean it will care for you and
                    workout hard.”
                  </p>
                </div>
              </div>
            </div>
            {/* Single Testimonial */}
            <div className="single-testimonial text-center">
              {/* Testimonial Content */}
              <div className="testimonial-caption ">
                {/* founder */}
                <div className="testimonial-founder  ">
                  <div className="founder-img mb-30">
                    <img
                      src="assets/img/testmonial/testimonial-founder.png"
                      alt=""
                    />
                    <span>Margaret Lawson</span>
                    <p>Creative Director</p>
                  </div>
                </div>
                <div className="testimonial-top-cap">
                  <p>
                    “I am at an age where I just want to be fit and healthy our
                    bodies are our responsibility! So start caring for your body
                    and it will care for you. Eat clean it will care for you and
                    workout hard.”
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Testimonial End */}
  {/* Support Company Start*/}
  <div className="support-company-area support-padding fix">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-xl-6 col-lg-6">
          <div className="right-caption">
            {/* Section Tittle */}
            <div className="section-tittle section-tittle2">
              <span>What we are doing</span>
              <h2>24k Talented people are getting Jobs</h2>
            </div>
            <div className="support-caption">
              <p className="pera-top">
                Mollit anim laborum duis au dolor in voluptate velit ess cillum
                dolore eu lore dsu quality mollit anim laborumuis au dolor in
                voluptate velit cillum.
              </p>
              <p>
                Mollit anim laborum.Duis aute irufg dhjkolohr in re voluptate
                velit esscillumlore eu quife nrulla parihatur. Excghcepteur
                signjnt occa cupidatat non inulpadeserunt mollit aboru. temnthp
                incididbnt ut labore mollit anim laborum suis aute.
              </p>
              <Link to={"/job_listing"} className="btn post-btn">                
                Apply for a job
              </Link>
            </div>
          </div>
        </div>
        <div className="col-xl-6 col-lg-6">
          <div className="support-location-img">
            <img src="assets/img/service/support-img.jpg" alt="" />
            <div className="support-img-cap text-center">
              <p>Since</p>
              <span>1994</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Support Company End*/}
  {/* Blog Area Start */}
  <div className="home-blog-area blog-h-padding">
    <div className="container">
      {/* Section Tittle */}
      <div className="row">
        <div className="col-lg-12">
          <div className="section-tittle text-center">
            <span>Our latest blog</span>
            <h2>Our recent news</h2>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-xl-6 col-lg-6 col-md-6">
          <div className="home-blog-single mb-30">
            <div className="blog-img-cap">
              <div className="blog-img">
                <img src="assets/img/blog/home-blog1.jpg" alt="" />
                {/* Blog date */}
                <div className="blog-date text-center">
                  <span>24</span>
                  <p>Now</p>
                </div>
              </div>
              <div className="blog-cap">
                <p>| Properties</p>
                <h3>
                  <a href="single-blog.html">
                    Footprints in Time is perfect House in Kurashiki
                  </a>
                </h3>
                <a href="#" className="more-btn">
                  Read more »
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-6 col-lg-6 col-md-6">
          <div className="home-blog-single mb-30">
            <div className="blog-img-cap">
              <div className="blog-img">
                <img src="assets/img/blog/home-blog2.jpg" alt="" />
                {/* Blog date */}
                <div className="blog-date text-center">
                  <span>24</span>
                  <p>Now</p>
                </div>
              </div>
              <div className="blog-cap">
                <p>| Properties</p>
                <h3>
                  <a href="single-blog.html">
                    Footprints in Time is perfect House in Kurashiki
                  </a>
                </h3>
                <a href="#" className="more-btn">
                  Read more »
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Blog Area End */}
</main>

        </>
    )
}