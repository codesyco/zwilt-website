import { useSelector, useDispatch } from "react-redux";
import vector from "../../assets/Vector.png";
import menu from "../../assets/Menu.png";
import closeMenu from "../../assets/Close.png";
import zwilt from "../../assets/zwilt.png";
import { toggleMenu } from "../../Redux/Actions/menuAction";
import { useEffect, useRef } from "react";

const Nav = () => {
  const isMenuOpen = useSelector((state) => state.menu.isMenuOpen);
  const dispatch = useDispatch();
  const menuButtonRef = useRef(null);
  const navListRef = useRef(null);

  const handleMenuClick = () => {
    dispatch(toggleMenu());
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMenuOpen && menuButtonRef.current && navListRef.current) {
        if (
          !menuButtonRef.current.contains(event.target) &&
          !navListRef.current.contains(event.target)
        ) {
          dispatch(toggleMenu());
        }
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isMenuOpen, dispatch]);
  return (
    <>
      <div className="flex place-items-center justify-between px-4 py-1 border-r-2 bg-[var(--accent200)] mx-4 my-5 rounded-xl drop-shadow-2xl text-white relative md:mx-8 lg:mx-12 max-[500px]:flex-row-reverse">
        <div className="flex justify-between md:hidden">
          <button
            ref={menuButtonRef}
            className="bg-transparent border-none md:hidden"
            onClick={handleMenuClick}
          >
            <img
              src={isMenuOpen ? closeMenu : menu}
              className="w-[20px] h-[20px]"
              alt=""
            />
          </button>
        </div>
        <div className="flex h-fit mr-auto md:mr-0 ">
          <img src={zwilt} alt="zwilt" className="h-[25px]" />
          <img src={vector} alt="vector" className="h-[20px] place-self-end" />
        </div>
        <div ref={navListRef} className="md:flex">
          <ul
            ref={navListRef}
            className={`
            ${isMenuOpen ? "block" : "hidden"} 
            md:flex
            md:flex-row
            md:static 
            md:shadow-none
            absolute 
            top-[110%] 
            left-0 
            text-center 
            bg-[var(--accent200)] 
            text-white 
            w-full 
            flex
            flex-col 
            gap-4
            rounded-md 
            shadow-md 
            p-4 
            md:w-auto
          `}
          >
            <li>Find Work</li>
            <li>Find Talent</li>
            <li>Articles</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <div className="hidden max-[500px]:block">
              <button className="bg-transparent font-normal">Log In</button>
              <button className="bg-white text-black rounded-2xl font-normal">
                Join Now
              </button>
            </div>
          </ul>
        </div>
        <div className="flex gap-2 text-sm md:text-base max-[500px]:hidden">
          <button className="bg-transparent font-normal">Log In</button>
          <button className="bg-white text-black rounded-2xl font-normal">
            Join Now
          </button>
        </div>
      </div>
    </>
  );
};

export default Nav;
