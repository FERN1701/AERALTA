import Header from "../../components/public/Header";
import Ticker from "../../components/public/Ticker";
import BookingPannel from "../../components/public/BookingPannel";
import Destination from "../../components/public/Destination";
import Fleet from "../../components/public/Fleet";
import Features from "../../components/public/Features";
import Tiers from "../../components/public/Tiers";
import Testimonial from "../../components/public/Testimonial";
import Cta from "../../components/public/Cta";

function MainHome(){
    const Show = true
    
return(
    <>
        <Header />
        <Ticker />
        <BookingPannel />
        <Destination />
        <Fleet />
        <Features />
        <Tiers />
        {/* { Show ? <Testimonial /> : null } */}
        <Testimonial />
        <Cta />
    </>
)
}
export default MainHome;