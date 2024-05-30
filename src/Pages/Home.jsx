import FifthBanner from "../Components/Why-Zwilt/WhyZwilt.jsx";
import FirstBanner from "../Components/Marketplace/Markeyplace.jsx";
import FourthBanner from "../Components/Journey/Journey.jsx";
import SecondBanner from "../Components/Groove/SecondBanner.jsx";
import SixthBanner from "../Components/FAQ/Faq.jsx";
import ThirdBanner from "../Components/Process/Process.jsx";
import Hero from "../Components/Hero/Hero";

const Home = () => {
    return (
      <>
        <div>
          <Hero/>
          <FirstBanner/>
          <SecondBanner/>
          <ThirdBanner/>
          <FourthBanner/>
          <FifthBanner/>
          <SixthBanner/>
        </div>
      </>
    );
  };
  export default Home;