import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <header className="container px-4 py-6 mx-auto ">
      <nav className="flex items-center justify-between ">
        <a href="/">
          <h2 className="font-bold lg:text-xl md:text-lg xl:text-2xl">
            Purefolio
          </h2>
        </a>

        {/* desktop menu */}
        <ul className="items-center hidden space-x-6 text-xs font-medium xl:text-sm md:flex muted-text">
          <li>
            <a href="/" className="hover:text-accent">
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
            <a href="#contact" className="hover:text-accent">
              Contact
            </a>
          </li>
          <li>
            <a
              href="/Resume.pdf"
              target="_blank"
              className="text-xs btn xl:text-sm"
            >
              Resume
            </a>
          </li>
        </ul>

        {/* menu button */}
        <div
          className="fixed p-3 bg-white cursor-pointer rounded-xl md:hidden top-5 right-4"
          onClick={() => setShowMenu(!showMenu)}
        >
          <RxHamburgerMenu className="text-xl text-slate-950" />
        </div>

        {/* mobile menu */}
        {showMenu && (
          <div className="fixed top-0 left-0 z-10 w-screen gap-4 bg-slate-950">
            <div
              className="fixed p-3 bg-white cursor-pointer rounded-xl md:hidden top-5 right-4"
              onClick={() => setShowMenu(!showMenu)}
            >
              <IoMdClose className="text-xl text-slate-950" />
            </div>
            <div className="flex flex-col items-center justify-center w-screen h-screen gap-10 px-4 pt-2 text-xl md:hidden">
              <a
                href="/"
                onClick={() => setShowMenu(!showMenu)}
                className="block "
              >
                Home
              </a>
              <a
                href="#about"
                onClick={() => setShowMenu(!showMenu)}
                className="block "
              >
                About
              </a>
              <a
                href="#experience"
                onClick={() => setShowMenu(!showMenu)}
                className="block "
              >
                Experience
              </a>
              <a
                href="#contact"
                onClick={() => setShowMenu(!showMenu)}
                className="block "
              >
                Contact
              </a>
              <hr className="w-1/2 border muted-text" />
              <a href="/resume.pdf" target="_blank" className=" btn">
                Resume
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
