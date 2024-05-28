import FifthBanner from "../Components/Banner/FifthBanner.jsx";
import FirstBanner from "../Components/Banner/FirstBanner.jsx";
import FourthBanner from "../Components/Banner/FourthBanner.jsx";
import SecondBanner from "../Components/Banner/SecondBanner.jsx";
import SixthBanner from "../Components/Banner/SixthBanner.jsx";
import ThirdBanner from "../Components/Banner/ThirdBanner.jsx";
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