import { AiFillInstagram } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import { BsGithub } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import ContactCard from "../components/ContactCard";

const Contact = () => {
  const contacts = [
    {
      icon: <MdEmail className="size-10" />,
      title: "Email",
      info: "ppwadon.work@gmail.com",
      bg: "bg-gradient-to-t from-slate-800  to-blue-900",
      link: "",
    },
    {
      icon: <FaFacebook className="size-10" />,
      title: "Facebook",
      info: "Phompo Vadonz",
      bg: "bg-gradient-to-t from-blue-600  to-cyan-500",
      link: "https://www.facebook.com/phompo.vadonz",
    },
    {
      icon: <BsGithub className="size-10" />,
      title: "Github",
      info: "@cabbaj",
      bg: "bg-gradient-to-t from-neutral-900  to-neutral-800",
      link: "https://github.com/cabbaj",
    },
    {
      icon: <AiFillInstagram className="size-10" />,
      title: "Instagram",
      info: "@notpureq",
      bg: "bg-gradient-to-br from-yellow-400 via-pink-600 to-violet-600",
      link: "https://www.instagram.com/notpureq/",
    },
  ];

  return (
    <section
      id="contact"
      className="container flex flex-col items-center justify-center px-4 mt-40 "
    >
      <h2 className="text-left section-heading">Contact</h2>
      <div className="grid w-full max-w-3xl grid-cols-1 gap-4 mt-8 md:grid-cols-2 md:gap-y-10 md:gap-x-20 lg:mt-20 ">
        {contacts.map((contact, index) => (
          <ContactCard key={index} {...contact} />
        ))}
      </div>
      <a
        href="../../public/resume.pdf"
        target="_blank"
        className="px-4 py-2 mt-20 duration-500 ease-in-out border-2 hover:bg-gradient-to-t hover:from-accent-dark hover:to-accent rounded-xl border-accent"
      >
        view rusume
      </a>
    </section>
  );
};

export default Contact;
