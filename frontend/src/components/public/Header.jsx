function Header(){

    return (
        <>
            <header className ="hero" id="top">
                <div className ="container">
                    <div className ="row align-items-center gy-5">
                    <div className ="col-lg-6">
                        <span className ="eyebrow">MNL FLIGHT DECK · EST. 1946</span>
                        <h1 className ="hero-title mt-3">Island hospitality,<br /><span className ="accent">navigated by tomorrow.</span></h1>
                        <p className ="hero-sub mt-4">Aeralta pairs the warmth of Filipino service with a next‑generation route network — real‑time tracking, precision connections, and a cabin experience tuned for the modern journey across 7,641 islands and beyond.</p>
                        <div className ="d-flex flex-wrap gap-3 mt-4">
                        <a href="#book" className ="btn btn-sun">Search Flights <i className ="bi bi-arrow-up-right ms-1"></i></a>
                        <a href="#destinations" className ="btn btn-outline-cyber">Explore Routes</a>
                        </div>
                        <div className ="stat-strip">
                        <div><div className ="stat-num glow-cyan">728</div><div className ="stat-label">Destinations</div></div>
                        <div><div className ="stat-num">A350</div><div className ="stat-label">Flagship Fleet</div></div>
                        <div><div className ="stat-num glow-gold">99.2%</div><div className ="stat-label">On‑Time Ops</div></div>
                        </div>
                    </div>
                    <div className ="col-lg-6">
                        <div className ="radar-wrap">
                        <div className ="radar-ring" style={{ width: '100%', height: '100%' }}></div>
                        <div className ="radar-ring" style={{ width: '72%', height: '72%' }}></div>
                        <div className ="radar-ring" style={{ width: '42%', height: '42%' }}></div>
                        <div className ="radar-sweep"></div>
                        <div className ="radar-core"></div>
                        <svg className ="radar-path" viewBox="0 0 100 100">
                            <path d="M50 50 Q 68 30 82 18" stroke="#2fe6d0" stroke-width="0.4" fill="none" opacity="0.55" stroke-dasharray="1 2"/>
                            <path d="M50 50 Q 30 65 15 78" stroke="#f6b93b" stroke-width="0.4" fill="none" opacity="0.55" stroke-dasharray="1 2"/>
                            <path d="M50 50 Q 25 30 12 22" stroke="#2fe6d0" stroke-width="0.4" fill="none" opacity="0.4" stroke-dasharray="1 2"/>
                        </svg>
                        <div className ="radar-dot cy" style={{ top: '18%', left: '82%' }}></div>
                        <div className ="radar-dot" style={{ top: '78%', left: '15%' }}></div>
                        <div className ="radar-dot cy" style={{ top: '22%', left: '12%' }}></div>
                        <div className ="radar-plane" style={{ top: '48%', left: '66%' }}><i className ="bi bi-airplane"></i></div>
                        <span className="mono" style={{position:"absolute",bottom:"-1.8rem",left:"50%",transform:"translateX(-50%)",fontSize:".68rem",letterSpacing:".2em",color:"var(--muted-2)"}}>MNL · LIVE ROUTE GRID</span>
                        </div>
                    </div>
                    </div>
                </div>
                </header>
        </>
    )

}
export default Header;