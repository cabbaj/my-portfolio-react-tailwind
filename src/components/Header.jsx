import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <header className="container px-4 py-6 mx-auto ">
      <nav className="flex items-center justify-between ">
        <h2 className="font-bold lg:text-xl md:text-lg xl:text-2xl">
          Purefolio
        </h2>

        <ul className="items-center hidden space-x-6 text-xs font-medium xl:text-sm md:flex muted-text">
          <li>
            <a href="#home" className="hover:text-accent">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="hover:text-accent">
              About
            </a>
          </li>
          <li>
            <a href="#experience" className="hover:text-accent">
              Experience
            </a>
          </li>
          <li>
            <a href="#projects" className="hover:text-accent">
              Projects
            </a>
          </li>
          <li>
            <a href="" className="text-xs btn xl:text-sm">
              Resume
            </a>
          </li>
        </ul>

        {/* menu button */}
        <div className="md:hidden" onClick={() => setShowMenu(!showMenu)}>
          <RxHamburgerMenu className="text-3xl cursor-pointer" />
        </div>

        {/* mobile menu */}
        {showMenu && (
          <div className="px-4 pt-2 md:hidden">
            <a href="#" className="block py-2">
              Home
            </a>
            <a href="#" className="block py-2">
              About
            </a>
            <a href="#" className="block py-2">
              Services
            </a>
            <a href="#" className="block py-2">
              Contact
            </a>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
