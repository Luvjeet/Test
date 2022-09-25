import { useState } from "react";
// importing animation
import { motion } from "framer-motion";
import { subMenuAnimate, downArrowAnim } from "../animation";
// importing logo
import logo from "../Images/LOGO.svg";
import styled from "styled-components";
// icons
import { IoIosArrowDown } from "react-icons/io";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <NavbarStyle>
      <nav>
        <span className="logo">
          <img src={logo} alt="dashmesh" />
          <h1>
            Dashmesh <br /> Travels
          </h1>
        </span>
        <div className="titles">
          <ul>
            <li>
              <span className="underline">Home</span>
            </li>

            <li>
              <span
                className="underline"
                onMouseEnter={() => setIsOpen(true)}
                onMouseLeave={() => setIsOpen(false)}
              >
                Services
              </span>
              <motion.div
                className="icon"
                onMouseEnter={() => setIsOpen(true)}
                onMouseLeave={() => setIsOpen(false)}
                variants={downArrowAnim}
                initial="hidden"
                animate={isOpen ? "show" : "hidden"}
              >
                <IoIosArrowDown />
              </motion.div>
              <SelectMenuStyle
                className="select-menu"
                variants={subMenuAnimate}
                initial="hidden"
                animate={isOpen ? "show" : "hidden"}
                layout
                onMouseEnter={() => setIsOpen(true)}
                onMouseLeave={() => setIsOpen(false)}
              >
                <motion.div className="sub-menu-item">Hotels</motion.div>
                <motion.div className="sub-menu-item">
                  Staff Transportation
                </motion.div>
                <motion.div className="sub-menu-item">
                  Vehicle For Events
                </motion.div>
              </SelectMenuStyle>
            </li>

            <li>
              <span className="underline">About</span>
            </li>

            <li>
              <span className="underline">Contact Us</span>
            </li>
          </ul>
        </div>
      </nav>
    </NavbarStyle>
  );
};

const NavbarStyle = styled.div`
  background-color: var(--first-color);
  width: 100%;
  padding: 1rem;
  nav {
    display: flex;
    justify-content: space-between;
    user-select: none;
  }
  .logo {
    display: flex;
    font-size: var(--h1-font-size);
    h1 {
      font-size: var(--big-font-size);
      color: var(--white-color);
    }
  }
  .titles {
    width: 75%;
    margin: auto;
    ul {
      list-style: none;
      display: flex;
      justify-content: space-evenly;
    }
    li {
      display: flex;
      color: var(--white-color);
      font-size: var(--h2-font-size);
      user-select: var(--second-color);
      position: relative;
      :hover {
        cursor: pointer;
      }
      .underline {
        display: flex;
        position: relative;
        user-select: none;
      }
      .underline:after {
        content: "";
        position: absolute;
        width: 100%;
        height: 3px;
        transform: scaleX(0);
        bottom: -2px;
        left: 0;
        background-color: var(--white-color);
        transform-origin: bottom right;
        transition: transform 0.3s ease-out;
        border-radius: 2px;
      }
      .underline:hover:after {
        transform: scaleX(1);
        transform-origin: bottom left;
      }
      .icon {
        color: var(--white-color);
        font-size: var(--h1-font-size);
      }
    }
  }
`;

const SelectMenuStyle = styled(motion.div)`
  position: absolute;
  top: 20px;
  background-color: var(--white-color);
  box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px,
    rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px,
    rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px;
  color: var(--black-color);
  padding: 1rem;
  cursor: default;
  font-size: var(--small-font-size);
  .sub-menu-item {
    margin: 1rem 0;
    transition: 200ms all;
    :hover {
      transform: translateX(5px);
      color: var(--third-color);
      cursor: pointer;
    }
  }
`;

export default Navbar;
