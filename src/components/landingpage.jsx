import { Link } from "react-router-dom";
import "../styles/landingpage.css"
const LandingPage = () => {
    return ( 
        
        <div className="landingPage">
            <center>
            <h1>Login Page</h1><br />
            <div className="loginOption">
                <div >
                <Link className="Alogin" to="/adminLogin">Admin Login</Link>
                </div><br />               
            </div>
            </center>
        </div>
     );
}
 
export default LandingPage;