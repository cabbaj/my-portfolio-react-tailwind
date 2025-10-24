import mePic from "../assets/me-pic.jpg";
import { FaHtml5 } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaCss3Alt } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaGitAlt } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";

const About = () => {
  return (
    <section id="about" className="container flex flex-col px-4 mt-60 md:px-10 ">
      <h2 className="text-center section-heading">About</h2>
      <div className="flex flex-col mt-8 md:justify-center gap-y-4 lg:mt-20 muted-text md:flex-row">
        <img
          src={mePic}
          alt="me pic"
          className="object-cover object-top mx-auto bg-auto rounded-xl md:mx-10 size-full md:size-60 lg:size-100 xl:size-120"
        />

        <div className="flex flex-col gap-4 md:ml-4 lg:max-w-2xl">
          <p className="text-left">
            Hello there! I'm Phompowadon, but you can call me{" "}
            <strong className="text-white">Pure</strong>. I hold a Bachelor’s
            degree in Computer Engineering from Rajamangala University of
            Technology Srivijaya. I specialize in{" "}
            <strong className="text-white">building responsive</strong>,
            <strong className="text-white">user-focused</strong> web interfaces
          </p>
          <p className="text-left">
            I'm currently improving my{" "}
            <strong className="text-white">full-stack</strong> development
            skills and always ready to learn new things.
          </p>

          <hr />

          <h3 className="font-bold text-white sub-heading">Skills</h3>
          <div className="flex gap-15 ">
            <ul className="space-y-4 text-sm md:text-base lg:text-xl ">
              <li className="flex items-center gap-4">
                <FaHtml5 size="1.5em" />
                HTML
              </li>
              <li className="flex items-center gap-4">
                <FaCss3Alt size="1.5em" />
                CSS
              </li>
              <li className="flex items-center gap-4">
                <IoLogoJavascript size="1.5em" />
                Javascript
              </li>
            </ul>
            <ul className="space-y-4 text-sm md:text-base lg:text-xl ">
              <li className="flex items-center gap-4">
                <RiNextjsFill size="1.5em" />
                NextJS
              </li>
              <li className="flex items-center gap-4">
                <RiTailwindCssFill size="1.5em" />
                TailwindCSS
              </li>
              <li className="flex items-center gap-4">
                <FaGitAlt size="1.5em" />
                Git
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
