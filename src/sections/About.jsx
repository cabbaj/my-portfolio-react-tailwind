import mePic from "../assets/me-pic.jpg";
import reactLogo from "../assets/stacks/react.svg";

const About = () => {
  return (
    <section className="container flex flex-col px-2 mt-40 ">
      <h2 className="text-left section-heading">About</h2>
      <div className="flex flex-col gap-4 mt-4 muted-text">
        <img
          src={mePic}
          alt="me pic"
          className="object-cover object-top bg-auto size-40"
        />

        <p className="text-left">
          Hello there! I’m Phompowadon, but you can call me{" "}
          <strong className="text-white">Pure</strong>. I hold a Bachelor’s degree in Computer
          Engineering from Rajamangala University of Technology Srivijaya. I
          specialize in <strong className="text-white">building responsive</strong>,
          <strong className="text-white">user-focused</strong> web interfaces
        </p>
        <p className="text-left">
          I'm currently improving my <strong className="text-white">full-stack</strong> development
          skills and always ready to learn new things.
        </p>

        <hr />

        <h3 className="font-bold text-white">Skills</h3>
        <div className="flex gap-20">
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>Javascript</li>
          </ul>
          <ul>
            <li>React</li>
            <li>TailwindCSS</li>
            <li>Git</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
