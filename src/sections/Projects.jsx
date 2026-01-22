import ProjectCard from "../components/ProjectCard";
import itail from "../assets/itail.png";
import weatherApp from "../assets/weatherApp.png";
import droneTracking from "../assets/droneTracking.png";

const projects = [
  {
    title: "Container Inspection Application",
    img: itail,
    description:
      "Developed a container inspection app for i-Tail Corporation's warehouse. The app was built with Power Apps and uses SharePoint as the database.",
    stacks: ["Power Apps", "SharePoint"],
  },
  {
    title: "Drone Tracking",
    img: droneTracking,
    description:
      "A drone tracking website using GPS is a platform designed to display the real-time positions of individual drones on a map. It uses Leaflet.js to manage and render the map interface, with OpenStreetMap as the map data source. Each drone provides information such as latitude, longitude, altitude, and speed. When a drone enters or approaches a no-fly zone, the system will display an alert notification.",
    stacks: ["Javascript", "Node.js", "PostgreSQL", "Socket.IO"],
    link: "https://github.com/cabbaj/drone-tracking-system",
  },
  {
    title: "Weather App",
    img: weatherApp,
    description:
      "A basic weather web app that shows the day, local time, today's weather, temperature, and humidity. You can also search for any location you want to check. Data is fetched from the OpenWeatherMap API.",
    stacks: ["Next.js", "TypeScript", "tailwindCSS", "OpenWeatherMap API"],
    link: "https://github.com/cabbaj/weather-app-nextjs",
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
