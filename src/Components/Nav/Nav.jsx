import vector from "../../assets/Vector.png"
import menu from "../../assets/Menu.png"
import zwilt from "../../assets/zwilt.png"
const Nav = () => {
    return (
      <>
        <div className="flex place-items-center justify-between p-4 border-r-2 bg-[var(--accent200)] mx-4 my-4 rounded-xl drop-shadow-2xl text-white">

          <div className="flex place-items-end">
            <img src={menu} className="w-[20px] h-[20px] mr-4" alt="" />
            <img src={zwilt} alt="zwilt" className="h-[25px]"/>
            <img src={vector} alt="vector" className="h-[20px]"/>
          </div>
          <div className="hidden md:flex">
            <ul className="flex gap-4">
              <li>Find Work</li>
              <li>Find Talent</li>
              <li>Articles</li>
              <li>About Us</li>
              <li>Contact Us</li>
            </ul>
          </div>
          <div className="flex gap-2">
            <button className="bg-transparent font-normal">Log In</button>
            <button className="bg-white text-black rounded-2xl font-normal">Join Now</button>
          </div>
        </div>
      </>
    );
  };
  
  export default Nav;