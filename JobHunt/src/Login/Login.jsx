/* eslint-disable no-unused-vars */
import {  useState } from "react"
import {toast} from "react-toastify"
import { useNavigate } from "react-router-dom";
import axios from "axios";


export function Login(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const nav = useNavigate();
  
    const HandleLogin = (e) => {
      e.preventDefault();
      setLoading(true);
      let data = {
        email: email,
        password: password,
      };
  
      axios.post("http://localhost:3030/api/users/login", data)
        .then((res) => {
          if (res.data.success) {
            sessionStorage.setItem("token", res.data.token);
            sessionStorage.setItem("name", res.data.data.name);
            sessionStorage.setItem("userId", res.data.data._id);
            sessionStorage.setItem("userType", res.data.data.userType);
  
            if (res.data.data.userType === 1) {
              toast.success(res.data.message, { position: 'top-center' });
              setTimeout(() => {
                setLoading(false);
                nav("/admin");
              }, 2000);
            } 
             else if (res.data.data.userType === 2) {
              sessionStorage.setItem("customerId", res.data.data.customerId);
              toast.success(res.data.message, { position: 'top-center' });
              setTimeout(() => {
                setLoading(false);
                nav("/");
              }, 2000);
            }
          } else {
            toast.error(res.data.message, { position: 'top-center' });
            setLoading(false);
          }
        })
        .catch((err) => {
          toast.error(err.message, { position: 'top-center' });
          setLoading(false);
        });
    };
  

    return(
        <>
  
  {/* ================ Login section start ================= */}
    <div className="container" style={{marginLeft:"40%"}}>
      <div className="row">
        <div className="col-12">
          <h1 className="mt-5 mb-5">Login Here</h1>
        </div>
        <div className="col-lg-8">
          <form className="form-contact contact_form" onSubmit={HandleLogin}>
            <div className="row">
                <div className="col-sm-6">
                    <div className="form-group">
                        <h5>Enter Your Email</h5>
                        <input
                            className="form-control valid"
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e)=>{setEmail(e.target.value)}}
                        />
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-sm-6">
                    <div className="form-group">
                    <h5>Enter Your Password</h5>
                    <input
                        className="form-control valid"
                        type="password"
                        placeholder="Enter your password"
                        value={password}
                        onChange={(e)=>{setPassword(e.target.value)}}
                    />
                    </div>
                </div>
            </div>

            <div className="form-group mt-3">
              <button type="submit" className="button button-contactForm boxed-btn"> Log In! </button>
            </div>
          </form>
        </div>
        
      </div>
    </div>
  {/* ================ Login section end ================= */}
</>

    )
}