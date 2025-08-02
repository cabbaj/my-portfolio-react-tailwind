import mePic from "../assets/me-pic.jpg";

const About = () => {
  return (
    <section className="container flex flex-col px-2 mt-40 ">
      <h2 className="text-left section-heading">About</h2>
      <div className="flex flex-col gap-4 mt-4">
        <p className="text-left">
          Hello there! I’m Phompowadon. Bachelor of Computer Engineering at
          Rajamangala University of Technology Srivijaya. I specialize in{" "} 
          <strong>building responsive</strong>, <strong>user-focused</strong>{" "}
          web interfaces
        </p>
        <p className="text-left">
          I'm currently improving my <strong>full-stack</strong> development
          skills and always ready to learn new things.
        </p>

        <hr className="text-white" />

        <h3>Skills</h3>
         

        <img
          src={mePic}
          alt="me pic"
          className="object-cover object-top bg-auto size-40"
        />
      </div>
    </section>
  );
};

export default About;
