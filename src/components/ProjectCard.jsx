const ProjectCard = ({ title, img, description, stacks }) => {
  return (
    <>
      <img
        src={img}
        alt={title}
        className="object-cover rounded-lg h-60 w-100"
      />
      <div className="flex flex-col items-center justify-center gap-2 mt-4">
        <h3 className="font-bold text-center sub-heading">{title}</h3>
        <p className="muted-text ">{description}</p>
        <div className="mt-2">
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
    </>
  );
};

export default ProjectCard;
