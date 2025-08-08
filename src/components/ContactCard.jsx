import { FiExternalLink } from "react-icons/fi";

const ContactCard = ({ icon, title, info, bg, link }) => {
  return (
    <a href={link} target="_blank" >
      <div
        className={`${bg}  flex flex-col w-full max-w-3xl px-4 py-4  rounded-xl bg-slate-800`}
      >
        <div className="flex justify-between drop-shadow-xl/50">
          {icon}
          <FiExternalLink />
        </div>
        <div className="drop-shadow-xl/50">
          <h3 className="mt-4 text-sm font-bold ">{title}</h3>
          <p className="text-sm text-left">{info}</p>
        </div>
      </div>
    </a>
  );
};

export default ContactCard;
