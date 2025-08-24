import Hero from "../Components/Home/Hero";
import BluePrint from "../Components/Home/BluePrint";
import Carousel from "../Components/Home/Carousel";
import HeroSection from "../Components/Home/Hero2";
import { Helmet } from "react-helmet-async";


function Home(){
    return(
        <>
        <Helmet>
            <title>Homepage - Ipokia Local Government</title>
        </Helmet>
        <Hero />
        <BluePrint />
        <Carousel />
        <HeroSection />
       
        </>
    )
}

export default Home;