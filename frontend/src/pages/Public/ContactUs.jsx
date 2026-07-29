

function ContactUs(){
    return(
        <section className="section-pad" id="contact">
            <div className="container">
                <div className="row mb-5">
                <div className="col-lg-7">
                    <span className="eyebrow">Ground Control · Reach Us</span>
                    <h2 className="section-title">Contact Aeralta</h2>
                </div>
                <div className="col-lg-5">
                    <p className="text-muted-c mt-3 mt-lg-0">Reservations, baggage, partnerships, or a question about tomorrow's flight — our ground crew is on channel.</p>
                </div>
                </div>
                <div className="row g-5">

                <div className="col-lg-5">
                    <div className="contact-info-list">
                    <div className="contact-info-card">
                        <div className="contact-info-icon"><i className="bi bi-geo-alt"></i></div>
                        <div>
                        <h6>Headquarters</h6>
                        <p>Aeralta Tower, Ninoy Aquino Ave, Pasay, Metro Manila 1300, Philippines</p>
                        </div>
                    </div>
                    <div className="contact-info-card">
                        <div className="contact-info-icon"><i className="bi bi-telephone"></i></div>
                        <div>
                        <h6>Reservations</h6>
                        <p>+63 2 8855 8888 <span className="contact-tag">24/7</span></p>
                        </div>
                    </div>
                    <div className="contact-info-card">
                        <div className="contact-info-icon"><i className="bi bi-envelope"></i></div>
                        <div>
                        <h6>Email</h6>
                        <p>fly@aeralta.com</p>
                        </div>
                    </div>
                    <div className="contact-info-card">
                        <div className="contact-info-icon"><i className="bi bi-headset"></i></div>
                        <div>
                        <h6>Live Chat</h6>
                        <p>Ground crew online now<span className="contact-status"></span></p>
                        </div>
                    </div>
                    </div>
                </div>

                <div className="col-lg-7">
                    <div className="contact-form-panel">
                    <form className="row g-3" onsubmit="return false;">
                        <div className="col-md-6 contact-field">
                        <label>Full Name</label>
                        <input type="text" className="form-control" placeholder="Juan Dela Cruz" />
                        </div>
                        <div className="col-md-6 contact-field">
                        <label>Email</label>
                        <input type="email" className="form-control" placeholder="you@email.com" />
                        </div>
                        <div className="col-md-12 contact-field">
                        <label>Subject</label>
                        <select className="form-select">
                            <option>Reservations</option>
                            <option>Baggage</option>
                            <option>Mabuhay+ Membership</option>
                            <option>Partnerships</option>
                            <option>Something else</option>
                        </select>
                        </div>
                        <div className="col-md-12 contact-field">
                        <label>Message</label>
                        <textarea className="form-control" rows="4" placeholder="Tell us how we can help..."></textarea>
                        </div>
                        <div className="col-md-12">
                        <button className="btn btn-sun" type="submit">Send Message <i className="bi bi-send ms-1"></i></button>
                        </div>
                    </form>
                    </div>
                </div>

                </div>
            </div>
            </section>

    )
}
export default ContactUs;