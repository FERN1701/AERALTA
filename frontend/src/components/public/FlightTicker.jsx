function FlightTicker(){
const flights = [

        {
            no:"AE102",
            route:"MNL → NRT",
            time:"23:45",
            status:"BOARDING"
        },

        {
            no:"AE220",
            route:"MNL → ICN",
            time:"01:10",
            status:"ON TIME"
        },

        {
            no:"AE041",
            route:"MNL → SIN",
            time:"06:30",
            status:"ON TIME"
        },

        {
            no:"AE512",
            route:"CEB → HKG",
            time:"08:15",
            status:"DELAYED"
        },

        {
            no:"AE777",
            route:"MNL → LAX",
            time:"11:55",
            status:"ON TIME"
        },

        {
            no:"AE315",
            route:"MNL → SYD",
            time:"22:20",
            status:"BOARDING"
        },

        {
            no:"AE090",
            route:"DVO → MNL",
            time:"14:05",
            status:"ON TIME"
        }

    ];
    const tickerFlights = [

        ...flights,

        ...flights

    ];
    return(

        <div className="ticker">

            <div
                id="tickerTrack"
                className="ticker-track"
            >

                {

                    tickerFlights.map((flight,index)=>(

                        <span

                            key={index}

                            className="ticker-item"

                        >

                            <b>

                                {flight.no}

                            </b>

                            {" "}

                            {flight.route}

                            <span>

                                {flight.time}

                            </span>

                            <span

                                className={

                                    flight.status==="ON TIME"

                                    ? "ok"

                                    : flight.status==="BOARDING"

                                    ? "board"

                                    : "delay"

                                }

                            >

                                {flight.status}

                            </span>

                        </span>

                    ))

                }

            </div>

        </div>

    );

}

export default FlightTicker;