


function Profile(){


    return(

        <>
        
           <section class="" id="profile">
            <div class="container-fluid">

                <div class="page-head mb-4">
                <span class="eyebrow">Account · My Aeralta</span>
                <h1 class="pp-title">My profile</h1>
                <p class="pp-sub">Manage your personal details, travel documents, and preferences.</p>
                </div>

                <div class="pp-banner mb-4">
                <div class="pp-banner-cover"></div>
                <div class="pp-banner-body">
                    <div class="pp-avatar-wrap">
                    <img class="pp-avatar" src="https://images.unsplash.com/photo-1607346256330-dee7af15f7c5?q=80&w=300&auto=format&fit=crop" alt="Passenger avatar" />
                    <button class="pp-avatar-edit"><i class="bi bi-camera"></i></button>
                    </div>
                    <div class="pp-banner-info">
                    <div class="pp-name-row">
                        <h2 class="pp-name">Andrea Fernandez</h2>
                        <span class="pp-tier-badge"><i class="bi bi-stars"></i>Elite Tier</span>
                    </div>
                    <p class="pp-handle mono">Mabuhay+ No. MB‑00219841 · Member since 2019</p>
                    </div>
                    <div class="pp-banner-stats">
                    <div>
                        <div class="pp-stat-value">27</div>
                        <div class="pp-stat-label">Flights Flown</div>
                    </div>
                    <div>
                        <div class="pp-stat-value pp-gd">6,800</div>
                        <div class="pp-stat-label">Miles Balance</div>
                    </div>
                    <div>
                        <div class="pp-stat-value pp-cy">2</div>
                        <div class="pp-stat-label">Upcoming Trips</div>
                    </div>
                    </div>
                </div>
                </div>

                <div class="row g-4">

                
                <div class="col-lg-8">

                    <div class="pp-panel mb-4">
                    <div class="pp-panel-head">
                        <p class="pp-panel-title">Personal information</p>
                        <p class="pp-panel-sub">Update your name and contact details</p>
                    </div>
                    <form class="row g-3" onsubmit="return false;">
                        <div class="col-md-6 pp-field">
                        <label>Full Name</label>
                        <input type="text" class="form-control" value="Andrea Fernandez" />
                        </div>
                        <div class="col-md-6 pp-field">
                        <label>Date of Birth</label>
                        <input type="text" class="form-control" value="Mar 08, 1990" />
                        </div>
                        <div class="col-md-6 pp-field">
                        <label>Email</label>
                        <input type="email" class="form-control" value="andrea.fernandez@email.com" />
                        </div>
                        <div class="col-md-6 pp-field">
                        <label>Phone</label>
                        <input type="text" class="form-control" value="+63 917 555 0142" />
                        </div>
                        <div class="col-md-6 pp-field">
                        <label>Nationality</label>
                        <select class="form-select">
                            <option>Philippines</option>
                            <option>United States</option>
                            <option>Japan</option>
                            <option>Singapore</option>
                        </select>
                        </div>
                        <div class="col-md-6 pp-field">
                        <label>Home Airport</label>
                        <select class="form-select">
                            <option>MNL — Manila</option>
                            <option>CEB — Cebu</option>
                            <option>DVO — Davao</option>
                        </select>
                        </div>
                        <div class="col-12 d-flex gap-2 mt-1">
                        <button class="btn btn-sun" type="submit">Save Changes <i class="bi bi-check2 ms-1"></i></button>
                        <button class="btn btn-outline-cyber" type="reset">Discard</button>
                        </div>
                    </form>
                    </div>

                    <div class="pp-panel mb-4">
                    <div class="pp-panel-head">
                        <p class="pp-panel-title">Travel documents</p>
                        <p class="pp-panel-sub">Keep your passport details current for faster check‑in</p>
                    </div>
                    <form class="row g-3" onsubmit="return false;">
                        <div class="col-md-6 pp-field">
                        <label>Passport Number</label>
                        <input type="text" class="form-control" value="P4820157X" />
                        </div>
                        <div class="col-md-6 pp-field">
                        <label>Issuing Country</label>
                        <select class="form-select">
                            <option>Philippines</option>
                            <option>United States</option>
                            <option>Japan</option>
                        </select>
                        </div>
                        <div class="col-md-6 pp-field">
                        <label>Expiry Date</label>
                        <input type="text" class="form-control" value="Nov 14, 2031" />
                        </div>
                        <div class="col-md-6 pp-field">
                        <label>Frequent Flyer No.</label>
                        <input type="text" class="form-control" value="MB-00219841" disabled />
                        </div>
                        <div class="col-12 d-flex gap-2 mt-1">
                        <button class="btn btn-outline-cyber" type="submit"><i class="bi bi-upload me-1"></i>Update Passport Scan</button>
                        </div>
                    </form>
                    </div>

                    <div class="pp-panel">
                    <div class="pp-panel-head">
                        <p class="pp-panel-title">Security</p>
                        <p class="pp-panel-sub">Password and login protection</p>
                    </div>

                    <div class="pp-security-row">
                        <div>
                        <div class="pp-sec-label">Password</div>
                        <div class="pp-sec-value">Last changed 4 months ago</div>
                        </div>
                        <button class="btn btn-outline-cyber btn-sm">Change Password</button>
                    </div>

                    <div class="pp-security-row">
                        <div>
                        <div class="pp-sec-label">Two‑Factor Authentication</div>
                        <div class="pp-sec-value">Verify sign‑in with a one‑time code</div>
                        </div>
                        <label class="pp-switch">
                        <input type="checkbox" checked />
                        <span class="pp-switch-track"></span>
                        </label>
                    </div>

                    <div class="pp-security-row">
                        <div>
                        <div class="pp-sec-label">Face / Touch ID</div>
                        <div class="pp-sec-value">Sign in to the app with biometrics</div>
                        </div>
                        <label class="pp-switch">
                        <input type="checkbox" />
                        <span class="pp-switch-track"></span>
                        </label>
                    </div>
                    </div>

                </div>

                <div class="col-lg-4">

                    <div class="pp-panel mb-4">
                    <div class="pp-panel-head">
                        <p class="pp-panel-title">Travel preferences</p>
                        <p class="pp-panel-sub">Applied automatically to new bookings</p>
                    </div>
                    <div class="pp-field mb-3">
                        <label>Preferred Seat</label>
                        <select class="form-select">
                        <option>Window</option>
                        <option>Aisle</option>
                        <option>No preference</option>
                        </select>
                    </div>
                    <div class="pp-field mb-3">
                        <label>Meal Preference</label>
                        <select class="form-select">
                        <option>Standard</option>
                        <option>Vegetarian</option>
                        <option>Halal</option>
                        <option>Gluten‑Free</option>
                        </select>
                    </div>
                    <div class="pp-field mb-1">
                        <label>Cabin Class Default</label>
                        <select class="form-select">
                        <option>Economy</option>
                        <option>Premium Economy</option>
                        <option>Business</option>
                        </select>
                    </div>
                    </div>

                    <div class="pp-panel mb-4">
                    <div class="pp-panel-head">
                        <p class="pp-panel-title">Notifications</p>
                    </div>
                    <div class="pp-pref-row">
                        <span>Flight status alerts</span>
                        <label class="pp-switch">
                        <input type="checkbox" checked />
                        <span class="pp-switch-track"></span>
                        </label>
                    </div>
                    <div class="pp-pref-row">
                        <span>Fare drop alerts</span>
                        <label class="pp-switch">
                        <input type="checkbox" checked />
                        <span class="pp-switch-track"></span>
                        </label>
                    </div>
                    <div class="pp-pref-row">
                        <span>Mabuhay+ promotions</span>
                        <label class="pp-switch">
                        <input type="checkbox" />
                        <span class="pp-switch-track"></span>
                        </label>
                    </div>
                    <div class="pp-pref-row">
                        <span>SMS check‑in reminders</span>
                        <label class="pp-switch">
                        <input type="checkbox" checked />
                        <span class="pp-switch-track"></span>
                        </label>
                    </div>
                    </div>

                    <div class="pp-panel">
                    <div class="pp-panel-head">
                        <p class="pp-panel-title">Travel companions</p>
                        <p class="pp-panel-sub">Saved for faster group booking</p>
                    </div>
                    <div class="pp-companion">
                        <img src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=100&auto=format&fit=crop" alt="" />
                        <div>
                        <div class="pp-companion-name">Marco Fernandez</div>
                        <div class="pp-companion-rel mono">Spouse</div>
                        </div>
                    </div>
                    <div class="pp-companion">
                        <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=100&auto=format&fit=crop" alt="" />
                        <div>
                        <div class="pp-companion-name">Sofia Fernandez</div>
                        <div class="pp-companion-rel mono">Child</div>
                        </div>
                    </div>
                    <button class="btn btn-outline-cyber btn-sm w-100 mt-2"><i class="bi bi-person-plus me-1"></i>Add Companion</button>
                    </div>

                </div>

                </div>
            </div>
            </section>

        
        </>

    )


}
export default Profile;