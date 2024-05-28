// zwilt-dusky.vercel.app
import skillsIcon from "../../assets/Vector (3).png";
import categoryIcon from "../../assets/Vector (4).png";
import profileIcon from "../../assets/Vector (5).png";
import shopifyIcon from "../../assets/pexels-christina-morillo-1181424-removebg-preview 1.png";
import magentoIcon from "../../assets/pexels-puwadon-sangngern-13419240-removebg-preview 1.png";
import dataScienceIcon from "../../assets/image 244.png";
import webflowIcon from "../../assets/image 247.png";
import dotnetIcon from "../../assets/image 246.png";
import figmaIcon from "../../assets/image 248.png";
import photoshopIcon from "../../assets/image 249.png";
import illustratorIcon from "../../assets/image 249 (1).png";
import unrealengineIcon from "../../assets/image 250.png";
import cinema4dIcon from "../../assets/image 251.png";
import vectorIcon from "../../assets/Vector (6).png";
import vectorIcon2 from "../../assets/Vector (7).png";
import herosvg from "../../assets/Union.svg"
const FirstBanner = () => {
  return (
    <div>
    <img src={herosvg} alt="" />
      <div className="w-full py-36 parallelogram-clip-first-section px-7 flex flex-col gap-10 bg-[#EDEFFF] min-[500px]:pb-56 md:pb-72 lg:pb-96 xl:pb-[30rem]">
        <div className="text-2xl text-center font-bold">
          Your one-stop marketplace for finding the talent your business needs.
        </div>
        <div className="grid grid-cols-2 grid-rows-4 gap-5 md:grid-cols-2 md:grid-rows-2 md:place-items-center">
          <div className="row-span-1 col-span-1 flex flex-col gap-5 md:text-xl md:p-20">
            <div className="font-bold">Find Dev and IT professionals to scale your business.</div>
            <div className="flex w-[140%] font-extralight text-xs flex-wrap gap-5 md:text-base md:w-fit md:font-normal">
              <div className="flex gap-2 place-items-center">
                <img src={skillsIcon} alt="" />
                989 Skills
              </div>
              <div className="flex gap-2 place-items-center">
                <img src={categoryIcon} alt="" />
                45 Sub Categories
              </div>
              <div className="flex gap-2 place-items-center">
                <img src={profileIcon} alt="" />
                 1011 Profiles
              </div>
            </div>
          </div>
          <div
            className="bg-white p-4 row-span-2 col-span-2
                 flex flex-col items-center gap-5 font-semibold rounded-xl md:col-span-1 md:row-span-1"
          >
            IT & Development
            <div className="flex gap-10 flex-wrap justify-center">
              <div className="font-semibold text-wrap w-16 text-sm text-center">
                <div className="w-20 h-20 p-5 rounded-full bg-[#F6F6F6] flex place-items-center justify-center">
                  <img src={shopifyIcon} alt="c" />
                </div>
                Shopify Developer
              </div>
              <div className="font-semibold text-wrap w-16 text-sm text-center">
                <div className="w-20 h-20 p-5 rounded-full bg-[#F6F6F6] flex place-items-center justify-center">
                  <img src={magentoIcon} alt="c" />
                </div>
                Magento Developer
              </div>
              <div className="font-semibold text-wrap w-16 text-sm text-center">
                <div className="w-20 h-20 p-5 rounded-full bg-[#F6F6F6] flex place-items-center justify-center">
                  <img src={dataScienceIcon} alt="c" />
                </div>
                Data Scientist
              </div>
              <div className="font-semibold text-wrap w-16 text-sm text-center">
                <div className="w-20 h-20 p-5 rounded-full bg-[#F6F6F6] flex place-items-center justify-center">
                  <img src={webflowIcon} alt="c" />
                </div>
                Webflow Developer
              </div>
              <div className="font-semibold text-wrap w-16 text-sm text-center">
                <div className="w-20 h-20 p-5 rounded-full bg-[#F6F6F6] flex place-items-center justify-center">
                  <img src={dotnetIcon} alt="c" />
                </div>
                Dot Net Developer
              </div>
              <div className="font-semibold text-wrap w-16 text-sm text-center">
                <div className="w-20 h-20 p-5 rounded-3xl bg-[#F6F6F6] flex place-items-center justify-center">
                  <img src={vectorIcon} alt="c" />
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-5 md:row-span-2 md:col-span-1 md:place-items-center md:text-xl md:p-20">
            <div className="font-bold">Explore Creative individuals with a keen eye for detail.</div>
            <div className="flex flex-wrap gap-5 w-[140%] text-xs md:text-base md:w-fit md:font-normal">
              <div className="flex gap-2 place-items-center">
                <img src={skillsIcon} alt="" />
                989 Skills
              </div>
              <div className="flex gap-2 place-items-center">
                <img src={categoryIcon} alt="" />
                45 Sub Categories
              </div>
              <div className="flex gap-2 place-items-center">
                <img src={profileIcon} alt="" />
                1011 Profiles
              </div>
            </div>
          </div>
          <div className="bg-white p-4 row-span-2 col-span-2
                 flex flex-col items-center gap-5 font-semibold rounded-md md:col-span-1">
            Design & Creative
            <div className="flex gap-10 flex-wrap justify-center">
            <div className="font-semibold text-wrap w-16 text-sm text-center">
                <div className="w-20 h-20 p-5 rounded-3xl bg-[#F6F6F6] flex place-items-center justify-center">
                  <img src={vectorIcon} alt="c" />
                </div>
              </div>
              <div className="font-semibold text-wrap w-16 text-sm text-center">
                <div className="w-20 h-20 p-7 rounded-full bg-[#F6F6F6] flex place-items-center justify-center">
                  <img src={figmaIcon} alt="c" />
                </div>
                UX Designer
              </div>
              <div className="font-semibold text-wrap w-16 text-sm text-center">
                <div className="w-20 h-20 p-5 rounded-full bg-[#F6F6F6] flex place-items-center justify-center">
                  <img src={photoshopIcon} alt="c" />
                </div>
                Graphics Designer
              </div>
              <div className="font-semibold text-wrap w-16 text-sm text-center">
                <div className="w-20 h-20 p-5 rounded-full bg-[#F6F6F6] flex place-items-center justify-center">
                  <img src={illustratorIcon} alt="c" />
                </div>
                Illustration Artist
              </div>
              <div className="font-semibold text-wrap w-16 text-sm text-center">
                <div className="w-20 h-20 p-5 rounded-full bg-[#F6F6F6] flex place-items-center justify-center">
                  <img src={unrealengineIcon} alt="c" />
                </div>
                Unreal Engine
              </div>
              <div className="font-semibold text-wrap w-16 text-sm text-center">
                <div className="w-20 h-20 p-5 rounded-full bg-[#F6F6F6] flex place-items-center justify-center">
                  <img src={cinema4dIcon} alt="c" />
                </div>
                Cinema 4D
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-between place-items-center px-5">
        <div className="flex gap-4 place-items-center">
            <div className="flex place-items-center justify-center rounded-3xl w-16 h-16 bg-[#202229]">
                <img src={vectorIcon2} alt="" className="w-[25px] h-[15px]" />
            </div>
            <div>Explore More</div>
        </div>
        <div>
            <span className="font-bold">30 more</span> to explore
        </div>
        </div>
      </div>
    </div>
  );
};

export default FirstBanner;
