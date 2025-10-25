const Experience = () => {
  return (
    <section
      id="experience"
      className="container flex flex-col items-center justify-center px-4 mt-60 "
    >
      <h2 className="text-left section-heading">Experience</h2>
      <div className="flex flex-col gap-10 mt-8 lg:mt-20">
        <ol className="relative border-gray-700 border-s">
          <li className="mb-10 ms-4">
            <div className="absolute w-3 h-3 rounded-full mt-1.5 -start-1.5 border border-gray-900 bg-gray-700"></div>
            <time className="text-xs text-left text-slate-600 lg:text-base xl:text-lg">
              2 Dec 2024 - 22 Mar 2025
            </time>
            <h3 className="font-bold text-left sub-heading">
              Hat Yai Air Traffic Control
            </h3>
            <p className="mt-1 font-bold text-left muted-text">
              Position: Air Traffic Engineering
            </p>
            <ul className="text-sm list-disc list-inside muted-text">
              <li>Developed a Drone Tracking System (Web Application)</li>
              <li>
                Assisted the supervisor in monitoring and maintaining the
                network system
              </li>
            </ul>
          </li>
          <li className="ms-4">
            <div className="absolute w-3 h-3 rounded-full mt-1.5 -start-1.5 border border-slate-900 bg-slate-700"></div>
            <time className="text-xs text-left text-slate-600 lg:text-base xl:text-lg">
              18 Sep - 26 Oct 2023
            </time>
            <h3 className="font-bold text-left sub-heading">
              National Telecom Public Company Limited (Intern)
            </h3>
            <p className="mt-1 font-bold text-left muted-text">
              Position: Technician / Sales
            </p>
            <ul className="text-sm list-disc list-inside muted-text">
              <li>Assisted the supervisor in configuring the network</li>
              <li>Provided consultation to clients</li>
            </ul>
          </li>
        </ol>
      </div>
    </section>
  );
};

export default Experience;
