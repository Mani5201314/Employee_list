import { useRef } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import "../../styles/adminlogin.css"

const UserLogin = () => {

    let navigate= useNavigate()

    let gmail=useRef()
    let password=useRef()

    let submit=()=>{
        navigate('/userPortal')
    }

    return ( 
        <div className="adminLogin">
            <center>
            <h1 id="hi">User Login</h1><br />
            <div className="adminForm">
                <form onSubmit={submit}>
                    <div>
                      Email:  <input className="adminEmail" ref={gmail} type="email" placeholder="Enter your Email id"  />
                    </div ><br />
                    <div>
                     Password:   <input className="adminEmail" ref={password} type="password" placeholder="Enter your password"  />
                    </div><br />
                    <div className="loginBtm">
                        <button className="adminEmail">Login</button>
                    </div>
                </form>
            </div>
            </center>
        </div>
     );
}
 
export default UserLogin;