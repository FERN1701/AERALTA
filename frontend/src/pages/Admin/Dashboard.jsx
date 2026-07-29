

function Dashboard(){


    return(

        <>
        
         <div className="page-head" id="overview">
            <span className="eyebrow">Ops Deck · Real‑Time</span>
            <h1>Good morning, Mika. Here's today's grid.</h1>
            </div>

            <div className="row g-3 mb-4">
            <div className="col-6 col-lg-3">
                <div className="kpi-card">
                <div className="kpi-icon"><i className="bi bi-cash-coin"></i></div>
                <div className="kpi-label">Revenue Today</div>
                <div className="kpi-value">₱18.4M</div>
                <span className="kpi-delta up"><i className="bi bi-arrow-up-right"></i>+6.2%</span>
                </div>
            </div>
            <div className="col-6 col-lg-3">
                <div className="kpi-card">
                <div className="kpi-icon"><i className="bi bi-airplane-engines"></i></div>
                <div className="kpi-label">Active Flights</div>
                <div className="kpi-value">18</div>
                <span className="kpi-delta up"><i className="bi bi-arrow-up-right"></i>+2 vs yesterday</span>
                </div>
            </div>
            <div className="col-6 col-lg-3">
                <div className="kpi-card">
                <div className="kpi-icon"><i className="bi bi-clock-history"></i></div>
                <div className="kpi-label">On‑Time Rate</div>
                <div className="kpi-value">99.2%</div>
                <span className="kpi-delta down"><i className="bi bi-arrow-down-right"></i>-0.4%</span>
                </div>
            </div>
            <div className="col-6 col-lg-3">
                <div className="kpi-card">
                <div className="kpi-icon"><i className="bi bi-ticket-perforated"></i></div>
                <div className="kpi-label">New Bookings</div>
                <div className="kpi-value">1,204</div>
                <span className="kpi-delta up"><i className="bi bi-arrow-up-right"></i>+11.8%</span>
                </div>
            </div>
            </div>

            <div className="row g-3 mb-4" id="revenue">
            <div className="col-lg-8">
                <div className="panel">
                <div className="panel-head">
                    <div>
                    <p className="panel-title">Revenue trend</p>
                    <p className="panel-sub">Last 14 days, gross bookings (₱M)</p>
                    </div>
                </div>
                <canvas id="revenueChart" height="110"></canvas>
                </div>
            </div>
            <div className="col-lg-4">
                <div className="panel">
                <div className="panel-head">
                    <div>
                    <p className="panel-title">Bookings by route</p>
                    <p className="panel-sub">This week, top 5</p>
                    </div>
                </div>
                <canvas id="routeChart" height="150"></canvas>
                </div>
            </div>
            </div>

            <div className="row g-3 mb-4" id="flights">
            <div className="col-lg-8">
                <div className="panel">
                <div className="panel-head">
                    <div>
                    <p className="panel-title">Live ops board</p>
                    <p className="panel-sub">Flights airborne or boarding, updated every 30s</p>
                    </div>
                </div>
                <div className="table-scroll">
                    <table className="ops-table">
                    <thead>
                        <tr><th>Flight</th><th>Route</th><th>Status</th><th>Progress</th><th>Gate</th><th>Aircraft</th></tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td className="flight-code">AE 102</td>
                        <td>MNL → NRT</td>
                        <td><span className="status-dot enroute"></span>En route</td>
                        <td><div className="route-progress"><span style={{width:"64%"}}></span></div></td>
                        <td>T2 · G18</td>
                        <td>A350‑900</td>
                        </tr>
                        <tr>
                        <td className="flight-code">AE 220</td>
                        <td>MNL → ICN</td>
                        <td><span className="status-dot boarding"></span>Boarding</td>
                        <td><div className="route-progress"><span style={{width:"8%"}}></span></div></td>
                        <td>T2 · G21</td>
                        <td>A321neo</td>
                        </tr>
                        <tr>
                        <td className="flight-code">AE 512</td>
                        <td>CEB → HKG</td>
                        <td><span className="status-dot delayed"></span>Delayed 25m</td>
                        <td><div className="route-progress"><span style={{width:"0%"}}></span></div></td>
                        <td>T1 · G05</td>
                        <td>A321neo</td>
                        </tr>
                        <tr>
                        <td className="flight-code">AE 777</td>
                        <td>MNL → LAX</td>
                        <td><span className="status-dot enroute"></span>En route</td>
                        <td><div className="route-progress"><span style={{width:"38%"}}></span></div></td>
                        <td>T2 · G30</td>
                        <td>777‑300ER</td>
                        </tr>
                        <tr>
                        <td className="flight-code">AE 090</td>
                        <td>DVO → MNL</td>
                        <td><span className="status-dot landed"></span>Landed</td>
                        <td><div className="route-progress"><span style={{width:"100%"}}></span></div></td>
                        <td>T2 · G12</td>
                        <td>A321neo</td>
                        </tr>
                        <tr>
                        <td className="flight-code">AE 315</td>
                        <td>MNL → SYD</td>
                        <td><span className="status-dot boarding"></span>Boarding</td>
                        <td><div className="route-progress"><span style={{width:"4%"}}></span></div></td>
                        <td>T2 · G24</td>
                        <td>A350‑900</td>
                        </tr>
                    </tbody>
                    </table>
                </div>
                </div>
            </div>

            <div className="col-lg-4" id="alerts">
                <div className="panel">
                <div className="panel-head">
                    <div>
                    <p className="panel-title">System log</p>
                    <p className="panel-sub">Latest ops events</p>
                    </div>
                </div>
                <div className="log-feed">
                    <div className="log-line"><span className="log-time">08:41</span><span className="log-tag warn">WARN</span><span className="log-msg">AE 512 delayed 25m — ground crew reassigned to gate 05.</span></div>
                    <div className="log-line"><span className="log-time">08:33</span><span className="log-tag info">INFO</span><span className="log-msg">AE 090 landed MNL, gate 12, on schedule.</span></div>
                    <div className="log-line"><span className="log-time">08:20</span><span className="log-tag info">INFO</span><span className="log-msg">AE 220 began boarding at gate 21.</span></div>
                    <div className="log-line"><span className="log-time">07:58</span><span className="log-tag err">ALERT</span><span className="log-msg">Weather advisory issued for HKG approach corridor.</span></div>
                    <div className="log-line"><span className="log-time">07:44</span><span className="log-tag info">INFO</span><span className="log-msg">AE 102 reached cruising altitude, FL370.</span></div>
                    <div className="log-line"><span className="log-time">07:30</span><span className="log-tag warn">WARN</span><span className="log-msg">Fuel telemetry variance on AE 777 — within tolerance.</span></div>
                    <div className="log-line"><span className="log-time">07:12</span><span className="log-tag info">INFO</span><span className="log-msg">AE 315 crew briefing completed, gate 24.</span></div>
                </div>
                </div>
            </div>
            </div>

            <div className="row g-3 mb-2" id="bookings">
            <div className="col-12">
                <div className="panel">
                <div className="panel-head">
                    <div>
                    <p className="panel-title">Recent bookings</p>
                    <p className="panel-sub">Latest 6 transactions across all channels</p>
                    </div>
                </div>
                <div className="table-scroll">
                    <table className="ops-table">
                    <thead>
                        <tr><th>Passenger</th><th>Route</th><th>Class</th><th>Amount</th><th>Status</th></tr>
                    </thead>
                    <tbody>
                        <tr><td>J. Dela Cruz</td><td>MNL → NRT</td><td>Business</td><td>₱48,200</td><td><span className="chip chip-confirmed">Confirmed</span></td></tr>
                        <tr><td>A. Santos</td><td>MNL → ICN</td><td>Economy</td><td>₱11,450</td><td><span className="chip chip-confirmed">Confirmed</span></td></tr>
                        <tr><td>R. Cruz</td><td>CEB → HKG</td><td>Economy</td><td>₱9,980</td><td><span className="chip chip-pending">Pending</span></td></tr>
                        <tr><td>K. Reyes</td><td>MNL → LAX</td><td>Premium Econ.</td><td>₱62,300</td><td><span className="chip chip-confirmed">Confirmed</span></td></tr>
                        <tr><td>L. Fernandez</td><td>MNL → SIN</td><td>Economy</td><td>₱9,320</td><td><span className="chip chip-cancelled">Cancelled</span></td></tr>
                        <tr><td>D. Ramos</td><td>MNL → SYD</td><td>Business</td><td>₱71,500</td><td><span className="chip chip-pending">Pending</span></td></tr>
                    </tbody>
                    </table>
                </div>
                </div>
            </div>
            </div>
        
        </>


    )

}

export default Dashboard;