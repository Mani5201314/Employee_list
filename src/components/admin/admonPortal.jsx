
import { Route, Routes } from "react-router-dom";
import Home from "../home";
import Navbar from "../navbar";

import CreateEmp from "./CreateEmp";
import EmpList from "../EmpList";
import EditEmp from "../EditEmp";

const AdminPortal = () => {
    return ( 
        <div className="adminPortal">
            {/* <h2>Welcome to admin Portal</h2> */}

            <Navbar />
            <Routes>
                <Route element={ <Home />} path="/" />
                <Route element={<EmpList/> } path="/EmpList" />
                <Route element={<CreateEmp/> } path="/CreateEmp" />
                <Route element={<EditEmp/> } path="/EditEmp/:id"/>
            </Routes>          
               
        
        </div>
     );
}
 
export default AdminPortal;