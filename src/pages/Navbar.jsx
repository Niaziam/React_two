import brandLogo from "../assets/images/brandLogo.svg";
import { Link } from "react-router-dom";
import userImage from "../assets/images/icons/user1.svg";
import { FaBars } from "react-icons/fa";
import bellIcon from "../assets/images/icons/bellIcon.svg";
import { useState } from "react";
const navItem = [
  {
    item: "Dashboard",
    path: "/dashboard",
  },
  {
    item: "Incidents",
    path: "/incident",
  },
  {
    item: "Locations",
    path: "/location",
  },
  {
    item: "Activities",
    path: "/activite",
  },
  {
    item: "Documents",
    path: "/document",
  },
  {
    item: "Cypher Ai",
    path: "/cyper",
  },
];
function Navbar() {
  const [isMobileNav, setIsMobileNav] = useState(false);
  return (
    <header className="bg-[#E4E4E780] fixed top-0 left-0 w-full">
      <nav className="container flex  h-[70px] justify-between items-center">
        <div>
          <img src={brandLogo} alt="" />
        </div>
        <ul className=" hidden lg:flex gap-3">
          {navItem.map((it) => (
            <li
              key={it.item}
              className="navItem font-[14px] text-secondaryColor relative hover:text-black transition duration-300"
            >
              <Link to={it.path}>
                {it.item}
              </Link>
            </li>
          ))}
        </ul>
        {/* mobile nav  */}

        <div className="flex items-center justify-center gap-5">
          <div className="bg-white p-1 rounded-full cursor-pointer relative">
            <div className="w-[8px] h-[8px] rounded-full absolute bg-green-600 right-0 top-[-1px]"></div>
            <img src={bellIcon} alt="" />
          </div>
          <div className="flex items-center gap-2">
            <div>
              <img src={userImage} alt="" />
            </div>
            <div className="hidden lg:block">
              <h3 className="text-[16px] text-secondaryColor font-oneast">
                Usman Zafar
              </h3>
              <p className="text-[14px text-secondaryColor/90 font-oneast">
                usmanzafar@gmail.com
              </p>
            </div>
          </div>
          <button
            onClick={() => setIsMobileNav(!isMobileNav)}
            className="text-xl text-secondaryColor lg:hidden"
          >
            <FaBars />{" "}
          </button>
        </div>

        {isMobileNav && (
          <div className="absolute top-[70px] left-0">
            <ul className="flex flex-col gap-3 bg-slate-300 h-screen w-[300px] text-center">
              {navItem.map((it) => (
                <li
                  key={it.item}
                  className="font-[14px] text-secondaryColor hover:text-black transition mt-5 duration-300"
                >
                  <Link to={it.item === "Dashboard" ? "/" : it.path}>{it.item}</Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}

export default Navbar;
