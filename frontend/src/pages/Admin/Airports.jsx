

function Airports(){


    return(
        <>
        <section className="" id="fleet">
            <div className="container-fluid">

                <div className="page-head mb-4">
                <span className="eyebrow">Fleet Registry · Ops Deck</span>
                <h1 className="fleet-title">Airport Route</h1>
                <p className="fleet-sub">Register new airport and monitor the status of every tail in service.</p>
                </div>

                <div className="row g-4">

                <div className="col-lg-4">
                    <div className="fleet-panel">
                    <div className="fleet-panel-head">
                        <p className="fleet-panel-title">Airports Destination</p>
                        <p className="fleet-panel-sub">Register a new routes to serve</p>
                    </div>
                    <form className="row g-3" onsubmit="return false;">
                        <div className="col-12 fleet-field">
                            <label>Airport</label>
                            <input type="text" name="" id="" className="form-select" />
                        </div>
                        <div className="col-12 fleet-field">
                        <label>Airport Category</label>
                            <select className="form-select">
                                <option>Domestic Flight</option>
                                <option>Internantional Flight</option>
                            </select>
                        </div>
                        <div className="col-12 fleet-field">
                            <label>Address</label>
                            <input type="text" name="" id="" className="form-select" />
                        </div>
                        <div className="col-12 d-flex gap-2 mt-1">
                        <button className="btn btn-sun" type="submit">Submit <i className="bi bi-plus-lg ms-1"></i></button>
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
export default  Airports;