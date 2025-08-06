import ProjectCard from "../components/ProjectCard";
import itail from "../assets/favicon.png";

const projects = [
  {
    title: "Container Inspection Application",
    img: itail,
    description:
      "create the container inspection app for use in loading department's itail corperation create with powerapp and create database with sharepoint",
    stacks: ["PowerApp", "SharePoint"],
  },
];

const Projects = () => {
  return (
    <section className="container flex flex-col px-4 items-center justify-center mt-40 ">
      <h2 className="text-left section-heading">Projects</h2>
      {projects.map((project, index) => (
        <ProjectCard key={index} {...project} />
      ))}
    </section>
  );
};

export default Projects;
