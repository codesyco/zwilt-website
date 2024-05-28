import vector from "../../assets/Vector (7).png";
import banner from '../../assets/Group 626340.svg'
const FIfthBanner = () => {
  return (
    <div>
      <div className="bg-gradient-to-b from-[#EDEFFF00] to-[#EDEFFF] py-32 px-5 flex flex-col gap-10 md:flex-row">
        <div className="flex flex-col gap-4 lg:justify-center lg:p-10">
          <div className="text-3xl font-bold md:text-4xl">Why choose Zwilt?</div>
          <div className="opacity-80">
            We take complex hiring processes - and simplify them. Connecting you
            to the world&apos;s highly qualified talent pool.
          </div>
        </div>
        <div className="h-400px bg-white p-5 rounded-xl flex flex-col gap-4 lg:flex-row">
          <div className="lg:flex lg:flex-col lg:justify-center lg:gap-5">
          <div className="text-2xl font-bold">Onboard without the risk.</div>
          <div className="opacity-80">
            <ul>
              <li className="flex place-items-center">
                <div></div>
                We pick the best for you to select.
              </li>
              <li className="flex place-items-center">
                <div></div>
                Thousands of vetted candidates in dozens of categories.
              </li>
              <li className="flex place-items-center">
                <div></div>
                Risk-free resource swapping for the best fit.
              </li>
            </ul>
          </div>
          <div className="flex place-items-center gap-2">
            <div className="bg-black w-[30px] h-[30px] flex place-items-center rounded-xl justify-center"><img src={vector} alt="" className="w-[15px] h-[10px]"/></div>
            <div>Learn More</div>
          </div>
          </div>
          <div><img src={banner} alt="" /></div>
        </div>
      </div>
    </div>
  );
};

export default FIfthBanner;
