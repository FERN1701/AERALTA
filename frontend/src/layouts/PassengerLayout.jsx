import { Outlet } from "react-router-dom";
import '../assets/passenger/passenger.css'

import Sidebar from "../components/passenger/Sidebar";
import Topbar from "../components/passenger/Topbar";
import { Routes, Route, Link } from "react-router-dom";
function PassengerLayout(){


    return(
        <>
        
            
        <Sidebar />

       
        <div className="main-wrap">

            <Topbar />

            <main>
                <Outlet/>
            </main>
        
        </div>
        
        </>
    )


}
export default PassengerLayout;