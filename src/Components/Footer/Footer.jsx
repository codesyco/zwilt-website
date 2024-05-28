import zwiltLogo from "../../assets/zwilt.png";
import vector2 from "../../assets/Vector (2).png";
import zwilthLogoVector from "../../assets/Vector.png";
const Footer = () => {
  return (
    <div className="bg-gradient-to-b from-[#0C0C0C] to-[#202229] pt-5 flex flex-col parallelogram-clip-top gap-12 text-white">
        <div className="px-5 md:px-20">
      <div className="bg-[#525AA0] parallelogram-clip h-96 flex flex-col items-center justify-center gap-6 relative">
        <div className="text-2xl font-bold p-20 text-center">
          Need A job done, and done well? Get started
        </div>
        <div className="absolute top-[65%] w-4/5 flex flex-col items-center gap-5">
          <div className="w-16 h-16 flex place-items-center justify-center rounded-3xl bg-[#202229]">
            <img src={vector2} alt="" className="w-4 h-6" />
          </div>
          <div className="hidden w-4/5 flex-col gap-4">
            <div className="rounded-xl overflow-hidden h-32 text-black">
              <input
                type="text"
                placeholder="Enter your message"
                className="w-full h-full p-5"
              />
            </div>
            <div className="rounded-xl overflow-hidden text-black">
              <input
                type="text"
                placeholder="Enter your email"
                className="w-full p-5"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col pt-16 gap-4 md:pt-10 lg:flex-row md:mt-20 lg:py-10 lg:gap-20">
        <div className="flex flex-col gap-8">
          <div className="flex">
            <img src={zwiltLogo} alt="" />
            <img src={zwilthLogoVector} alt="" />
          </div>
          <h4 className="opacity-80 md:text-lg md:max-w-[350px]">
            We take complex hiring processes - and simplify them. Connecting you
            to the world&apos;s highly qualified talent pool.
          </h4>
          <div className="flex flex-col gap-4">
            <h4 className="opacity-55 md:text-lg">LINKS AND REDIRECTS</h4>
            <div className="flex gap-4">
              <button className="text-[#EDEFFF] bg-[#292B34] rounded-3xl px-10">
                Hire now
              </button>
              <button className="text-[#EDEFFF] bg-[#292B34] rounded-3xl px-10">
                Apply now
              </button>
            </div>
          </div>
        </div>
        <div>
          <div className="flex flex-col gap-4">
            <h2 className="text-3xl font-bold lg:text-5xl lg:max-w-[550px]">
              Connecting the right people to the right businesses.
            </h2>
            <div className="flex flex-col gap-8 lg:flex-row lg:justify-between lg:pt-20 lg:min-w-[650px] ">
              <div className="flex flex-col gap-4">
                <p className="opacity-60">PLATFORM</p>
                <ul className="flex flex-col gap-4">
                  <li className="animated-underline">Find Work</li>
                  <li className="animated-underline">Find Talent</li>
                  <li className="animated-underline">Categories</li>
                  <li className="animated-underline">About Us</li>
                </ul>
              </div>
              <div className="flex flex-col gap-4">
                <p className="opacity-60">CATEGORIES</p>
                <ul className="flex flex-col gap-4">
                  <li className="animated-underline">Data Science</li>
                  <li className="animated-underline">IT & Networking</li>
                  <li className="animated-underline">Web & Mobile</li>
                </ul>
              </div>
              <div className="flex flex-col gap-4">
                <p className="opacity-60">HELP</p>
                <ul className="flex flex-col gap-4">
                  <li className="animated-underline">FAQ&apos;s</li>
                  <li className="animated-underline">Contact Us</li>
                </ul>
              </div>
              <div className="flex flex-col gap-4">
                <p className="opacity-60">GET IN TOUCH</p>
                <ul className="flex flex-col gap-4">
                  <li className="animated-underline">Instagram</li>
                  <li className="animated-underline">Linkedin</li>
                  <li className="animated-underline">Twitter</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
      <div className="border-t-[1.5px] border-slate-200 flex flex-col gap-2 justify-around md:flex-row md:justify-between md:px-32 opacity-60 font-extralight md:py-2">
        <div>All rights reserved by Zwilt</div>
        <div className="flex gap-4">
          <div className="underline cursor-pointer">Privacy Policy</div>
          <div className="underline cursor-pointer">Terms and Conditions</div>
        </div>
      </div>

    </div>
  );
};

export default Footer;
