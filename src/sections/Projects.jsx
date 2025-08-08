import ProjectCard from "../components/ProjectCard";
import itail from "../assets/itail.png";

const projects = [
  {
    title: "Container Inspection Application",
    img: itail,
    description:
      "Create a container inspection app for the Itail Corporation's warehouse department. The app built with Power Apps and use SharePoint as the database",
    stacks: ["PowerApp", "SharePoint"],
  },
];

const Projects = () => {
  return (
    <section className="container flex flex-col items-center justify-center px-4 mt-60 ">
      <h2 className="text-left section-heading">Projects</h2>
      <div className="flex flex-col items-center justify-center max-w-5xl mt-8 gap-x-8 lg:mt-20 xl:gap-x-16 md:flex-row">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
