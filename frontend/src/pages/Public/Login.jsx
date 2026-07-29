import { Link } from "react-router-dom";

function Login(){


    return(

        <>
        

            <section className="auth-section" id="login">
                <div className="container">
                    <div className="auth-wrap">

                    <div className="auth-visual">
                        <div className="auth-visual-grid"></div>
                        <div className="auth-radar">
                        <div className="auth-radar-ring" style={{width:"100%", height:"100%"}}></div>
                        <div className="auth-radar-ring" style={{width:"66%", height:"66%"}}></div>
                        <div className="auth-radar-ring" style={{width:"34%",height:"34%"}}></div>
                        <div className="auth-radar-sweep"></div>
                        <div className="auth-radar-core"></div>
                        <div className="auth-radar-dot" style={{top:"22%", left:"78%"}}></div>
                        <div className="auth-radar-dot cy" style={{top:"74%", left:"20%"}}></div>
                        </div>
                        <div className="auth-visual-copy">
                        <span className="eyebrow">Ground Access · Secure Channel</span>
                        <h2 className="auth-visual-title">Welcome back to the grid.</h2>
                        <p className="auth-visual-text">Sign in to manage your trips, track Mabuhay+ miles, and check in from anywhere.</p>
                        </div>
                    </div>

                    <div className="auth-form-side">
                        <span className="eyebrow">Sign In</span>
                        <h1 className="auth-title">Access your account</h1>
                        <p className="auth-sub">Enter your credentials to continue to My Aeralta.</p>

                        <form className="mt-4" onsubmit="return false;">
                        <div className="auth-field mb-3">
                            <label>Email Address</label>
                            <div className="auth-input-wrap">
                            <i className="bi bi-envelope"></i>
                            <input type="email" className="form-control" placeholder="you@email.com" />
                            </div>
                        </div>

                        <div className="auth-field mb-2">
                            <label>Password</label>
                            <div className="auth-input-wrap">
                            <i className="bi bi-lock"></i>
                            <input type="password" className="form-control" placeholder="Enter your password" />
                            <button type="button" className="auth-toggle-pw"><i className="bi bi-eye"></i></button>
                            </div>
                        </div>

                        <div className="d-flex justify-content-between align-items-center mb-4 flex-wrap gap-2">
                            <label className="auth-checkbox">
                            <input type="checkbox" checked />
                            <span className="auth-checkbox-box"></span>
                            Remember me
                            </label>
                            <a href="#" className="auth-link">Forgot password?</a>
                        </div>

                        <button className="btn btn-sun w-100" type="submit">Sign In <i className="bi bi-arrow-right ms-1"></i></button>

                        <div className="auth-divider"><span>or continue with</span></div>

                        <div className="row g-2">
                            <div className="col-6">
                            <button className="auth-social-btn" type="button"><i className="bi bi-google"></i>Google</button>
                            </div>
                            <div className="col-6">
                            <button className="auth-social-btn" type="button"><i className="bi bi-facebook"></i>Facebook</button>
                            </div>
                        </div>

                        <p className="auth-signup-prompt">New to Aeralta? <Link to="/signup" className="auth-link">Create an account</Link></p>
                        </form>
                    </div>

                    </div>
                </div>
                </section>



        </>

    )


}
export default Login;