

function Fleets(){


    return(
        <>
        <section className="" id="fleet">
            <div className="container-fluid">

                <div className="page-head mb-4">
                <span className="eyebrow">Fleet Registry · Ops Deck</span>
                <h1 className="fleet-title">Fleet management</h1>
                <p className="fleet-sub">Register new aircraft and monitor the status of every tail in service.</p>
                </div>

                <div className="row g-4">

                <div className="col-lg-4">
                    <div className="fleet-panel">
                    <div className="fleet-panel-head">
                        <p className="fleet-panel-title">Add aircraft</p>
                        <p className="fleet-panel-sub">Register a new tail into the fleet</p>
                    </div>
                    <form className="row g-3" onsubmit="return false;">
                        <div className="col-12 fleet-field">
                        <label>Aircraft Type</label>
                        <select className="form-select">
                            <option>Airbus A350‑900</option>
                            <option>Boeing 777‑300ER</option>
                            <option>Airbus A321neo</option>
                            <option>Airbus A320</option>
                            <option>ATR 72‑600</option>
                        </select>
                        </div>
                        <div className="col-6 fleet-field">
                        <label>Registration No.</label>
                        <input type="text" className="form-control" placeholder="RP‑A501" />
                        </div>
                        <div className="col-6 fleet-field">
                        <label>Fleet Code</label>
                        <input type="text" className="form-control" placeholder="AE‑350‑01" />
                        </div>
                        <div className="col-6 fleet-field">
                        <label>Seat Capacity</label>
                        <input type="number" className="form-control" placeholder="295" />
                        </div>
                        <div className="col-6 fleet-field">
                        <label>Range (km)</label>
                        <input type="number" className="form-control" placeholder="15000" />
                        </div>
                        <div className="col-6 fleet-field">
                        <label>Cabin Config</label>
                        <select className="form-select">
                            <option>3‑Class</option>
                            <option>2‑Class</option>
                            <option>1‑Class</option>
                        </select>
                        </div>
                        <div className="col-6 fleet-field">
                        <label>Status</label>
                        <select className="form-select">
                            <option>Active</option>
                            <option>In Maintenance</option>
                            <option>Grounded</option>
                            <option>Standby</option>
                        </select>
                        </div>
                        <div className="col-12 fleet-field">
                        <label>Home Base</label>
                        <select className="form-select">
                            <option>MNL — Manila</option>
                            <option>CEB — Cebu</option>
                            <option>DVO — Davao</option>
                        </select>
                        </div>
                        <div className="col-12 fleet-field">
                        <label>Notes</label>
                        <textarea className="form-control" rows="3" placeholder="Delivery date, livery, special config…"></textarea>
                        </div>
                        <div className="col-12 d-flex gap-2 mt-1">
                        <button className="btn btn-sun" type="submit">Add to Fleet <i className="bi bi-plus-lg ms-1"></i></button>
                        <button className="btn btn-outline-cyber" type="reset">Clear</button>
                        </div>
                    </form>
                    </div>
                </div>

                <div className="col-lg-8">
                    <div className="fleet-panel">
                    <div className="fleet-panel-head d-flex align-items-start justify-content-between flex-wrap gap-2">
                        <div>
                        <p className="fleet-panel-title">Fleet registry</p>
                        <p className="fleet-panel-sub">120 aircraft on file · showing 6</p>
                        </div>
                        <div className="fleet-filter-group">
                        <button className="fleet-filter active">All</button>
                        <button className="fleet-filter">Active</button>
                        <button className="fleet-filter">Maintenance</button>
                        <button className="fleet-filter">Grounded</button>
                        </div>
                    </div>

                    <div className="table-scroll">
                        <table className="fleet-table">
                        <thead>
                            <tr>
                            <th>Aircraft</th>
                            <th>Reg. No.</th>
                            <th>Capacity</th>
                            <th>Range</th>
                            <th>Base</th>
                            <th>Status</th>
                            <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <td>
                                <div className="fleet-ac">
                                <span className="fleet-ac-icon"><i className="bi bi-airplane-engines"></i></span>
                                <div>
                                    <div className="fleet-ac-name">Airbus A350‑900</div>
                                    <div className="fleet-ac-code">AE‑350‑01</div>
                                </div>
                                </div>
                            </td>
                            <td className="mono">RP‑A501</td>
                            <td>295 seats</td>
                            <td>15,000 km</td>
                            <td>MNL</td>
                            <td><span className="fleet-status active"><span className="dot"></span>Active</span></td>
                            <td className="text-end"><button className="fleet-row-btn"><i className="bi bi-three-dots"></i></button></td>
                            </tr>
                            <tr>
                            <td>
                                <div className="fleet-ac">
                                <span className="fleet-ac-icon"><i className="bi bi-airplane"></i></span>
                                <div>
                                    <div className="fleet-ac-name">Boeing 777‑300ER</div>
                                    <div className="fleet-ac-code">AE‑777‑04</div>
                                </div>
                                </div>
                            </td>
                            <td className="mono">RP‑B774</td>
                            <td>370 seats</td>
                            <td>13,650 km</td>
                            <td>MNL</td>
                            <td><span className="fleet-status maintenance"><span className="dot"></span>Maintenance</span></td>
                            <td className="text-end"><button className="fleet-row-btn"><i className="bi bi-three-dots"></i></button></td>
                            </tr>
                            <tr>
                            <td>
                                <div className="fleet-ac">
                                <span className="fleet-ac-icon"><i className="bi bi-airplane-fill"></i></span>
                                <div>
                                    <div className="fleet-ac-name">Airbus A321neo</div>
                                    <div className="fleet-ac-code">AE‑321‑11</div>
                                </div>
                                </div>
                            </td>
                            <td className="mono">RP‑C321</td>
                            <td>199 seats</td>
                            <td>7,400 km</td>
                            <td>CEB</td>
                            <td><span className="fleet-status active"><span className="dot"></span>Active</span></td>
                            <td className="text-end"><button className="fleet-row-btn"><i className="bi bi-three-dots"></i></button></td>
                            </tr>
                            <tr>
                            <td>
                                <div className="fleet-ac">
                                <span className="fleet-ac-icon"><i className="bi bi-airplane-fill"></i></span>
                                <div>
                                    <div className="fleet-ac-name">Airbus A321neo</div>
                                    <div className="fleet-ac-code">AE‑321‑07</div>
                                </div>
                                </div>
                            </td>
                            <td className="mono">RP‑C317</td>
                            <td>199 seats</td>
                            <td>7,400 km</td>
                            <td>DVO</td>
                            <td><span className="fleet-status grounded"><span className="dot"></span>Grounded</span></td>
                            <td className="text-end"><button className="fleet-row-btn"><i className="bi bi-three-dots"></i></button></td>
                            </tr>
                            <tr>
                            <td>
                                <div className="fleet-ac">
                                <span className="fleet-ac-icon"><i className="bi bi-airplane-engines"></i></span>
                                <div>
                                    <div className="fleet-ac-name">Airbus A350‑900</div>
                                    <div className="fleet-ac-code">AE‑350‑02</div>
                                </div>
                                </div>
                            </td>
                            <td className="mono">RP‑A502</td>
                            <td>295 seats</td>
                            <td>15,000 km</td>
                            <td>MNL</td>
                            <td><span className="fleet-status standby"><span className="dot"></span>Standby</span></td>
                            <td className="text-end"><button className="fleet-row-btn"><i className="bi bi-three-dots"></i></button></td>
                            </tr>
                            <tr>
                            <td>
                                <div className="fleet-ac">
                                <span className="fleet-ac-icon"><i className="bi bi-airplane"></i></span>
                                <div>
                                    <div className="fleet-ac-name">Boeing 777‑300ER</div>
                                    <div className="fleet-ac-code">AE‑777‑02</div>
                                </div>
                                </div>
                            </td>
                            <td className="mono">RP‑B772</td>
                            <td>370 seats</td>
                            <td>13,650 km</td>
                            <td>MNL</td>
                            <td><span className="fleet-status active"><span className="dot"></span>Active</span></td>
                            <td className="text-end"><button className="fleet-row-btn"><i className="bi bi-three-dots"></i></button></td>
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
export default Fleets;