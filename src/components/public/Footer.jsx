function Footer(){
    
    
    return(
            <footer>
                <div className="container">
                    <div className="row g-4">
                    <div className="col-lg-4">
                        <a className="navbar-brand d-flex align-items-center gap-2 mb-3" href="#top">
                        <span className="brand-mark">
                            <svg width="30" height="30" viewBox="0 0 40 40" fill="none">
                            <path d="M20 5 L23 17 L36 20 L23 23 L20 35 L17 23 L4 20 L17 17 Z" fill="url(#sunGrad2)"/>
                            <defs><linearGradient id="sunGrad2" x1="4" y1="5" x2="36" y2="35"><stop stop-color="#2fe6d0"/><stop offset="1" stop-color="#f6b93b"/></linearGradient></defs>
                            </svg>
                        </span>
                        <span className="brand-word text-white">AERALTA</span>
                        </a>
                        <p className="text-muted-c small">Philippine hospitality, navigated by tomorrow's technology. Flying the archipelago and beyond since 1946.</p>
                        <div className="d-flex gap-2 mt-3">
                        <a href="#" className="social-dot"><i className="bi bi-facebook"></i></a>
                        <a href="#" className="social-dot"><i className="bi bi-instagram"></i></a>
                        <a href="#" className="social-dot"><i className="bi bi-twitter-x"></i></a>
                        </div>
                    </div>
                    <div className="col-6 col-lg-2">
                        <h6>Travel</h6>
                        <a href="#book">Book a flight</a>
                        <a href="#destinations">Destinations</a>
                        <a href="#">Check‑in</a>
                        <a href="#">Flight status</a>
                    </div>
                    <div className="col-6 col-lg-2">
                        <h6>Company</h6>
                        <a href="#fleet">Our fleet</a>
                        <a href="#tiers">Mabuhay+</a>
                        <a href="#">Newsroom</a>
                        <a href="#">Careers</a>
                    </div>
                    <div className="col-6 col-lg-2">
                        <h6>Support</h6>
                        <a href="#">Help center</a>
                        <a href="#">Baggage policy</a>
                        <a href="#">Refunds</a>
                    </div>
                    <div className="col-6 col-lg-2">
                        <h6>Legal</h6>
                        <a href="#">Privacy</a>
                        <a href="#">Terms</a>
                        <a href="#">Accessibility</a>
                    </div>
                    </div>
                    <div className="divider-line" style={{ opacity: 0.2 }}></div>
                    <p className="text-muted-c small mb-0 mono">© 2026 AERALTA AIRLINES — FICTIONAL BRAND FOR DEMONSTRATION PURPOSES</p>
                </div>
            </footer>
    )
}
export default Footer;