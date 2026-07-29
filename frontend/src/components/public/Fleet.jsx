function Fleet(){
    return (
        <>
            <section className ="section-pad" id="fleet" style={{background: "var(--bg-panel)", borderTop: "1px solid var(--line)", borderBottom: "1px solid var(--line)"}}>
                <div className ="container">
                    <span className ="eyebrow">Flight Systems</span>
                    <h2 className ="section-title mb-4">The fleet, decoded</h2>
                    <div className ="row g-4">
                    <div className ="col-lg-4">
                        <div className ="fleet-card">
                        <i className ="bi bi-airplane-engines fs-2 glow-cyan"></i>
                        <h5 className ="mt-3 mb-0">Airbus A350‑900</h5>
                        <p className ="text-muted-c small mb-0">Long‑haul flagship</p>
                        <ul className ="fleet-specs">
                            <li><span>Range</span><span>15,000 km</span></li>
                            <li><span>Seats</span><span>295</span></li>
                            <li><span>Cabins</span><span>3‑class</span></li>
                            <li><span>Cruise Mach</span><span>0.85</span></li>
                        </ul>
                        </div>
                    </div>
                    <div className ="col-lg-4">
                        <div className ="fleet-card">
                        <i className ="bi bi-airplane fs-2 glow-gold"></i>
                        <h5 className ="mt-3 mb-0">Boeing 777‑300ER</h5>
                        <p className ="text-muted-c small mb-0">Trans‑Pacific workhorse</p>
                        <ul className ="fleet-specs">
                            <li><span>Range</span><span>13,650 km</span></li>
                            <li><span>Seats</span><span>370</span></li>
                            <li><span>Cabins</span><span>3‑class</span></li>
                            <li><span>Cruise Mach</span><span>0.84</span></li>
                        </ul>
                        </div>
                    </div>
                    <div className ="col-lg-4">
                        <div className ="fleet-card">
                        <i className ="bi bi-airplane-fill fs-2 glow-cyan"></i>
                        <h5 className ="mt-3 mb-0">Airbus A321neo</h5>
                        <p className ="text-muted-c small mb-0">Regional &amp; inter‑island</p>
                        <ul className ="fleet-specs">
                            <li><span>Range</span><span>7,400 km</span></li>
                            <li><span>Seats</span><span>199</span></li>
                            <li><span>Cabins</span><span>2‑class</span></li>
                            <li><span>Cruise Mach</span><span>0.82</span></li>
                        </ul>
                        </div>
                    </div>
                    </div>
                </div>
                </section>
        </>
    )
}
export default Fleet;