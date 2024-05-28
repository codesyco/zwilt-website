import PropTypes from "prop-types";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { toggleDropdown } from "../Actions/dropDownAction";
import vector1 from "../assets/Vector (10).png";
import vector2 from "../assets/Vector (11).png";

const Dropdown = ({ Step, Title, Content }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();

  const handleClick = () => {
    setIsOpen(!isOpen);
    dispatch(toggleDropdown());
  };

  return (
    <details
      className={`group p-4 border border-[#F0F0F0] rounded-xl mb-4 ${
        isOpen ? "dropShadow-steps" : ""
      }`}
    >
      <summary
        className="cursor-pointer group-open:mb-2 flex place-items-center gap-7"
        onClick={handleClick}
      >
        <div
          className={
            isOpen
              ? "w-[40px] h-[40px] flex justify-center place-items-center rounded-full p-4 bg-[#8BA4FD]"
              : "w-[40px] h-[40px] flex justify-center place-items-center rounded-full p-4 bg-[#ECECEC]"
          }
        >
          <img src={isOpen ? vector2 : vector1} alt="" />
        </div>
        <div>
          <strong>Step&nbsp;{Step}:&nbsp;</strong>
          {Title}
        </div>
      </summary>
      <div className="group-open:animate-slide-down">{Content}</div>
    </details>
  );
};

Dropdown.propTypes = {
  Step: PropTypes.number.isRequired,
  Title: PropTypes.string.isRequired,
  Content: PropTypes.string.isRequired,
};

export default Dropdown;