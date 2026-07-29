


function Topbar() {
    return(
        <>
        <div className="topbar">
            <button className="menu-toggle" id="menuToggle"><i className="bi bi-list fs-5"></i></button>
            <div className="topbar-search">
            <i className="bi bi-search"></i>
            <input type="text" placeholder="Search trips, bookings, flights…" />
            </div>
            <div className="topbar-right">
            <button className="icon-btn"><i className="bi bi-bell"></i><span className="dot"></span></button>
            <img src="https://images.unsplash.com/photo-1607346256330-dee7af15f7c5?q=80&w=200&auto=format&fit=crop" alt="Passenger avatar" style={{width:"38px", height:"38px", borderRadius:"50%",border:"1px solid var(--line)"}} />
            </div>
        </div>
        </>
    )
}
export default Topbar;