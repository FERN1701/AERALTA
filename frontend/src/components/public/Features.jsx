function Features(){

    return(
        <>
        <section className ="section-pad">
            <div className ="container">
                <div className ="row g-4">
                <div className ="col-md-6 col-lg-3">
                    <div className ="feat-icon"><i className ="bi bi-broadcast"></i></div>
                    <h6 className ="fw-bold">Live Route Tracking</h6>
                    <p className ="text-muted-c small">Follow your aircraft in real time from gate to gate, down to the minute.</p>
                </div>
                <div className ="col-md-6 col-lg-3">
                    <div className ="feat-icon"><i className ="bi bi-cup-hot"></i></div>
                    <h6 className ="fw-bold">Filipino Hospitality</h6>
                    <p className ="text-muted-c small">Warm service and regional flavors, curated by our onboard culinary team.</p>
                </div>
                <div className ="col-md-6 col-lg-3">
                    <div className ="feat-icon"><i className ="bi bi-shield-check"></i></div>
                    <h6 className ="fw-bold">Precision Safety</h6>
                    <p className ="text-muted-c small">Fleet‑wide predictive maintenance monitored around the clock.</p>
                </div>
                <div className ="col-md-6 col-lg-3">
                    <div className ="feat-icon"><i className ="bi bi-wifi"></i></div>
                    <h6 className ="fw-bold">Grid‑Speed Wi‑Fi</h6>
                    <p className ="text-muted-c small">Stay connected at cruising altitude with fleet‑wide broadband.</p>
                </div>
                </div>
            </div>
            </section>
        </>
    )
}
export default Features;