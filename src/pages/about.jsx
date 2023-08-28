import React from "react";
import aboutImage from "../assets/about.jpeg";

const About = () => {
  return (
    <section>
      <h1 className="text-center text-7xl font-bold mt-5 text-lime-800">
        About
      </h1>
      <div className="flex justify-between max-md:flex-col gap-5  w-full h-full p-4 mt-5">
        <div className="flex-1">
          <img
            src={aboutImage}
            alt="plant image"
            className="rounded-md ring-1 shadow-md"
          />
        </div>
        <div className="flex-1">
          <h1 className="text-center font-bold text-5xl mb-5 text-lime-700">
            Plant Blog
          </h1>
          <p className="text-sm font-light">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur
            consequuntur inventore debitis ab sed in ratione sequi quae, ea
            voluptate delectus nihil, voluptas vitae! Itaque ab eligendi laborum
            iusto deleniti! Lorem ipsum dolor, sit amet consectetur adipisicing
            elit. Ad fugiat odit possimus laudantium modi dignissimos omnis
            veritatis facilis adipisci voluptatum, explicabo iusto dolorem
            praesentium obcaecati beatae ratione, laborum quidem porro. Lorem
            ipsum dolor, sit amet consectetur adipisicing elit. Error ducimus
            velit ad consequatur sit nobis nam magni eum repellat ex dicta,
            laboriosam eaque maxime excepturi. Recusandae, maiores nostrum?
            Reiciendis, facilis? Lorem ipsum dolor, sit amet consectetur
            adipisicing elit. Tenetur consequuntur inventore debitis ab sed in
            ratione sequi quae, ea voluptate delectus nihil, voluptas vitae!
            Itaque ab eligendi laborum iusto deleniti! Lorem ipsum dolor, sit
            amet consectetur adipisicing elit. Ad fugiat odit possimus
            laudantium modi dignissimos omnis veritatis facilis adipisci
            voluptatum, explicabo iusto dolorem praesentium obcaecati beatae
            ratione, laborum quidem porro. Lorem ipsum dolor, sit amet
            consectetur adipisicing elit. Error ducimus velit ad consequatur sit
            nobis nam magni eum repellat ex dicta, laboriosam eaque maxime
            excepturi. Recusandae, maiores nostrum? Reiciendis, facilis?
          </p>
          <button className="w-38 rounded-md text-lime-900 text-center border border-lime-900 py-2 px-4 hover:bg-lime-900 hover:text-white transition mt-5">
            Contact Me
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;
