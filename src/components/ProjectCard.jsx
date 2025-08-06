const ProjectCard = ({ title, img, description, stacks }) => {
  return (
    <div className="flex flex-col justify-center items-center mt-8">
      <img src={img} alt={title} className="size-60 " />
      <div className="mt-4 gap-2 justify-center flex flex-col items-center">
        <h3 className="">{title}</h3>
        <p className="muted-text">{description}</p>
        <div className="mt-2">
          {stacks.map((stack, index) => (
            <span
              className="bg-white text-slate-950 mr-3 rounded-lg py-1 px-2"
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
