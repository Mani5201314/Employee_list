import { useRef } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import "../../styles/adminlogin.css"

const AdminLogin = () => {

    let navigate= useNavigate()

    let gmail=useRef()
    let password=useRef()

    let submit =(e)=>{
    e.preventDefault()
        let admin ={
            gmail:"",
            password:""
        }
        if ( gmail.current.value == admin.gmail && password.current.value == admin.password ) {
            navigate('/adminPortal')
        } else {
            alert("invaild admin credentials")
            
        }
}

    return ( 
        <div className="adminLogin">
            <center>
            <h1 id="hi">Admin Login</h1><br />
            <div className="adminForm">
                <form onSubmit={submit}>
                    <div>
                      Email: <input className="adminEmail" ref={gmail} type="email" placeholder="Enter your Email id"  />
                    </div ><br />
                    <div>
                     Password:   <input className="adminpassword" ref={password} type="password" placeholder="Enter your password"  />
                    </div><br />
                    <div className="loginBtm">
                        <button className="login">Login</button>
                    </div>
                </form>
            </div>
            </center>
        </div>
     );
}
 
export default AdminLogin;