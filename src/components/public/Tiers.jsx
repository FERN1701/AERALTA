
function Tiers(){

    return(
        <>
            <section className ="section-pad" id="tiers" style={{background:"var(--bg-panel)",borderTop:"1px solid var(--line)",borderBottom:"1px solid var(--line)"}}>
                <div className ="container">
                    <div className ="text-center mb-5">
                    <span className ="eyebrow justify-content-center">Loyalty Network</span>
                    <h2 className ="section-title">Mabuhay+ status tiers</h2>
                    </div>
                    <div className ="row g-4 justify-content-center">
                    <div className ="col-md-4">
                        <div className ="tier-card">
                        <div className ="tier-badge">Tier 01</div>
                        <h4 className ="display mt-2">Navigator</h4>
                        <p className ="text-muted-c small">Entry status for every new member.</p>
                        <ul className ="list-unstyled small mt-3" style={{color:"var(--muted)"}}>
                            <li className ="mb-2"><i className ="bi bi-check2 glow-cyan me-2"></i>Mileage accrual on every flight</li>
                            <li className ="mb-2"><i className ="bi bi-check2 glow-cyan me-2"></i>Standard seat selection</li>
                            <li className ="mb-2"><i className ="bi bi-check2 glow-cyan me-2"></i>Partner airline earning</li>
                        </ul>
                        </div>
                    </div>
                    <div className ="col-md-4">
                        <div className ="tier-card tier-elite">
                        <div className ="tier-badge">Tier 02</div>
                        <h4 className ="display mt-2 glow-gold">Elite</h4>
                        <p className ="text-muted-c small">For members flying 25+ segments a year.</p>
                        <ul className ="list-unstyled small mt-3" style={{color:"var(--muted)"}}>
                            <li className ="mb-2"><i className ="bi bi-check2 glow-gold me-2"></i>Priority check‑in &amp; boarding</li>
                            <li className ="mb-2"><i className ="bi bi-check2 glow-gold me-2"></i>Lounge access, all hubs</li>
                            <li className ="mb-2"><i className ="bi bi-check2 glow-gold me-2"></i>+50% bonus mileage</li>
                        </ul>
                        </div>
                    </div>
                    <div className ="col-md-4">
                        <div className ="tier-card">
                        <div className ="tier-badge">Tier 03</div>
                        <h4 className ="display mt-2">Command</h4>
                        <p className ="text-muted-c small">Our highest recognition tier.</p>
                        <ul className ="list-unstyled small mt-3" style={{color:"var(--muted)"}}>
                            <li className ="mb-2"><i className ="bi bi-check2 glow-cyan me-2"></i>Guaranteed premium seating</li>
                            <li className ="mb-2"><i className ="bi bi-check2 glow-cyan me-2"></i>Dedicated concierge line</li>
                            <li className ="mb-2"><i className ="bi bi-check2 glow-cyan me-2"></i>+100% bonus mileage</li>
                        </ul>
                        </div>
                    </div>
                    </div>
                </div>
            </section>
        </>
    )

}
export default Tiers;