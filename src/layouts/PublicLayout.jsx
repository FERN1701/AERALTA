import { Outlet } from "react-router-dom";
import '../assets/public/public.css'
import Navbar from "../components/public/Navbar";
import Footer from "../components/public/Footer";

function PublicLayout() {

    return (
    
       <div className="public-layout">
            {/* Navbar Here */}
            <Navbar />
           
            {/* Main Content Here */}
            <main>

                <Outlet />

            </main>
            {/* Footer */}
            <Footer />
       </div>
    );
}

export default PublicLayout;