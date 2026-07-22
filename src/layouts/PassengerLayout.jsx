import { Outlet } from "react-router-dom";
import '../assets/passenger/passenger.css'

import Sidebar from "../components/passenger/Sidebar";
import Topbar from "../components/passenger/Topbar";

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