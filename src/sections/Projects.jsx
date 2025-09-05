import ProjectCard from "../components/ProjectCard";
import itail from "../assets/itail.png";
import weatherApp from "../assets/weatherApp.png";

const projects = [
  {
    title: "Container Inspection Application",
    img: itail,
    description:
      "Developed a container inspection app for Itail Corporation's warehouse. The app was built with Power Apps and uses SharePoint as the database.",
    stacks: ["Power Apps", "SharePoint"],
  },
  {
    title: "Weather App",
    img: weatherApp,
    description:
      "A basic weather web app that shows the day, local time, today's weather, temperature, and humidity. You can also search for any location you want to check. Data is fetched from the OpenWeatherMap API.",
    stacks: ["Next.js", "TypeScript"],
  },
];

const Projects = () => {
  return (
    <section className="container flex flex-col items-center justify-center px-4 mt-60 ">
      <h2 className="text-left section-heading">Projects</h2>
      <div className="flex flex-col items-center justify-center max-w-5xl mt-8 gap-x-8 gap-y-40 lg:mt-20 md:flex-col">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
