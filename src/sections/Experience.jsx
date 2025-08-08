const Experience = () => {
  return (
    <section id="experience" className="container flex flex-col items-center justify-center px-4 mt-60 ">
      <h2 className="text-left section-heading">Experience</h2>
      <div className="flex flex-col gap-10 mt-8 lg:mt-20">
        <ol className="relative border-gray-700 border-s">
          <li className="mb-10 ms-4">
            <div className="absolute w-3 h-3 rounded-full mt-1.5 -start-1.5 border border-gray-900 bg-gray-700"></div>
            <time className="text-xs text-left text-slate-600 lg:text-base xl:text-lg">
              2 Dec 2024 - 22 Mar 2025
            </time>
            <h3 className="font-bold text-left sub-heading">
              Hat Yai Air Traffic Control (Intern)
            </h3>
            <p className="mt-1 text-left muted-text">
              Drone Tracker System (Web Application)
            </p>
          </li>
          <li className="ms-4">
            <div className="absolute w-3 h-3 rounded-full mt-1.5 -start-1.5 border border-slate-900 bg-slate-700"></div>
            <time className="text-xs text-left text-slate-600 lg:text-base xl:text-lg">
              18 Sep - 26 Oct 2023
            </time>
            <h3 className="font-bold text-left sub-heading">
              National Telecom Public Company Limited (Intern)
            </h3>
            <p className="mt-1 text-left muted-text">Network Configuration</p>
          </li>
        </ol>
      </div>
    </section>
  );
};

export default Experience;
