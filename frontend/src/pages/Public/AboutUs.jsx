

function AboutUs() {
  return (
    <>
      <section className="section-pad" id="about">
        <div className="container">
          <div className="row g-5 align-items-center">

            <div className="col-lg-6">
              <div className="about-media">
                <div className="about-badge">
                  <div className="num">1946</div>
                  <div className="lbl">Year Founded</div>
                </div>
                <img className="img-main" src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=1200&auto=format&fit=crop" alt="Aeralta aircraft on the tarmac at golden hour" />
                <img className="img-float" src="https://images.unsplash.com/photo-1540339832862-474599807836?q=80&w=800&auto=format&fit=crop" alt="Cabin crew welcoming a passenger onboard" />
              </div>
            </div>

            <div className="col-lg-6">
              <span className="eyebrow">Flight Log · 1946—Now</span>
              <h2 className="section-title">About Aeralta</h2>
              <p className="about-copy mt-3">Aeralta was founded on a simple flight plan: connect every corner of the Philippine archipelago, then the world, without losing the warmth that makes island travel feel like coming home. Eight decades later, that same hospitality now flies alongside a route network engineered with the precision of a control tower.</p>
              <p className="about-copy">We're not just carrying passengers — we're operating the most connected, most closely monitored fleet in the region, so every seat comes with the confidence of knowing exactly where you are, and exactly when you'll arrive.</p>

              <div className="about-values">
                <div className="about-value">
                  <i className="bi bi-compass"></i>
                  <h6>Our Mission</h6>
                  <p>Move the Filipino spirit across every hub on the map, safely and on schedule.</p>
                </div>
                <div className="about-value">
                  <i className="bi bi-cpu"></i>
                  <h6>Our Approach</h6>
                  <p>Pair predictive flight systems with genuine, human‑first service.</p>
                </div>
              </div>

              <div className="timeline">
                <div className="timeline-item">
                  <div className="timeline-year">1946</div>
                  <h6>First flight out of Manila</h6>
                  <p>Aeralta takes to the sky as the region's first commercial carrier.</p>
                </div>
                <div className="timeline-item">
                  <div className="timeline-year">1998</div>
                  <h6>Long‑haul network opens</h6>
                  <p>Routes extend across the Pacific, linking the diaspora home.</p>
                </div>
                <div className="timeline-item">
                  <div className="timeline-year">2026</div>
                  <h6>Grid‑navigated operations</h6>
                  <p>Real‑time route intelligence rolls out fleet‑wide, cabin to control tower.</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
      
    </>
  );
}
export default AboutUs;