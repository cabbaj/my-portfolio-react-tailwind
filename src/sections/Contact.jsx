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
    },
    {
      icon: <FaFacebook className="size-10" />,
      title: "Facebook",
      info: "Phompo Vadonz",
    },
    {
      icon: <BsGithub className="size-10" />,
      title: "Github",
      info: "@cabbaj",
    },
    {
      icon: <AiFillInstagram className="size-10" />,
      title: "Instagram",
      info: "@notpureq",
    },
  ];

  return (
    <section
      id="contact"
      className="container flex flex-col items-center justify-center px-4 mt-40 "
    >
      <h2 className="text-left section-heading">Contact</h2>
      <div className="grid w-full max-w-3xl grid-cols-1 gap-4 mt-8 md:grid-cols-2 md:gap-y-10 md:gap-x-20 lg:mt-20">
        {contacts.map((contact, index) => (
          <ContactCard key={index} {...contact} />
        ))}
      </div>
    </section>
  );
};

export default Contact;
