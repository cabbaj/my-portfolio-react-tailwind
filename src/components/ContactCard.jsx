import { FiExternalLink } from "react-icons/fi";

const ContactCard = ({ icon, title, info }) => {
  return (
    <div className="flex flex-col w-full max-w-3xl px-4 py-4 border border-white rounded-lg bg-slate-800 ">
      <div className="flex justify-between">
        {icon}
        <FiExternalLink />
      </div>
      <h3 className="mt-4 text-sm font-bold">{title}</h3>
      <p className="text-left">{info}</p>
    </div>
  );
};

export default ContactCard;
