import AbouHero from "../components/About/AbouHero";
import DownloadApp from "../components/About/DownloadApp";
import Testimonials from "../components/About/Testimonials";
import VisionMission from "../components/About/VisionMission";
import CTA from "../components/CTA";
import Footer from "../components/Footer";
import OurStory from "../components/OurStory";


function AboutUs(){
    return (
        <div>
            <AbouHero/>
            <OurStory/>
            <VisionMission/>
            <Testimonials/>
            <DownloadApp/>
            <CTA/>
            <Footer/>
        </div>
    )
}

export default AboutUs;