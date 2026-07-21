import { Routes, Route, Link } from "react-router-dom";

function Navbar(){
return(
    <>
    <nav className="navbar navbar-cyber navbar-expand-lg" id="mainNav">
                <div className="container">
                    <Link className="nodeco" to="/">
                    <a className="navbar-brand d-flex align-items-center gap-2" href="#top">
                    <span className="brand-mark">
                        <svg width="34" height="34" viewBox="0 0 40 40" fill="none">
                        <circle cx="20" cy="20" r="19" stroke="#f6b93b" stroke-width="1.2" opacity=".55"/>
                        <path d="M20 5 L23 17 L36 20 L23 23 L20 35 L17 23 L4 20 L17 17 Z" fill="url(#sunGrad)"/>
                        <defs><linearGradient id="sunGrad" x1="4" y1="5" x2="36" y2="35"><stop stop-color="#2fe6d0"/><stop offset="1" stop-color="#f6b93b"/></linearGradient></defs>
                        </svg>
                    </span>
                    
                    <span className="brand-word text-white">AERALTA<small>PHILIPPINE&nbsp;AIRLINES</small></span>
                    </a>
                    </Link>
                    
                    <button className="navbar-toggler border-0 text-white" type="button" data-bs-toggle="collapse" data-bs-target="#navMenu">
                    <i className="bi bi-list fs-2 text-white"></i>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navMenu">
                    <ul className="navbar-nav align-items-lg-center">
                        <li className="nav-item"><Link className="nav-link nav-link-cyber" to="/destinations">Destinations</Link></li>
                        <li className="nav-item"><a className="nav-link nav-link-cyber" href="#fleet">Fleet</a></li>
                        <li className="nav-item"><Link className="nav-link nav-link-cyber" to="/about">About Us</Link></li>
                        <li className="nav-item"><Link className="nav-link nav-link-cyber" to="/contacts">Contact</Link></li>
                        <li className="nav-item ms-lg-3 mt-2 mt-lg-0"><a href="#book" className="btn btn-sun btn-sm">Manage Booking</a></li>
                    </ul>
                    </div>
                </div>
            </nav>
    </>
)
}
export default Navbar;