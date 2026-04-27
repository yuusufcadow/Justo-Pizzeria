import CTA from "../components/CTA"
import Footer from "../components/Footer"
import Hero from "../components/Hero"
import Menu from "../components/Menu"
import OurStory from "../components/OurStory"
import SpecialOffers from "../components/SpecialOffers"
import WhyChooseUs from "../components/WhyChooseUs"

function Home(){
    return (
        <div>
           <Hero/>
           <OurStory/>
           <WhyChooseUs/>
           <Menu/>
           <SpecialOffers/>
           <CTA/>
           <Footer/>
        </div>
    )
}

export default Home