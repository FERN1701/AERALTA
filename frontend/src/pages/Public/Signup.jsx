import { Routes, Route, Link } from "react-router-dom";

function Signup(){


    return(

        <>
        

            <section className="auth-section" id="signup">
                <div className="container">
                    <div className="auth-wrap">

                    <div className="auth-visual">
                        <div className="auth-visual-grid"></div>
                        <div className="auth-radar">
                        <div className="auth-radar-ring" style={{width:"100%", height:"100%"}}></div>
                        <div className="auth-radar-ring" style={{width:"66%", height:"66%"}}></div>
                        <div className="auth-radar-ring" style={{width:"34%", height:"34%"}}></div>
                        <div className="auth-radar-sweep"></div>
                        <div className="auth-radar-core"></div>
                        <div className="auth-radar-dot" style={{top:"22%", left:"78%"}}></div>
                        <div className="auth-radar-dot cy" style={{top:"74%", left:"20%"}}></div>
                        </div>
                        <div className="auth-visual-copy">
                        <span className="eyebrow">Join The Network</span>
                        <h2 className="auth-visual-title">Your seat on the grid is waiting.</h2>
                        <p className="auth-visual-text">Create an account to book faster, earn Mabuhay+ miles from your first flight, and check in from anywhere.</p>
                        <ul className="auth-perk-list">
                            <li><i className="bi bi-check2-circle"></i>Earn miles on every booking</li>
                            <li><i className="bi bi-check2-circle"></i>Save passenger &amp; payment details</li>
                            <li><i className="bi bi-check2-circle"></i>Priority fare‑drop alerts</li>
                        </ul>
                        </div>
                    </div>

                    <div className="auth-form-side">
                        <span className="eyebrow">Create Account</span>
                        <h1 className="auth-title">Join Aeralta</h1>
                        <p className="auth-sub">A few details and you're on the grid.</p>

                        <form className="mt-4" onsubmit="return false;">
                        <div className="row g-3">
                            <div className="col-md-6 auth-field">
                            <label>Full Name</label>
                            <div className="auth-input-wrap">
                                <i className="bi bi-person"></i>
                                <input type="text" className="form-control" placeholder="Juan Dela Cruz"/>
                            </div>
                            </div>
                            <div className="col-md-6 auth-field">
                            <label>Phone Number</label>
                            <div className="auth-input-wrap">
                                <i className="bi bi-telephone"></i>
                                <input type="text" className="form-control" placeholder="+63 917 555 0142"/>
                            </div>
                            </div>
                            <div className="col-12 auth-field">
                            <label>Email Address</label>
                            <div className="auth-input-wrap">
                                <i className="bi bi-envelope"></i>
                                <input type="email" className="form-control" placeholder="you@email.com"/>
                            </div>
                            </div>
                            <div className="col-12 auth-field">
                            <label>Password</label>
                            <div className="auth-input-wrap">
                                <i className="bi bi-lock"></i>
                                <input type="password" className="form-control" placeholder="Create a password"/>
                                <button type="button" className="auth-toggle-pw"><i className="bi bi-eye"></i></button>
                            </div>
                            <div className="auth-strength-track">
                                <span className="auth-strength-fill" style={{width:"60%"}}></span>
                            </div>
                            <div className="auth-strength-label">Medium strength · add a symbol for better security</div>
                            </div>
                            <div className="col-12 auth-field">
                            <label>Confirm Password</label>
                            <div className="auth-input-wrap">
                                <i className="bi bi-lock-fill"></i>
                                <input type="password" className="form-control" placeholder="Re‑enter your password"/>
                            </div>
                            </div>
                        </div>

                        <label className="auth-checkbox mt-3 mb-4">
                            <input type="checkbox"/>
                            <span className="auth-checkbox-box"></span>
                            I agree to the <a href="#" className="auth-link">Terms of Service</a> and <a href="#" className="auth-link">Privacy Policy</a>
                        </label>

                        <button className="btn btn-sun w-100" type="submit">Create Account <i className="bi bi-arrow-right ms-1"></i></button>

                        <div className="auth-divider"><span>or sign up with</span></div>

                        <div className="row g-2">
                            <div className="col-6">
                            <button className="auth-social-btn" type="button"><i className="bi bi-google"></i>Google</button>
                            </div>
                            <div className="col-6">
                            <button className="auth-social-btn" type="button"><i className="bi bi-facebook"></i>Facebook</button>
                            </div>
                        </div>

                        <p className="auth-signup-prompt">Already have an account? <Link to="/login" className="auth-link">Sign in</Link></p>
                        </form>
                    </div>

                    </div>
                </div>
                </section>



        </>

    )


}
export default Signup;