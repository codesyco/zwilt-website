import FirstBanner from "../Components/Banner/FirstBanner";
import SecondBanner from "../Components/Banner/SecondBanner";
import Hero from "../Components/Hero/Hero";

const Home = () => {
    return (
      <>
        <div>
          <Hero/>
          <FirstBanner/>
          <SecondBanner/>
        </div>
      </>
    );
  };
  export default Home;