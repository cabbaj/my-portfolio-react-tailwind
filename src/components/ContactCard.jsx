const ContactCard = ({ icon, title, info }) => {
  return (
    <div className="w-full  bg-slate-800 px-4 py-4 flex flex-col rounded-lg border-white border ">
      <div className="flex justify-between ">
        <div className="size-10">{icon}</div>
      </div>
      <h3 className="font-bold text-sm mt-4">{title}</h3>
      <p className="text-left">{info}</p>
    </div>
  );
};

export default ContactCard;
