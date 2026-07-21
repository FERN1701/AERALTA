function Cta(){
    return(
        <section className ="cta-band section-pad" id="contact">
            <div className ="container text-center">
                <span className ="eyebrow justify-content-center">Transmission Open</span>
                <h2 className ="section-title mt-2">Ready for departure?</h2>
                <p className ="text-muted-c mt-2 mb-4">Sign up for fare alerts before the grid updates them.</p>
                <form className ="d-flex flex-wrap justify-content-center gap-2" onsubmit="return false;">
                <input type="email" className ="form-control field-cyber" style={{maxWidth:"320px",background:"var(--bg-panel)",border:"1px solid var(--line)",color:"var(--text)", padding:".7rem 1rem",borderRadius:"var(--radius)"}} placeholder="you@email.com" />
                <button className ="btn btn-sun">Notify Me</button>
                </form>
            </div>
        </section>
    )
}
export default Cta;