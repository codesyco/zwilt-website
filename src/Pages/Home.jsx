import WhyZwilt from "../Components/Why-Zwilt/WhyZwilt.jsx";
import Marketplace from "../Components/Marketplace/Marketplace.jsx";
import Journey from "../Components/Journey/Journey.jsx";
import Groove from "../Components/Groove/Groove.jsx";
import Faq from "../Components/FAQ/Faq.jsx";
import Process from "../Components/Process/Process.jsx";
import Hero from "../Components/Hero/Hero";

const Home = () => {
    return (
      <>
        <div>
          <Hero/>
          <Marketplace/>
          <Groove/>
          <Process/>
          <Journey/>
          <WhyZwilt/>
          <Faq/>
        </div>
      </>
    );
  };
  export default Home;