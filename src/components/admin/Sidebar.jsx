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
                <span className="word">AERALTA<small>OPS DECK · ADMIN</small></span>
            </div>

            <ul className="side-nav">
                <li className="sn-label">Operations</li>
                <li><a className="side-link active" href="#overview"><i className="bi bi-grid-1x2"></i>Overview</a></li>
                <li><a className="side-link" href="#flights"><i className="bi bi-broadcast"></i>Flights<span className="badge-count">18</span></a></li>
                <li><a className="side-link" href="#bookings"><i className="bi bi-ticket-perforated"></i>Bookings</a></li>
                <li><a className="side-link" href="#fleet"><i className="bi bi-airplane"></i>Fleet</a></li>

                <li className="sn-label">Insights</li>
                <li><a className="side-link" href="#revenue"><i className="bi bi-graph-up-arrow"></i>Revenue</a></li>
                <li><a className="side-link" href="#passengers"><i className="bi bi-people"></i>Passengers</a></li>
                <li><a className="side-link" href="#alerts"><i className="bi bi-exclamation-triangle"></i>Alerts<span className="badge-count">3</span></a></li>

                <li className="sn-label">System</li>
                <li><a className="side-link" href="#"><i className="bi bi-gear"></i>Settings</a></li>
                <li><Link className="side-link" to="/"><i className="bi bi-box-arrow-right"></i>Sign out</Link></li>
            </ul>

            <div className="sidebar-admin">
                <img src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=200&auto=format&fit=crop" alt="Admin avatar" />
                <div>
                <div className="name">M. Villanueva</div>
                <div className="role">OPS ADMINISTRATOR</div>
                </div>
            </div>
        </aside>
        
        </>
    )

}
export default Sidebar