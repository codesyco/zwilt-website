import { useSelector, useDispatch } from "react-redux";
import { setActiveTab } from "../../Actions/tabActions";
import { setInputValue } from "../../Actions/inputAction";
import vector2 from "../../assets/Vector (1).png";
import heroUserIcon from "../../assets/zwilt-tba-1-01 2.png";

const Hero = () => {
  const selectedTab = useSelector((state) => state.tab.activeTab);
  const inputValue = useSelector((state) => state.input.value);
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    dispatch(setInputValue(e.target.value));
  };
  const handleTabClick = (tab) => {
    dispatch(setActiveTab(tab));
  };

  const tabs = {
    "IT & Development": [
      "Python Developer",
      "Shopify Developer",
      "MERN Stack Developer",
      "Full Stack Developer",
      "Data Scientist",
      "Front End Developer",
      "Shopify Developer",
      "Python Developer",
      "Web Developer",
      "Explore More"
    ],
    "Design & Creative": [
      "Data Scientist",
      "Front End Developer",
      "Shopify Developer",
      "Python Developer",
      "Full Stack Developer",
      "Explore More",
    ],
  };
  const list1 = tabs[selectedTab].slice(0, 3);
  const list2 = tabs[selectedTab].slice(3, 6);
  const list3 = tabs[selectedTab].slice(6);

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
        <div className="relative flex items-center border-2 rounded-2xl w-80 border-grey-100">
          {!inputValue && (
            <div className="absolute left-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
              <span className="font-bold">Looking for</span>{" "}
              <span className="text-slate-400">design |</span>
            </div>
          )}
          <input
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            className="pl-4 w-full border-none focus:outline-none placeholder-transparent"
            placeholder="Looking for design |"
          />
          <div className="h-[50px] min-w-[50px] bg-[#FFBE2E] flex items-center justify-center rounded-2xl">
            <img src={vector2} alt="icon" className="w-[25px] h-[15px]" />
          </div>
        </div>
        <div className="bg-[#F8F8F8] p-4 w-full rounded-2xl flex flex-col items-center">
          <div className=" bg-[#D2D2D2] w-fit flex gap-4 rounded-2xl">
            <button
              onClick={() => handleTabClick("IT & Development")}
              className={
                selectedTab === "IT & Development"
                  ? "bg-[#C7F4C2]"
                  : " bg-transparent"
              }
            >
              IT & Development
            </button>
            <button
              onClick={() => handleTabClick("Design & Creative")}
              className={
                selectedTab === "Design & Creative"
                  ? "bg-[#C7F4C2]"
                  : "bg-transparent"
              }
            >
              Design & Creative
            </button>
          </div>
          <div className="px-1 py-4">
            {selectedTab === "IT & Development" ? (
              <div className="flex flex-wrap gap-4 font-light ">
                {/* Render 3 lists for IT & Development */}
                <ul>
                  {list1.map((item) => (
                    <li key={item} className={item.includes("MERN Stack Developer") || item.includes("Explore More") ? "opacity-100 font-semibold" : "opacity-75"}>{item}</li>
                  ))}
                </ul>
                <ul>
                  {list2.map((item) => (
                    <li key={item} className={item.includes("MERN Stack Developer") || item.includes("Explore More") ? "opacity-100 font-semibold" : "opacity-75"}>{item}</li>
                  ))}
                </ul>
                {list3.length > 0 && (
                  <ul>
                    {list3.map((item) => (
                      <li key={item} className={item.includes("MERN Stack Developer") || item.includes("Explore More") ? "opacity-100 font-semibold" : "opacity-75"}>{item}</li>
                    ))}
                  </ul>
                )}
              </div>
            ) : (
              <div className="flex gap-4">
                <ul>
                  {list1.map((item) => (
                    <li key={item} className="opacity-75">{item}</li>
                  ))}
                </ul>
                <ul>
                  {list2.map((item) => (
                    <li key={item} className="opacity-75">{item}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
