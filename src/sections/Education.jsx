const Education = () => {
  return (
    <section className="container flex flex-col items-center justify-center px-4 mt-40 ">
      <h2 className="text-left section-heading">Education</h2>
      <div className="flex flex-col gap-10 mt-8 lg:mt-20">
        <ol className="relative border-gray-700 border-s">
          <li className="mb-10 ms-4">
            <div className="absolute w-3 h-3 rounded-full mt-1.5 -start-1.5 border border-gray-900 bg-gray-700"></div>
            <time className="text-xs text-left text-slate-600 lg:text-base xl:text-lg">
              2021 - 2024
            </time>
            <h3 className="font-bold text-left sub-heading">
              Rajamangala University of Technology Srivijaya
            </h3>
            <p className="mt-1 text-left muted-text">
              Bachelor's Degree in Computer Engineering
            </p>
            <p className="mt-1 font-bold text-left muted-text">GPA 3.73</p>
          </li>
          <li className="ms-4">
            <div className="absolute w-3 h-3 rounded-full mt-1.5 -start-1.5 border border-slate-900 bg-slate-700"></div>
            <time className="text-xs text-left text-slate-600 lg:text-base xl:text-lg">
              2018 - 2020
            </time>
            <h3 className="font-bold text-left sub-heading">
              Mahavajiravudh School
            </h3>
            <p className="mt-1 text-left muted-text">Sci - Math</p>
          </li>
        </ol>
      </div>
    </section>
  );
};

export default Education;
