/* eslint-disable react/no-unescaped-entities */
import MernStack from "../../public/images/mernstack.png";
import Html from "../../public/images/Html.png";
import Css from "../../public/images/CSS.png";
import Javascript from "../../public/images/JS.png";
import ReactLogo from "../../public/images/React.png";
import ReduxLogo from "../../public/images/Redux.png";
import Tailwind from "../../public/images/Tailwind Css.png";
import Bootstrap from "../../public/images/Bootstrap.png";
import Nodejs from "../../public/images/NodeLogo.png";
import Mongodb from "../../public/images/mongodb.svg";
import Express from "../../public/images/Express.png";
import Nextjs from "../../public/images/NextJs.png";

const About = () => {
  return (
    <div className="relative" id="about">
      <div className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-lg text-red-600 font-semibold tracking-wide uppercase">
              About Me
            </h2>
            <p className="mt-2 text-4xl leading-8 font-bold tracking-tight text-gray-900 sm:text-4xl">
              Hi, I'm Fahim Rahman
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              A Full-Stack Developer with expertise in web development, SEO and
              MERN stack
            </p>
          </div>
          <div className="mt-10">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
              <div>
                <h3 className="text-2xl font-semibold text-gray-900">
                  My Journey
                </h3>
                <p className="mt-4 text-lg text-gray-600">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Perspiciatis adipisci est debitis corrupti qui error expedita,
                  consequuntur, id cupiditate, suscipit earum ut autem impedit.
                  Neque unde aliquam distinctio. Fugiat, incidunt!
                </p>
                <img src={MernStack} alt="" className="rounded-lg w-52 mt-4" />
              </div>
              <div className="border rounded-lg md:p-7 py-7 flex flex-col gap-8 items-center shadow-2xl shadow-red-300">
                <h3 className="text-2xl font-semibold text-red-600">
                  Skills & Expertise
                </h3>
                <div className="flex items-center justify-center flex-wrap gap-3">
                  <div className="border border-red-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-red-300">
                    <img src={Html} alt="" className="w-10" />
                    <span className="font-semibold">HTML</span>
                  </div>
                  <div className="border border-red-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-red-300">
                    <img src={Css} alt="" className="w-8" />
                    <span className="font-semibold">CSS</span>
                  </div>
                  <div className="border border-red-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-red-300">
                    <img src={Javascript} alt="" className="w-10" />
                    <span className="font-semibold">Javascript</span>
                  </div>
                  <div className="border border-red-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-red-300">
                    <img src={ReactLogo} alt="" className="w-8 rounded-full" />
                    <span className="font-semibold">React</span>
                  </div>
                  <div className="border border-red-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-red-300">
                    <img src={ReduxLogo} alt="" className="w-8" />
                    <span className="font-semibold">Redux</span>
                  </div>
                  <div className="border border-red-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-red-300">
                    <img src={Tailwind} alt="" className="w-8 rounded-full" />
                    <span className="font-semibold">Tailwind</span>
                  </div>
                  <div className="border border-red-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-red-300">
                    <img src={Bootstrap} alt="" className="w-10" />
                    <span className="font-semibold">Bootstrap</span>
                  </div>
                  <div className="border border-red-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-red-300">
                    <img src={Nodejs} alt="" className="w-10" />
                    <span className="font-semibold">Node Js</span>
                  </div>
                  <div className="border border-red-300 flex items-center w-max px-2 py-1 rounded-lg shadow-md shadow-red-300">
                    <img src={Mongodb} alt="" className="w-10" />
                    <span className="font-semibold">Mongodb</span>
                  </div>
                  <div className="border border-red-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-red-300">
                    <img src={Express} alt="" className="w-10" />
                    <span className="font-semibold">Express</span>
                  </div>
                  <div className="border border-red-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-red-300">
                    <img src={Nextjs} alt="" className="w-9" />
                    <span className="font-semibold">Next Js</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12">
            <h3 className="text-2xl font-semibold text-gray-900">
              More About Me
            </h3>
            <p className="mt-4 text-lg text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Similique in dolorum consequuntur eos accusantium velit, fugit
              delectus ipsa sint. Tenetur, architecto veritatis et numquam harum
              obcaecati odio est deleniti! Tempore, corrupti inventore ad sequi
              cupiditate ut. Id fugit, cum architecto enim voluptas provident
              aut dignissimos quidem, culpa quae rerum repudiandae saepe
              facilis? Vitae reiciendis, nam cum velit officia commodi
              dignissimos!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
