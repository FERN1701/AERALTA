import { Routes, Route, Link } from "react-router-dom";

function Sidebar() {
    

        return(
            <>
            <div className="sidebar-backdrop" id="sidebarBackdrop"></div>

            <aside className="sidebar" id="sidebar">
            <div className="sidebar-brand">
                <svg width="30" height="30" viewBox="0 0 40 40" fill="none">
                <path d="M20 5 L23 17 L36 20 L23 23 L20 35 L17 23 L4 20 L17 17 Z" fill="url(#sg)"/>
                <defs><linearGradient id="sg" x1="4" y1="5" x2="36" y2="35"><stop stop-color="#2fe6d0"/><stop offset="1" stop-color="#f6b93b"/></linearGradient></defs>
                </svg>
                <span className="word">AERALTA<small>MY ACCOUNT</small></span>
            </div>

            <ul className="side-nav">
                <li className="sn-label">Travel</li>
                <li><Link className="side-link active" to="/myflight"><i className="bi bi-grid-1x2"></i>Overview</Link></li>
                <li><a className="side-link" href="#trips"><i className="bi bi-airplane"></i>My Trips<span className="badge-count">2</span></a></li>
                <li><a className="side-link" href="#checkin"><i className="bi bi-qr-code-scan"></i>Check‑In</a></li>
                <li><a className="side-link" href="#book"><i className="bi bi-search"></i>Book a Flight</a></li>

                <li className="sn-label">Rewards</li>
                <li><a className="side-link" href="#rewards"><i className="bi bi-stars"></i>Mabuhay+</a></li>
                <li><a className="side-link" href="#payments"><i className="bi bi-credit-card"></i>Payment Methods</a></li>

                <li className="sn-label">Account</li>
                <li><Link className="side-link" to="/myflight/profile"><i className="bi bi-person"></i>Profile</Link></li>
                <li><a className="side-link" href="#"><i className="bi bi-gear"></i>Settings</a></li>
                <li><Link className="side-link" to="/"><i className="bi bi-box-arrow-right"></i>Sign out</Link></li>
            </ul>

            <div className="sidebar-tier">
                <div className="sidebar-tier-label">Mabuhay+ Status</div>
                <div className="sidebar-tier-ring">
                <div className="tier-ring"><div className="tier-ring-inner">68%</div></div>
                <div>
                    <div className="sidebar-tier-name">Elite Tier</div>
                    <div className="sidebar-tier-sub">6,800 / 10,000 mi</div>
                </div>
                </div>
            </div>
            </aside>
            </>
        )


}
export default Sidebar