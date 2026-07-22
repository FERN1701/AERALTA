


function Flights(){


    return(


        <>
        
            <section className="" id="flights">
                <div className="container-fluid">

                    <div className="page-head mb-4">
                    <span className="eyebrow">Flight Schedule · Ops Deck</span>
                    <h1 className="flt-title">Flights</h1>
                    <p className="flt-sub">Schedule new departures and track every flight currently on the board.</p>
                    </div>

                    <div className="row g-3 mb-4">
                    <div className="col-6 col-lg-3">
                        <div className="flt-stat-card">
                        <div className="flt-stat-label">Flights Today</div>
                        <div className="flt-stat-value">86</div>
                        </div>
                    </div>
                    <div className="col-6 col-lg-3">
                        <div className="flt-stat-card">
                        <div className="flt-stat-label">En Route</div>
                        <div className="flt-stat-value flt-cy">18</div>
                        </div>
                    </div>
                    <div className="col-6 col-lg-3">
                        <div className="flt-stat-card">
                        <div className="flt-stat-label">Boarding</div>
                        <div className="flt-stat-value flt-gd">6</div>
                        </div>
                    </div>
                    <div className="col-6 col-lg-3">
                        <div className="flt-stat-card">
                        <div className="flt-stat-label">Delayed</div>
                        <div className="flt-stat-value flt-rd">2</div>
                        </div>
                    </div>
                    </div>

                    <div className="row g-4">

                    <div className="col-lg-4">
                        <div className="flt-panel">
                        <div className="flt-panel-head">
                            <p className="flt-panel-title">Schedule flight</p>
                            <p className="flt-panel-sub">Add a new departure to the board</p>
                        </div>
                        <form className="row g-3" onsubmit="return false;">
                            <div className="col-12 flt-field">
                            <label>Flight Number</label>
                            <input type="text" className="form-control" placeholder="AE 102" />
                            </div>
                            <div className="col-6 flt-field">
                            <label>Origin</label>
                            <select className="form-select">
                                <option>MNL — Manila</option>
                                <option>CEB — Cebu</option>
                                <option>DVO — Davao</option>
                            </select>
                            </div>
                            <div className="col-6 flt-field">
                            <label>Destination</label>
                            <select className="form-select">
                                <option>NRT — Tokyo Narita</option>
                                <option>ICN — Seoul Incheon</option>
                                <option>SIN — Singapore</option>
                                <option>LAX — Los Angeles</option>
                                <option>SYD — Sydney</option>
                            </select>
                            </div>
                            <div className="col-6 flt-field">
                            <label>Departure Date</label>
                            <input type="date" className="form-control" />
                            </div>
                            <div className="col-6 flt-field">
                            <label>Departure Time</label>
                            <input type="time" className="form-control"/>
                            </div>
                            <div className="col-6 flt-field">
                            <label>Arrival Date</label>
                            <input type="date" className="form-control"/>
                            </div>
                            <div className="col-6 flt-field">
                            <label>Arrival Time</label>
                            <input type="time" className="form-control"/>
                            </div>
                            <div className="col-12 flt-field">
                            <label>Aircraft</label>
                            <select className="form-select">
                                <option>Airbus A350‑900</option>
                                <option>Boeing 777‑300ER</option>
                                <option>Airbus A321neo</option>
                            </select>
                            </div>
                            <div className="col-6 flt-field">
                            <label>Gate</label>
                            <input type="text" className="form-control" placeholder="G18" />
                            </div>
                            <div className="col-6 flt-field">
                            <label>Status</label>
                            <select className="form-select">
                                <option>Scheduled</option>
                                <option>Boarding</option>
                                <option>En Route</option>
                                <option>Delayed</option>
                                <option>Cancelled</option>
                            </select>
                            </div>
                            <div className="col-12 d-flex gap-2 mt-1">
                            <button className="btn btn-sun" type="submit">Schedule Flight <i className="bi bi-plus-lg ms-1"></i></button>
                            <button className="btn btn-outline-cyber" type="reset">Clear</button>
                            </div>
                        </form>
                        </div>
                    </div>

                    <div className="col-lg-8">
                        <div className="flt-panel">
                        <div className="flt-panel-head d-flex align-items-start justify-content-between flex-wrap gap-2">
                            <div>
                            <p className="flt-panel-title">Flight board</p>
                            <p className="flt-panel-sub">86 flights today · showing 7</p>
                            </div>
                            <div className="flt-filter-group">
                            <button className="flt-filter active">All</button>
                            <button className="flt-filter">Boarding</button>
                            <button className="flt-filter">En Route</button>
                            <button className="flt-filter">Delayed</button>
                            <button className="flt-filter">Landed</button>
                            </div>
                        </div>

                        <div className="table-scroll">
                            <table className="flt-table">
                            <thead>
                                <tr>
                                <th>Flight</th>
                                <th>Route</th>
                                <th>Departure</th>
                                <th>Arrival</th>
                                <th>Aircraft</th>
                                <th>Gate</th>
                                <th>Status</th>
                                <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                <td className="mono flt-code">AE 102</td>
                                <td>MNL → NRT</td>
                                <td>11:45 PM</td>
                                <td>05:50 AM</td>
                                <td>A350‑900</td>
                                <td>T2 · G18</td>
                                <td><span className="flt-status enroute"><span className="dot"></span>En Route</span></td>
                                <td className="text-end"><button className="flt-row-btn"><i className="bi bi-three-dots"></i></button></td>
                                </tr>
                                <tr>
                                <td className="mono flt-code">AE 220</td>
                                <td>MNL → ICN</td>
                                <td>01:10 AM</td>
                                <td>06:20 AM</td>
                                <td>A321neo</td>
                                <td>T2 · G21</td>
                                <td><span className="flt-status boarding"><span className="dot"></span>Boarding</span></td>
                                <td className="text-end"><button className="flt-row-btn"><i className="bi bi-three-dots"></i></button></td>
                                </tr>
                                <tr>
                                <td className="mono flt-code">AE 512</td>
                                <td>CEB → HKG</td>
                                <td>08:15 AM</td>
                                <td>10:45 AM</td>
                                <td>A321neo</td>
                                <td>T1 · G05</td>
                                <td><span className="flt-status delayed"><span className="dot"></span>Delayed 25m</span></td>
                                <td className="text-end"><button className="flt-row-btn"><i className="bi bi-three-dots"></i></button></td>
                                </tr>
                                <tr>
                                <td className="mono flt-code">AE 777</td>
                                <td>MNL → LAX</td>
                                <td>11:55 AM</td>
                                <td>08:40 AM</td>
                                <td>777‑300ER</td>
                                <td>T2 · G30</td>
                                <td><span className="flt-status enroute"><span className="dot"></span>En Route</span></td>
                                <td className="text-end"><button className="flt-row-btn"><i className="bi bi-three-dots"></i></button></td>
                                </tr>
                                <tr>
                                <td className="mono flt-code">AE 090</td>
                                <td>DVO → MNL</td>
                                <td>02:05 PM</td>
                                <td>03:35 PM</td>
                                <td>A321neo</td>
                                <td>T2 · G12</td>
                                <td><span className="flt-status landed"><span className="dot"></span>Landed</span></td>
                                <td className="text-end"><button className="flt-row-btn"><i className="bi bi-three-dots"></i></button></td>
                                </tr>
                                <tr>
                                <td className="mono flt-code">AE 315</td>
                                <td>MNL → SYD</td>
                                <td>10:20 PM</td>
                                <td>09:15 AM</td>
                                <td>A350‑900</td>
                                <td>T2 · G24</td>
                                <td><span className="flt-status boarding"><span className="dot"></span>Boarding</span></td>
                                <td className="text-end"><button className="flt-row-btn"><i className="bi bi-three-dots"></i></button></td>
                                </tr>
                                <tr>
                                <td className="mono flt-code">AE 041</td>
                                <td>MNL → SIN</td>
                                <td>06:30 AM</td>
                                <td>10:15 AM</td>
                                <td>A321neo</td>
                                <td>T2 · G09</td>
                                <td><span className="flt-status scheduled"><span className="dot"></span>Scheduled</span></td>
                                <td className="text-end"><button className="flt-row-btn"><i className="bi bi-three-dots"></i></button></td>
                                </tr>
                            </tbody>
                            </table>
                        </div>
                        </div>
                    </div>

                    </div>
                </div>
                </section>



        </>


    )


}
export default Flights;