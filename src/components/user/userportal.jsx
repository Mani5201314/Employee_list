import { Route,Routes } from "react-router-dom";
import Books from "../books";
import Home from "../home";
import Navbar from "../navbar";
import ReadBooks from "../readBook";
import { useState } from "react";
import Favourites from "./favourites";
const UserPortal = () => {
    let [cart,setCart]=useState([])
    return ( 
        <div className="userportal">
            {/* <h1>User Protal</h1> */}
            <Navbar />

            <Routes>
                <Route element={ <Home />} path="/" />
                <Route element={ <Books />} path="/books" />
                <Route element={<ReadBooks cart={cart} setCart={setCart}/>} path="/books/:id"/>
                <Route element={<Favourites cart={cart} setCart={setCart} />} path="/favourites/"/>
            </Routes>  

        </div>
     );
}
 
export default UserPortal;