import "../styles/navbar.css";
import { Link, useLocation } from "react-router-dom";
const Navbar = () => {
  let location = useLocation();
  let path = location.pathname.startsWith("/adminPortal");

  return (
    <div className="links">
      <div>
        <div><img id="logo" src="/images/logo.jpeg" width={80} alt="" /></div>
      </div>
      <div>
        <Link id="space" to="/adminPortal">
          Home
        </Link>
      </div>

      <div>
        <Link id="space" to="/adminPortal/EmpList">
          Employee List
        </Link>
      </div>

      <div>
        <Link id="space" to="/adminPortal/CreateEmp">
          Create Employee
        </Link>
      </div>

      <div>
        {" "}
        <Link id="space" to="/adminlogin">
          Logout
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
