


function Dashboard(){


    return(


        <>
        
            <div className="page-body">

            <div className="page-head" id="overview">
            <span className="eyebrow">Passenger Portal · Welcome Back</span>
            <h1>Good evening, Andrea.</h1>
            <p>Your next flight departs in 3 days. Here's everything you need before wheels‑up.</p>
            </div>

            <div className="pass-wrap mb-4" id="trips">
            <div className="pass-main">
                <span className="pass-eyebrow">Upcoming · Confirmed</span>
                <div className="pass-route-row">
                <div className="pass-city">
                    <div className="pass-code">MNL</div>
                    <div className="pass-city-name">Manila</div>
                    <div className="pass-city-time">Fri, Jul 25 · 11:45 PM</div>
                </div>
                <div className="pass-mid">
                    <div className="pass-flightno">AE 102 · Business</div>
                    <div className="pass-plane-line"><span></span><i className="bi bi-airplane"></i><span></span></div>
                    <div className="pass-duration">4h 05m · Non‑stop</div>
                </div>
                <div className="pass-city text-lg-end">
                    <div className="pass-code">NRT</div>
                    <div className="pass-city-name">Tokyo Narita</div>
                    <div className="pass-city-time">Sat, Jul 26 · 05:50 AM</div>
                </div>
                </div>
                <div className="pass-grid">
                <div>
                    <div className="pass-kv-label">Passenger</div>
                    <div className="pass-kv-value">A. Fernandez</div>
                </div>
                <div>
                    <div className="pass-kv-label">Aircraft</div>
                    <div className="pass-kv-value">A350‑900</div>
                </div>
                <div>
                    <div className="pass-kv-label">Gate</div>
                    <div className="pass-kv-value">T2 · G18</div>
                </div>
                <div>
                    <div className="pass-kv-label">PNR</div>
                    <div className="pass-kv-value gold mono">AE7K2L</div>
                </div>
                </div>
            </div>
            <div className="pass-stub">
                <div className="pass-qr"></div>
                <div className="pass-seat">
                <div className="pass-seat-label">Seat</div>
                <div className="pass-seat-value">3A</div>
                </div>
                <div className="pass-countdown">DEPARTS IN 3D 04H</div>
            </div>
            </div>

            <div className="row g-3 mb-4">
            <div className="col-6 col-md-3">
                <a href="#checkin" className="qa-btn"><i className="bi bi-qr-code-scan"></i><span>Online Check‑In</span></a>
            </div>
            <div className="col-6 col-md-3">
                <a href="#" className="qa-btn"><i className="bi bi-pencil-square"></i><span>Manage Booking</span></a>
            </div>
            <div className="col-6 col-md-3">
                <a href="#book" className="qa-btn"><i className="bi bi-search"></i><span>Book a Flight</span></a>
            </div>
            <div className="col-6 col-md-3">
                <a href="#rewards" className="qa-btn"><i className="bi bi-stars"></i><span>Redeem Miles</span></a>
            </div>
            </div>

            <div className="row g-3 mb-4">
            <div className="col-6 col-lg-3">
                <div className="kpi-card">
                <div className="kpi-icon"><i className="bi bi-airplane-engines"></i></div>
                <div className="kpi-label">Upcoming Trips</div>
                <div className="kpi-value">2</div>
                <div className="kpi-sub">Next: MNL → NRT</div>
                </div>
            </div>
            <div className="col-6 col-lg-3">
                <div className="kpi-card">
                <div className="kpi-icon"><i className="bi bi-stars"></i></div>
                <div className="kpi-label">Mabuhay+ Miles</div>
                <div className="kpi-value">6,800</div>
                <div className="kpi-sub">3,200 to Command Tier</div>
                </div>
            </div>
            <div className="col-6 col-lg-3">
                <div className="kpi-card">
                <div className="kpi-icon"><i className="bi bi-wallet2"></i></div>
                <div className="kpi-label">Travel Vouchers</div>
                <div className="kpi-value">₱2,450</div>
                <div className="kpi-sub">1 voucher active</div>
                </div>
            </div>
            <div className="col-6 col-lg-3">
                <div className="kpi-card">
                <div className="kpi-icon"><i className="bi bi-clock-history"></i></div>
                <div className="kpi-label">Flights Flown</div>
                <div className="kpi-value">27</div>
                <div className="kpi-sub">Since 2019</div>
                </div>
            </div>
            </div>

            <div className="row g-4 mb-4">

            <div className="col-lg-5" id="rewards">
                <div className="panel">
                <p className="panel-title">Mabuhay+ progress</p>
                <p className="panel-sub">6,800 of 10,000 miles to Command Tier</p>
                <div className="tier-progress-track"><div className="tier-progress-fill" style={{width:"68%"}}></div></div>
                <div className="tier-milestones">
                    <span className="reached">Navigator</span>
                    <span className="reached">Elite</span>
                    <span>Command</span>
                </div>
                <div className="d-flex gap-2 mt-4">
                    <button className="btn btn-sun btn-sm flex-fill">Redeem Miles</button>
                    <button className="btn btn-outline-cyber btn-sm flex-fill">View Benefits</button>
                </div>
                </div>
            </div>

            <div className="col-lg-7">
                <div className="panel">
                <p className="panel-title">Trip history</p>
                <p className="panel-sub">Recent and upcoming reservations</p>

                <div className="trip-item">
                    <div className="trip-icon"><i className="bi bi-airplane"></i></div>
                    <div>
                    <div className="trip-route">MNL → NRT</div>
                    <div className="trip-meta">AE 102 · Jul 25, 2026 · 11:45 PM</div>
                    </div>
                    <span className="trip-chip upcoming">Upcoming</span>
                </div>
                <div className="trip-item">
                    <div className="trip-icon"><i className="bi bi-airplane"></i></div>
                    <div>
                    <div className="trip-route">MNL → SIN</div>
                    <div className="trip-meta">AE 041 · Aug 14, 2026 · 06:30 AM</div>
                    </div>
                    <span className="trip-chip upcoming">Upcoming</span>
                </div>
                <div className="trip-item">
                    <div className="trip-icon"><i className="bi bi-check2"></i></div>
                    <div>
                    <div className="trip-route">CEB → MNL</div>
                    <div className="trip-meta">AE 090 · Jun 02, 2026 · 02:05 PM</div>
                    </div>
                    <span className="trip-chip completed">Completed</span>
                </div>
                <div className="trip-item">
                    <div className="trip-icon"><i className="bi bi-check2"></i></div>
                    <div>
                    <div className="trip-route">MNL → ICN</div>
                    <div className="trip-meta">AE 220 · Apr 18, 2026 · 01:10 AM</div>
                    </div>
                    <span className="trip-chip completed">Completed</span>
                </div>
                <div className="trip-item">
                    <div className="trip-icon"><i className="bi bi-x-lg"></i></div>
                    <div>
                    <div className="trip-route">MNL → SYD</div>
                    <div className="trip-meta">AE 315 · Feb 03, 2026 · 10:20 PM</div>
                    </div>
                    <span className="trip-chip cancelled">Cancelled</span>
                </div>
                </div>
            </div>
            </div>

            <div className="row g-4">

            <div className="col-lg-8" id="book">
                <div className="panel">
                <p className="panel-title">Recommended for you</p>
                <p className="panel-sub">Based on your recent trips</p>
                <div className="row g-3">
                    <div className="col-6 col-md-4">
                    <div className="dest-card" style={{backgroundImage:"url('https://images.unsplash.com/photo-1538485399081-7191377e8241?q=80&w=600&auto=format&fit=crop')"}}>
                        <div className="dest-card-body">
                        <div className="dest-card-city">Seoul</div>
                        <div className="dest-card-price">from ₱11,450</div>
                        </div>
                    </div>
                    </div>
                    <div className="col-6 col-md-4">
                    <div className="dest-card" style={{backgroundImage:"url('https://images.unsplash.com/photo-1525625293386-3f8f99389edd?q=80&w=600&auto=format&fit=crop')"}}>
                        <div className="dest-card-body">
                        <div className="dest-card-city">Singapore</div>
                        <div className="dest-card-price">from ₱9,320</div>
                        </div>
                    </div>
                    </div>
                    <div className="col-6 col-md-4">
                    <div className="dest-card" style={{backgroundImage:"url('https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?q=80&w=600&auto=format&fit=crop')"}}>
                        <div className="dest-card-body">
                        <div className="dest-card-city">Tokyo</div>
                        <div className="dest-card-price">from ₱14,990</div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>

            <div className="col-lg-4" id="payments">
                <div className="panel">
                <p className="panel-title">Payment methods</p>
                <p className="panel-sub">Manage your saved cards</p>
                <div className="pay-card">
                    <i className="bi bi-credit-card-2-front"></i>
                    <div>
                    <div className="pay-card-label">Visa •••• 4471</div>
                    <div className="pay-card-sub">Expires 08/28</div>
                    </div>
                    <span className="pay-card-default">Default</span>
                </div>
                <div className="pay-card">
                    <i className="bi bi-credit-card-2-front"></i>
                    <div>
                    <div className="pay-card-label">Mastercard •••• 2210</div>
                    <div className="pay-card-sub">Expires 02/27</div>
                    </div>
                </div>
                <button className="btn btn-outline-cyber btn-sm w-100 mt-2"><i className="bi bi-plus-lg me-1"></i>Add Payment Method</button>
                </div>
            </div>

            </div>

        </div>
        
        </>


    )


}
export default Dashboard;