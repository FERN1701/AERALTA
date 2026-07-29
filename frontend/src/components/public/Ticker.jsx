import FlightTicker from "./FlightTicker";

function Ticker(){
    return (
        <>
        <div className ="ticker-bar">
            <div className ="ticker-track">
                <FlightTicker />    
            </div>
        </div>

        </>
    )
}
export default Ticker;