import { AiFillInstagram } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import { BsGithub } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

const Contact = () => {
  return (
    <section
      id="contact"
      className="container flex flex-col px-4 items-center justify-center mt-40 "
    >
      <h2 className="text-left section-heading">Contact</h2>
      <div className="grid w-full grid-cols-1 md:grid-cols-2 gap-4 mt-8">
        <div className="w-full  bg-slate-800 px-4 py-4 flex flex-col rounded-lg border-white border ">
          <div className="flex justify-between ">
            <MdEmail className="size-10" />
            <FiExternalLink className="" />
          </div>
          <h3 className="font-bold text-sm mt-4">Email</h3>
          <p className="text-left">ppwadon.work@gmail.com</p>
        </div>
        <div className="w-30 h-25 bg-slate-800 flex flex-col rounded-lg border-white border justify-center items-center">
          <FaFacebook className="size-10" />
          <h3 className="font-bold text-sm">Facebook</h3>
        </div>
        <div className="">
          <BsGithub />
          <h3>Github</h3>
        </div>
        <div className="h-20">
          <AiFillInstagram />
          <h3>Instagram</h3>
        </div>
      </div>
    </section>
  );
};

export default Contact;
