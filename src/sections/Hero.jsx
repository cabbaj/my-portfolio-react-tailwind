import Icon from "../assets/favicon.png";

const Hero = () => {
  return (
    <section className="container flex flex-col items-center justify-center mt-20 bg-slate-950">
      <img
        src={Icon}
        alt="icon"
        className="w-24 size-24 md:size-30 lg:size-34 xl:size-40 "
      />
      <p className="mt-4 text-xl font-bold md:text-2xl lg:text-3xl xl:text-4xl muted-text">
        Hi, I'm Pure <div className="inline-block animate-bounce">👋</div>
      </p>
      <h1 className="mt-4 text-5xl font-black text-accent md:text-7xl lg:text-8xl xl:text-9xl">
        FRONT-END <br /> DEVELOPER
      </h1>
      <p className="max-w-3xl px-4 mt-4 muted-text">
        A <strong className="text-white">Front-end</strong> developer who turns
        ideas into smooth, responsive web experiences. I craft{" "}
        <strong className="text-white">user-friendly</strong> interfaces and
        improve <strong className="text-white">1%</strong> every day.
      </p>

      <a
        href="#contact"
        className="mt-8 btn"
      >
        Hire Me
      </a>
    </section>
  );
};

export default Hero;
