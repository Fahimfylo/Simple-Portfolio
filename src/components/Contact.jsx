/* eslint-disable react/no-unescaped-entities */
import facebook from "../../public/images/facebook.png";
import instagram from "../../public/images/instagram.png";
import linkedin from "../../public/images/linkedin.png";
import Lottie from "lottie-react";
import contact from "../../public/images/Contact.json";

const Contact = () => {
  return (
    <section
      id="contact"
      className="z-50 bg-blue-300 relative py-10 px-5 md:px-0"
    >
      <div className="mb-16 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="md:w-1/2 mb-8 ml-2 md:mb-0">
            <h2 className="text-3xl font-bold mb-3 text-black">Get in Touch</h2>
            <p className="mb-4 text-white text-lg">
              I'm always open to new opportunities and collaboration. Feel free
              to reach out!
            </p>
            <div className="flex">
              <a
                href="#"
                className="text-foreground/60 hover:text-foreground/80"
              >
                <img src={facebook} alt="" className="h-10 w-10" />
              </a>
              <a
                href="#"
                className="text-foreground/60 hover:text-foreground/80"
              >
                <img src={instagram} alt="" className="h-10 w-10 mx-4" />
              </a>
              <a
                href="#"
                className="text-foreground/60 hover:text-foreground/80"
              >
                <img src={linkedin} alt="" className="h-10 w-10" />
              </a>
            </div>
            <Lottie
              animationData={contact}
              className="w-[350px] mx-auto lg:w-[500px]"
            />
          </div>
          <form className="w-full md:w-1/2 bg-gray-100 rounded-lg shadow-2xl p-10">
            <h1 className="text-gray-900 text-4xl font-bold mb-7">
              Contact Me
            </h1>
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Full Name"
                className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Email"
                className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                Message
              </label>
              <textarea
                id="message"
                placeholder="Enter Your Message"
                className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              />
            </div>
            <button className="bg-red-500 text-white px-3 py-2 rounded-lg">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
