


function Profile(){


    return(
        <>
        
            <section className="" id="profile">
                <div className="container-fluid">

                    <div className="page-head mb-4">
                    <span className="eyebrow">Account · Ops Deck</span>
                    <h1 className="prf-title">Admin profile</h1>
                    <p className="prf-sub">Manage your account details, security, and preferences.</p>
                    </div>

                    <div className="prf-banner mb-4">
                    <div className="prf-banner-cover"></div>
                    <div className="prf-banner-body">
                        <div className="prf-avatar-wrap">
                        <img className="prf-avatar" src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=300&auto=format&fit=crop" alt="Admin avatar" />
                        <button className="prf-avatar-edit"><i className="bi bi-camera"></i></button>
                        </div>
                        <div className="prf-banner-info">
                        <div className="prf-name-row">
                            <h2 className="prf-name">Mika Villanueva</h2>
                            <span className="prf-role-badge"><i className="bi bi-shield-check"></i>Ops Administrator</span>
                        </div>
                        <p className="prf-handle mono">@m.villanueva · ID AE‑ADM‑0142</p>
                        </div>
                        <div className="prf-banner-stats">
                        <div>
                            <div className="prf-stat-value">Jul 22, 2026</div>
                            <div className="prf-stat-label">Last Login</div>
                        </div>
                        <div>
                            <div className="prf-stat-value">2021</div>
                            <div className="prf-stat-label">Admin Since</div>
                        </div>
                        <div>
                            <div className="prf-stat-value prf-cy">Level 3</div>
                            <div className="prf-stat-label">Access Tier</div>
                        </div>
                        </div>
                    </div>
                    </div>

                    <div className="row g-4">

                    <div className="col-lg-8">

                        <div className="prf-panel mb-4">
                        <div className="prf-panel-head">
                            <p className="prf-panel-title">Personal information</p>
                            <p className="prf-panel-sub">Update your name, contact details, and department</p>
                        </div>
                        <form className="row g-3" onsubmit="return false;">
                            <div className="col-md-6 prf-field">
                            <label>Full Name</label>
                            <input type="text" className="form-control" value="Mika Villanueva"/>
                            </div>
                            <div className="col-md-6 prf-field">
                            <label>Employee ID</label>
                            <input type="text" className="form-control" value="AE-ADM-0142" disabled/>
                            </div>
                            <div className="col-md-6 prf-field">
                            <label>Email</label>
                            <input type="email" className="form-control" value="m.villanueva@aeralta.com"/>
                            </div>
                            <div className="col-md-6 prf-field">
                            <label>Phone</label>
                            <input type="text" className="form-control" value="+63 917 555 0198"/>
                            </div>
                            <div className="col-md-6 prf-field">
                            <label>Department</label>
                            <select className="form-select">
                                <option>Flight Operations</option>
                                <option>Reservations</option>
                                <option>Fleet Management</option>
                                <option>Customer Experience</option>
                            </select>
                            </div>
                            <div className="col-md-6 prf-field">
                            <label>Base Station</label>
                            <select className="form-select">
                                <option>MNL — Manila</option>
                                <option>CEB — Cebu</option>
                                <option>DVO — Davao</option>
                            </select>
                            </div>
                            <div className="col-12 d-flex gap-2 mt-1">
                            <button className="btn btn-sun" type="submit">Save Changes <i className="bi bi-check2 ms-1"></i></button>
                            <button className="btn btn-outline-cyber" type="reset">Discard</button>
                            </div>
                        </form>
                        </div>

                        <div className="prf-panel">
                        <div className="prf-panel-head">
                            <p className="prf-panel-title">Security</p>
                            <p className="prf-panel-sub">Password, two‑factor authentication, and active sessions</p>
                        </div>

                        <div className="prf-security-row">
                            <div>
                            <div className="prf-sec-label">Password</div>
                            <div className="prf-sec-value">Last changed 62 days ago</div>
                            </div>
                            <button className="btn btn-outline-cyber btn-sm">Change Password</button>
                        </div>

                        <div className="prf-security-row">
                            <div>
                            <div className="prf-sec-label">Two‑Factor Authentication</div>
                            <div className="prf-sec-value">Authenticator app enabled</div>
                            </div>
                            <label className="prf-switch">
                            <input type="checkbox" checked/>
                            <span className="prf-switch-track"></span>
                            </label>
                        </div>

                        <div className="prf-security-row">
                            <div>
                            <div className="prf-sec-label">Login Alerts</div>
                            <div className="prf-sec-value">Email me on new‑device sign‑in</div>
                            </div>
                            <label className="prf-switch">
                            <input type="checkbox" checked/>
                            <span className="prf-switch-track"></span>
                            </label>
                        </div>

                        <div className="prf-sessions-head">Active sessions</div>
                        <div className="prf-session">
                            <i className="bi bi-laptop"></i>
                            <div className="prf-session-info">
                            <div className="prf-session-device">MacBook Pro · Manila, PH <span className="prf-session-current">This device</span></div>
                            <div className="prf-session-meta mono">Chrome 126 · Last active now</div>
                            </div>
                        </div>
                        <div className="prf-session">
                            <i className="bi bi-phone"></i>
                            <div className="prf-session-info">
                            <div className="prf-session-device">iPhone 15 · Cebu, PH</div>
                            <div className="prf-session-meta mono">Ops App 4.2 · Last active 3h ago</div>
                            </div>
                            <button className="prf-session-revoke">Revoke</button>
                        </div>
                        </div>

                    </div>

                    <div className="col-lg-4">

                        <div className="prf-panel mb-4">
                        <div className="prf-panel-head">
                            <p className="prf-panel-title">Preferences</p>
                        </div>
                        <div className="prf-pref-row">
                            <span>Live ops board sound</span>
                            <label className="prf-switch">
                            <input type="checkbox" checked/>
                            <span className="prf-switch-track"></span>
                            </label>
                        </div>
                        <div className="prf-pref-row">
                            <span>Email digest (daily)</span>
                            <label className="prf-switch">
                            <input type="checkbox" checked/>
                            <span className="prf-switch-track"></span>
                            </label>
                        </div>
                        <div className="prf-pref-row">
                            <span>Delay &amp; alert push notifications</span>
                            <label className="prf-switch">
                            <input type="checkbox"/>
                            <span className="prf-switch-track"></span>
                            </label>
                        </div>
                        <div className="prf-pref-row">
                            <span>Compact table density</span>
                            <label className="prf-switch">
                            <input type="checkbox"/>
                            <span className="prf-switch-track"></span>
                            </label>
                        </div>
                        </div>

                        <div className="prf-panel">
                        <div className="prf-panel-head">
                            <p className="prf-panel-title">Recent activity</p>
                        </div>
                        <div className="prf-activity">
                            <div className="prf-act-item">
                            <div className="prf-act-time mono">Today · 08:41</div>
                            <div className="prf-act-text">Reassigned ground crew for AE 512</div>
                            </div>
                            <div className="prf-act-item">
                            <div className="prf-act-time mono">Today · 07:58</div>
                            <div className="prf-act-text">Acknowledged weather advisory, HKG corridor</div>
                            </div>
                            <div className="prf-act-item">
                            <div className="prf-act-time mono">Yesterday · 4:20 PM</div>
                            <div className="prf-act-text">Added aircraft AE‑350‑02 to fleet registry</div>
                            </div>
                            <div className="prf-act-item">
                            <div className="prf-act-time mono">Yesterday · 11:05 AM</div>
                            <div className="prf-act-text">Confirmed booking AE7K2L for J. Dela Cruz</div>
                            </div>
                            <div className="prf-act-item">
                            <div className="prf-act-time mono">Jul 20 · 2:15 PM</div>
                            <div className="prf-act-text">Updated schedule for flight AE 315</div>
                            </div>
                        </div>
                        </div>

                    </div>

                    </div>
                </div>
                </section>

        
        </>
    )


}
export default Profile;