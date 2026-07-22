

function BookingDetails(){


    return(

        <>
        
            <section className="section-pad" id="booking-details">
                <div className="container-fluid">

                    <a href="#bookings" className="bkd-back"><i className="bi bi-arrow-left"></i>Back to bookings</a>

                    <div className="bkd-header mb-4">
                    <div>
                        <span className="eyebrow">Reservation Record</span>
                        <h1 className="bkd-title">Booking <span className="mono">AE7K2L</span></h1>
                        <p className="bkd-sub">Created Jul 14, 2026 · 10:42 AM · via Aeralta.com</p>
                    </div>
                    <div className="bkd-header-actions">
                        <span className="bk-chip confirmed bkd-status-chip"><span className="dot"></span>Confirmed</span>
                        <button className="btn btn-outline-cyber btn-sm"><i className="bi bi-envelope me-1"></i>Resend E‑ticket</button>
                        <button className="btn btn-sun btn-sm"><i className="bi bi-printer me-1"></i>Print</button>
                    </div>
                    </div>

                    <div className="row g-4">
                    
                    <div className="col-lg-8">

                        <div className="bkd-panel mb-4">
                        <div className="bkd-panel-head">
                            <p className="bkd-panel-title">Passenger</p>
                        </div>
                        <div className="bkd-pax-row">
                            <img className="bkd-pax-photo" src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200&auto=format&fit=crop" alt="Passenger photo" />
                            <div className="bkd-pax-info">
                            <div className="bkd-pax-name">Juan Dela Cruz</div>
                            <div className="bkd-pax-meta">Mabuhay+ · <span className="bkd-tier">Elite Tier</span></div>
                            </div>
                            <div className="bkd-pax-contact">
                            <div><i className="bi bi-envelope"></i> juan.delacruz@email.com</div>
                            <div><i className="bi bi-telephone"></i> +63 917 555 0142</div>
                            </div>
                        </div>
                        <div className="bkd-grid mt-3">
                            <div>
                            <div className="bkd-kv-label">Passport No.</div>
                            <div className="bkd-kv-value mono">P4820157X</div>
                            </div>
                            <div>
                            <div className="bkd-kv-label">Nationality</div>
                            <div className="bkd-kv-value">Philippines</div>
                            </div>
                            <div>
                            <div className="bkd-kv-label">Date of Birth</div>
                            <div className="bkd-kv-value">Mar 08, 1990</div>
                            </div>
                            <div>
                            <div className="bkd-kv-label">Frequent Flyer No.</div>
                            <div className="bkd-kv-value mono">MB‑00219841</div>
                            </div>
                        </div>
                        </div>

                        <div className="bkd-panel mb-4">
                        <div className="bkd-panel-head">
                            <p className="bkd-panel-title">Flight itinerary</p>
                        </div>

                        <div className="bkd-route">
                            <div className="bkd-route-end">
                            <div className="bkd-route-code">MNL</div>
                            <div className="bkd-route-city">Manila</div>
                            <div className="bkd-route-time">11:45 PM · Jul 22</div>
                            </div>
                            <div className="bkd-route-mid">
                            <div className="bkd-route-flightno mono">AE 102</div>
                            <div className="bkd-route-line"><span></span><i className="bi bi-airplane"></i><span></span></div>
                            <div className="bkd-route-duration">4h 05m · Non‑stop</div>
                            </div>
                            <div className="bkd-route-end text-lg-end">
                            <div className="bkd-route-code">NRT</div>
                            <div className="bkd-route-city">Tokyo Narita</div>
                            <div className="bkd-route-time">05:50 AM · Jul 23</div>
                            </div>
                        </div>

                        <div className="bkd-grid mt-4">
                            <div>
                            <div className="bkd-kv-label">Aircraft</div>
                            <div className="bkd-kv-value">Airbus A350‑900</div>
                            </div>
                            <div>
                            <div className="bkd-kv-label">Cabin / Class</div>
                            <div className="bkd-kv-value">Business</div>
                            </div>
                            <div>
                            <div className="bkd-kv-label">Seat</div>
                            <div className="bkd-kv-value mono">3A</div>
                            </div>
                            <div>
                            <div className="bkd-kv-label">Gate / Terminal</div>
                            <div className="bkd-kv-value">T2 · G18</div>
                            </div>
                            <div>
                            <div className="bkd-kv-label">Baggage Allowance</div>
                            <div className="bkd-kv-value">2 × 32kg</div>
                            </div>
                            <div>
                            <div className="bkd-kv-label">Ticket Number</div>
                            <div className="bkd-kv-value mono">079‑4821059331</div>
                            </div>
                        </div>
                        </div>

                        <div className="bkd-panel">
                        <div className="bkd-panel-head">
                            <p className="bkd-panel-title">Booking timeline</p>
                        </div>
                        <div className="bkd-timeline">
                            <div className="bkd-tl-item done">
                            <div className="bkd-tl-time">Jul 14 · 10:42 AM</div>
                            <div className="bkd-tl-text">Booking created and payment authorized</div>
                            </div>
                            <div className="bkd-tl-item done">
                            <div className="bkd-tl-time">Jul 14 · 10:43 AM</div>
                            <div className="bkd-tl-text">E‑ticket issued and emailed to passenger</div>
                            </div>
                            <div className="bkd-tl-item done">
                            <div className="bkd-tl-time">Jul 18 · 03:10 PM</div>
                            <div className="bkd-tl-text">Seat upgraded to 3A (Business) via Mabuhay+ points</div>
                            </div>
                            <div className="bkd-tl-item current">
                            <div className="bkd-tl-time">Jul 22 · Today</div>
                            <div className="bkd-tl-text">Awaiting online check‑in window (opens 24h before departure)</div>
                            </div>
                        </div>
                        </div>

                    </div>

                    <div className="col-lg-4">

                        <div className="bkd-panel mb-4">
                        <div className="bkd-panel-head">
                            <p className="bkd-panel-title">Fare summary</p>
                        </div>
                        <div className="bkd-fare-row">
                            <span>Base fare</span><span>₱38,900</span>
                        </div>
                        <div className="bkd-fare-row">
                            <span>Taxes &amp; surcharges</span><span>₱6,750</span>
                        </div>
                        <div className="bkd-fare-row">
                            <span>Seat upgrade</span><span>₱2,550</span>
                        </div>
                        <div className="bkd-fare-row bkd-fare-total">
                            <span>Total paid</span><span>₱48,200</span>
                        </div>
                        <div className="bkd-pay-method">
                            <i className="bi bi-credit-card-2-front"></i>
                            <div>
                            <div className="bkd-pay-label">Visa •••• 4471</div>
                            <div className="bkd-pay-sub mono">TXN‑9284710558</div>
                            </div>
                        </div>
                        </div>

                        <div className="bkd-panel">
                        <div className="bkd-panel-head">
                            <p className="bkd-panel-title">Manage booking</p>
                        </div>
                        <div className="d-grid gap-2">
                            <button className="btn btn-outline-cyber btn-sm text-start"><i className="bi bi-pencil-square me-2"></i>Edit passenger details</button>
                            <button className="btn btn-outline-cyber btn-sm text-start"><i className="bi bi-arrow-left-right me-2"></i>Rebook flight</button>
                            <button className="btn btn-outline-cyber btn-sm text-start"><i className="bi bi-person-plus me-2"></i>Add companion</button>
                            <button className="btn btn-outline-cyber btn-sm text-start bkd-danger"><i className="bi bi-x-circle me-2"></i>Cancel booking</button>
                        </div>
                        </div>

                    </div>

                    </div>
                </div>
                </section>


        
        </>

    )


}
export default BookingDetails;