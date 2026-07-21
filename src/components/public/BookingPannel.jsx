function BookingPannel(){
    return(
        <>
        
        <div className ="container" id="book">
            <div className ="booking-panel">
                <div className ="d-flex flex-wrap gap-2 mb-3">
                <button className ="trip-tab active">Round Trip</button>
                <button className ="trip-tab">One Way</button>
                <button className ="trip-tab">Multi‑City</button>
                </div>
                <form className ="row g-3 align-items-end" onsubmit="return false;">
                <div className ="col-md-3 field-cyber">
                    <label>From</label>
                    <select className ="form-select">
                    <option>MNL — Manila</option>
                    <option>CEB — Cebu</option>
                    <option>DVO — Davao</option>
                    </select>
                </div>
                <div className ="col-md-3 field-cyber">
                    <label>To</label>
                    <select className ="form-select">
                    <option>NRT — Tokyo Narita</option>
                    <option>ICN — Seoul Incheon</option>
                    <option>LAX — Los Angeles</option>
                    <option>SIN — Singapore</option>
                    </select>
                </div>
                <div className ="col-md-2 field-cyber">
                    <label>Depart</label>
                    <input type="date" className ="form-control" />
                </div>
                <div className ="col-md-2 field-cyber">
                    <label>Return</label>
                    <input type="date" className ="form-control" />
                </div>
                <div className ="col-md-1 field-cyber">
                    <label>Pax</label>
                    <input type="number" className ="form-control" value="1" min="1" />
                </div>
                <div className ="col-md-1 field-cyber">
                    <button className ="btn btn-sun w-100" type="submit"><i className ="bi bi-search"></i></button>
                </div>
                </form>
            </div>
        </div>

        </>
    )
}
export default BookingPannel