import { Outlet } from "react-router-dom";
import "../assets/admin/admin.css"
import Sidebar from "../components/admin/Sidebar";
import Topbar from "../components/admin/Topbar";


function AdminLayout() {

 return (
    <>
        <Sidebar />
            <div className="main-wrap">

                <Topbar />
                    <div className="page-body">

                        <main>
                            <Outlet/>
                        </main>

                    </div>
            </div>
    
    </>
 )  
}
export default AdminLayout;



//About us []
//Flights []
//Booiking []
//Boarding Sequence []
//Fleets [/]
//forms contact us []