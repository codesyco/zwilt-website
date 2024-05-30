import { useState, useEffect } from "react";
import vector from "../../assets/Vector (7).png";
import banner from "../../assets/Group 626340.svg";
import secondSlide1 from '../../assets/Frame 626665.svg'
import secondSlide2 from '../../assets/Group 626506.svg'
import secondSlide3 from '../../assets/Group 626502.svg'
import thirdSlide1 from '../../assets/Activity bar.svg'
import thirdSlide2 from '../../assets/Activity bar (1).svg'
import thirdSlide3 from '../../assets/Group 626504.svg'
import thirdSlide4 from '../../assets/Group 626505.svg'
import thirdSlide5 from '../../assets/Group 626506 (2).svg'

const slides = [
  {
    title: "Onboard without the risk.",
    content: (
      <ul>
        <li className="flex place-items-center gap-2">
          <div className="h-2 shrink-0 bg-purple-600 w-4 rounded-md"></div>
          We pick the best for you to select.
        </li>
        <li className="flex place-items-center gap-2">
          <div className="h-2 shrink-0 bg-purple-600 w-4 rounded-md md:w-4 lg:w-4"></div>
          Thousands of vetted candidates in dozens of categories.
        </li>
        <li className="flex place-items-center gap-2">
          <div className="h-2 shrink-0 bg-purple-600 w-4 rounded-md"></div>
          Risk-free resource swapping for the best fit.
        </li>
      </ul>
    ),
  },
  {
    title: "An open book.",
    content: (
      <ul>
        <li className="flex place-items-center gap-2">
          <div className="h-2 shrink-0 bg-[#FFBE2E] w-4 rounded-md"></div>
          Easy and transparent one-to-one chat with candidates.
        </li>
        <li className="flex place-items-center gap-2">
          <div className="h-2 shrink-0 bg-[#FFBE2E] w-4 rounded-md md:w-4 lg:w-4"></div>
          Simple and convenient payment methods.
        </li>
        <li className="flex place-items-center gap-2">
          <div className="h-2 shrink-0 bg-[#FFBE2E] w-4 rounded-md"></div>
          ZReview past ratings.
        </li>
      </ul>
    ),
  },
  {
    title: "Stay in the loop.",
    content: (
      <ul>
        <li className="flex place-items-center gap-2">
          <div className="h-2 shrink-0 bg-[#C7F4C2] w-4 rounded-md"></div>
          Track your staff activity down to every minute with screenshots.
        </li>
        <li className="flex place-items-center gap-2">
          <div className="h-2 shrink-0 bg-[#C7F4C2] w-4 rounded-md md:w-4 lg:w-4"></div>
          Comprehensive timesheet data to process payments.
        </li>
        <li className="flex place-items-center gap-2">
          <div className="h-2 shrink-0 bg-[#C7F4C2] w-4 rounded-md"></div>
          Create projects to organize and assign tasks more effectively.
        </li>
      </ul>
    ),
  },
];
const renderSlides = (currentSlide) => {
  if(currentSlide === 0){
    return (
      <div className="lg:w-[470px] lg:h-[450px] flex">
        <img src={banner} alt="" />
      </div>
    )
  }
  if(currentSlide === 1){
    return (
      <div className="lg:w-[470px] lg:h-[450px] flex justify-center">
        <img src={secondSlide1} alt="" className="absolute left-0 w-[50px] md:w-[70px] lg:w-[80px] lg:left-[-10]"/>
        <img src={secondSlide3} alt="" className=" md:w-[400px] max-w-[400px]"/>
        <img src={secondSlide2} alt="" className="absolute w-[70px] md:w-[90px]  lg:w-[100px] right-0 top-32"/>
      </div>
    )
  }
  if(currentSlide === 2){
    return (
      <div className="lg:w-[450px] lg:h-[450px] flex justify-center">
        <img src={thirdSlide1} alt="" className="absolute max-w-[250px] bottom-[-35px] right-0"/>
        <img src={thirdSlide2} alt="" className="absolute max-w-[250px] left-[-20px] top-[-10px]"/>
        <img src={thirdSlide3} alt="" className=" max-w-[300px]"/>
        <img src={thirdSlide4} alt="" className="absolute bottom-0 left-2 max-w-[80px]"/>
        <img src={thirdSlide5} alt="" className=" max-w-[80px]"/>
      </div>
    )
  }
}

const FifthBanner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <div className="bg-gradient-to-b from-[#EDEFFF00] to-[#EDEFFF] py-32 px-5 flex flex-col gap-10 md:flex-row">
        <div className="flex flex-col gap-4 lg:justify-center lg:p-10">
          <div className="text-3xl font-bold md:text-4xl">
            Why choose Zwilt?
          </div>
          <div className="opacity-80">
            We take complex hiring processes - and simplify them. Connecting you
            to the world&apos;s highly qualified talent pool.
          </div>
        </div>
        <div
          id="slider"
          className="h-450px w-full bg-white p-5 rounded-xl flex flex-col gap-4 lg:flex-row"
        >
          <div className="flex flex-col min-w-[200px] gap-4 lg:flex lg:flex-col lg:justify-center lg:gap-5">
            <div className="text-2xl font-bold">
              {slides[currentSlide].title}
            </div>
            <div className="opacity-80">{slides[currentSlide].content}</div>
            <div className="flex place-items-center gap-2">
            <div className="bg-black w-[30px] h-[30px] flex place-items-center rounded-xl justify-center"><img src={vector} alt="" className="w-[15px] h-[10px]"/></div>
            <div>Learn More</div>
          </div>
          </div>
          <div className="relative">
            {renderSlides(currentSlide)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FifthBanner;
