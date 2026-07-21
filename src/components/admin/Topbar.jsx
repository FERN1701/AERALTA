

function Topbar(){

    return(
        <>
        
            <div className="topbar">
                <button className="menu-toggle" id="menuToggle"><i className="bi bi-list fs-5"></i></button>
                <div className="topbar-search">
                <i className="bi bi-search"></i>
                <input type="text" placeholder="Search flight, booking, or passenger…" />
                </div>
                <div className="topbar-right">
                <span className="live-pill d-none d-md-inline-flex"><span className="blip"></span>GRID LIVE</span>
                <button className="icon-btn"><i className="bi bi-bell"></i><span className="dot"></span></button>
                <img src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=200&auto=format&fit=crop" alt="Admin avatar" style={{width:"38px",height:"38px",borderRadius:"50%",border:"1px solid var(--line)"}} />
                </div>
            </div>
        
        </>
    )

}
export default Topbar;