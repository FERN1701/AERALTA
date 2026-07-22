
import { Routes, Route, Link } from "react-router-dom";
function Bookings(){
    const sampleBookings = [
        {
            pnr: "AE7K2L",
            passenger: "J. Dela Cruz",
            flight: "AE 102",
            route: "MNL → NRT",
            class: "Business",
            seat: "3A",
            amount: "₱48,200",
            status: "Confirmed"
        },
        {
            pnr: "BX9M8Q",
            passenger: "Maria Santos",
            flight: "AE 205",
            route: "MNL → ICN",
            class: "Economy",
            seat: "21C",
            amount: "₱18,500",
            status: "Pending"
        },
        {
            pnr: "CT5R1Z",
            passenger: "Juan Reyes",
            flight: "AE 330",
            route: "CEB → SIN",
            class: "Premium Economy",
            seat: "12A",
            amount: "₱22,300",
            status: "Confirmed"
        },
        {
            pnr: "DL8X4N",
            passenger: "Anna Cruz",
            flight: "AE 410",
            route: "MNL → HKG",
            class: "Economy",
            seat: "18F",
            amount: "₱13,700",
            status: "Cancelled"
        },
        {
            pnr: "EM2K7P",
            passenger: "Robert Lim",
            flight: "AE 115",
            route: "MNL → BKK",
            class: "Business",
            seat: "4C",
            amount: "₱31,600",
            status: "Confirmed"
        },
        {
            pnr: "FN6V9J",
            passenger: "Karen Garcia",
            flight: "AE 501",
            route: "DVO → MNL",
            class: "Economy",
            seat: "25D",
            amount: "₱8,900",
            status: "Pending"
        },
        {
            pnr: "GP4H3L",
            passenger: "Michael Tan",
            flight: "AE 620",
            route: "MNL → LAX",
            class: "Business",
            seat: "2A",
            amount: "₱86,500",
            status: "Confirmed"
        },
        {
            pnr: "HQ8W2E",
            passenger: "Sophia Ramos",
            flight: "AE 710",
            route: "MNL → SYD",
            class: "Premium Economy",
            seat: "10B",
            amount: "₱39,400",
            status: "Pending"
        },
        {
            pnr: "IR3Y5T",
            passenger: "Daniel Flores",
            flight: "AE 825",
            route: "CEB → ICN",
            class: "Economy",
            seat: "19E",
            amount: "₱20,800",
            status: "Cancelled"
        },
        {
            pnr: "JS1P6M",
            passenger: "Patricia Gomez",
            flight: "AE 915",
            route: "MNL → DXB",
            class: "Business",
            seat: "5D",
            amount: "₱45,900",
            status: "Confirmed"
        },
        
        
    ];
    return(
        <>
        
            <section className="section-pad" id="bookings">
                <div className="container-fluid">

                    <div className="page-head mb-4">
                    <span className="eyebrow">Reservations · Ops Deck</span>
                    <h1 className="bk-title">Bookings</h1>
                    <p className="bk-sub">Every reservation across all channels, in one manifest.</p>
                    </div>

                    <div className="row g-3 mb-4">
                    <div className="col-6 col-lg-3">
                        <div className="bk-stat-card">
                        <div className="bk-stat-label">Total Bookings</div>
                        <div className="bk-stat-value">4,812</div>
                        </div>
                    </div>
                    <div className="col-6 col-lg-3">
                        <div className="bk-stat-card">
                        <div className="bk-stat-label">Confirmed</div>
                        <div className="bk-stat-value bk-cy">4,102</div>
                        </div>
                    </div>
                    <div className="col-6 col-lg-3">
                        <div className="bk-stat-card">
                        <div className="bk-stat-label">Pending</div>
                        <div className="bk-stat-value bk-gd">548</div>
                        </div>
                    </div>
                    <div className="col-6 col-lg-3">
                        <div className="bk-stat-card">
                        <div className="bk-stat-label">Cancelled</div>
                        <div className="bk-stat-value bk-rd">162</div>
                        </div>
                    </div>
                    </div>

                    <div className="bk-panel">

                    <div className="bk-panel-head">
                        <div>
                        <p className="bk-panel-title">Booking manifest</p>
                        <p className="bk-panel-sub">4,812 records on file · showing 8</p>
                        </div>

                        <div className="bk-controls">
                        <div className="bk-search">
                            <i className="bi bi-search"></i>
                            <input type="text" placeholder="Search PNR, passenger, or flight…" />
                        </div>
                        <div className="bk-filter-group">
                            <button className="bk-filter active">All</button>
                            <button className="bk-filter">Confirmed</button>
                            <button className="bk-filter">Pending</button>
                            <button className="bk-filter">Cancelled</button>
                        </div>
                        </div>
                    </div>

                    <div className="table-scroll">
                        <table className="bk-table">
                        <thead>
                            <tr>
                            <th>PNR</th>
                            <th>Passenger</th>
                            <th>Flight</th>
                            <th>Route</th>
                            <th>Class</th>
                            <th>Seat</th>
                            <th>Amount</th>
                            <th>Status</th>
                            <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                sampleBookings.map((booking) =>(
                                    <tr key={booking.pnr}>
                                        <td className="mono">{booking.pnr}</td>
                                        <td>
                                            <div className="bk-pax">
                                            <img src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=100&auto=format&fit=crop" alt=""/>
                                            <span>{booking.passenger}</span>
                                            </div>
                                        </td>
                                        <td className="mono">{booking.flight}</td>
                                        <td>{booking.route}</td>
                                        <td>{booking.class}</td>
                                        <td className="mono">{booking.seat}</td>
                                        <td>{booking.amount}</td>
                                        
                                        <td>
                                            <span className={`bk-chip ${
                                                booking.status === 'Confirmed' ? 'Confirmed' :
                                                booking.status === 'cancelled' ? 'cancelled' :
                                                'pending'
                                            }`}>
                                                {booking.status || 'Pending'}
                                            </span>
                                            </td>
                                        <td className="text-end"><Link className="bk-row-btn" to='/administrator/booking-details'><i className="bi bi-three-dots"></i></Link></td>
                                    </tr>
                                ))
                            } 
                            
                        </tbody>
                        </table>
                    </div>

                    <div className="bk-pagination">
                        <span className="bk-page-info">Showing 1–8 of 4,812</span>
                        <div className="bk-page-controls">
                        <button className="bk-page-btn" disabled><i className="bi bi-chevron-left"></i></button>
                        <button className="bk-page-btn active">1</button>
                        <button className="bk-page-btn">2</button>
                        <button className="bk-page-btn">3</button>
                        <span className="bk-page-dots">…</span>
                        <button className="bk-page-btn">602</button>
                        <button className="bk-page-btn"><i className="bi bi-chevron-right"></i></button>
                        </div>
                    </div>

                    </div>
                </div>
                </section>

        
        </>
    )


}
export default Bookings;