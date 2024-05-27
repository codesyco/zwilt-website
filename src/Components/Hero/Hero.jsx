// import { useSelector, useDispatch } from 'react-redux';
// import { setSelectedTab } from './actions';
import vector2 from "../../assets/Vector (1).png";
import heroUserIcon from "../../assets/zwilt-tba-1-01 2.png";

const Hero = () => {
  const selectedTab = "IT & Development";
  // const selectedTab = useSelector(state => state.selectedTab); // Access Redux state
  // const dispatch = useDispatch();
  const handleTabClick = (tab) => {
    // dispatch(setSelectedTab(tab)); // Dispatch Redux action
  };
  return (
    <div className="flex h-dvh">
      <div className=" flex flex-col items-center gap-4 p-10">
        <div className="text-7xl font-bold ">
          Finding the right fit{" "}
          <img src={heroUserIcon} alt="" className="inline-block" />
          has never been easier.
        </div>
        <div className="text-center text-slate-600">
          With our rigorous pre-vetting process, you&apos;ll never have to worry
          about finding the ideal candidate ever again.
        </div>
        <div className="flex border-2 rounded-2xl place-items-center w-80 justify-between border-grey-100">
          <div className="ml-4">
            Looking for <span className="text-slate-400">design |</span>
          </div>
          <div className="h-[50px] w-[50px] bg-[#FFBE2E] flex items-center justify-center rounded-2xl">
            <img src={vector2} alt="" className="w-[25px] h-[15px]" />
          </div>
        </div>
        <div className="bg-[#F8F8F8] p-4 w-full rounded-2xl">
          <div className=" bg-[#D2D2D2] w-fit flex gap-4 rounded-2xl">
            <button
              onClick={() => handleTabClick("IT & Development")}
              className={selectedTab === "IT & Development" ? "bg-[#C7F4C2]" : " bg-transparent"}
            >
              IT & Development
            </button>
            <button
              onClick={() => handleTabClick("Design & Creative")}
              className={selectedTab === "Design & Creative" ? "bg-[#C7F4C2]" : "bg-transparent"}
            >
              Design & Creative
            </button>
          </div>
          <div className="px-1 py-4">
            {selectedTab === "IT & Development" ? (
              <div className="flex">
                <ul>
                  <li>Python Developer</li>
                  <li>Shopify Developer</li>
                  <li>MERN Stack Developer</li>
                  <li>Full Stack Developer</li>
                </ul>
                <ul>
                  <li>Data Scientist</li>
                  <li>Front End Developer</li>
                  <li>Shopify Developer</li>
                  <li>Python Developer</li>
                </ul>
                <ul>
                  <li>Shopify Developer</li>
                  <li>Python Developer</li>
                  <li>Full Stack Developer</li>
                  <li>Explore More</li>
                </ul>
              </div>

            ) : (
              <ul>
                <li>Data Scientist</li>
                <li>Front End Developer</li>
                <li>Shopify Developer</li>
                <li>Python Developer</li>
                <li>Full Stack Developer</li>
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
