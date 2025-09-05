const ProjectCard = ({ title, img, description, stacks }) => {
  return (
    <div className="flex flex-col md:flex-row">
      <img
        src={img}
        alt={title}
        className="object-cover rounded-lg h-60 w-100"
      />
      <div className="flex flex-col justify-center gap-2 mt-4">
        <h3 className="font-bold text-center sub-heading">{title}</h3>
        <p className="ml-4 text-left md:ml-0 muted-text md:text-center">
          {description}
        </p>
        <div className="mx-auto mt-2">
          {stacks.map((stack, index) => (
            <span
              className="px-2 py-1 mr-3 rounded-xl bg-slate-800 muted-text"
              key={index}
            >
              {stack}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
