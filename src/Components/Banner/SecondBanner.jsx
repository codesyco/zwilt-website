import vector1 from "../../assets/Vector (8).png";
import vector2 from "../../assets/Vector (9).png";
import groveLogo from "../../assets/groovehq.png";
import groveGif from "../../assets/image 6.png";
import groveLogoSmall from "../../assets/Group.png";
import quote from '../../assets/“.svg'
const SecondBanner = () => {
  return (
    <div className="bg-[#202229] text-white parallelogram-clip-sections pt-32 pb-32 px-5 flex flex-col gap-28 lg:px-16 lg:flex-row lg:py-80 lg:justify-between relative">
      <img src={quote} alt="" className="absolute right-0 top-0"/>
      <div className="flex flex-col gap-10">
        <div className="flex flex-col gap-5 lg:max-w-[350px]">
          <div className="text-5xl font-bold gap-5 md:text-6xl">
            How it worked for Jason{" "}
            <img
              src={groveGif}
              alt=""
              className="rounded-full w-[30px] inline-block"
            />{" "}
            at
            <div>
              <img src={groveLogo} alt="" className=" py-3 w-[120px]" />
            </div>
          </div>
          <div className="opacity-80 font-light md:text-xl">
            Zwilt enabled us to deliver on time and they&apos;ve been heavy
            hitters in our corner since.
          </div>
        </div>
        <div className="flex gap-5">
          <div className="flex place-items-center justify-center w-16 h-16 rounded-3xl bg-white">
            <img src={vector1} alt="" />
          </div>
          <div className="flex place-items-center justify-center w-16 h-16 rounded-3xl bg-white">
            <img src={vector2} alt="" />
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-10 lg:max-w-[50%]">
        <div className="flex gap-5">
          <div className="w-[50px] bg-[#AF7CFF] h-[50px] flex justify-center place-items-center rounded-3xl">
            <img src={groveLogoSmall} alt="" className="w-[40px]" />
          </div>
          <div>
            <h2 className="text-xl md:text-2xl">Jason Makki</h2>
            <p className="opacity-80 text-sm font-light md:text-base">Engineer at GROOVE</p>
            <p className="text-sm opacity-75 font-light md:text-base">San Francisco</p>
          </div>
        </div>
        <div className="opacity-80 font-light md:text-xl lg:text-2xl">
          Zwilt enabled us to deliver on time and they’ve been heavy hitters in
          our corner since. Zwilt enabled us to deliver on time and they’ve been
          heavy hitters in our corner since.Zwilt enabled us to deliver on time
          and they’ve been heavy hitters.
        </div>
      </div>
    </div>
  );
};

export default SecondBanner;
