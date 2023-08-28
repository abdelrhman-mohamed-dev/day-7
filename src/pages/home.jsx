import React from "react";
import heroImage from "../assets/hero.jpeg";

const Home = () => {
  return (
    <section className="w-full h-full p-4">
      <div className="w-full h-full relative">
        <img
          src={heroImage}
          alt="plants"
          className="w-full h-screen object-cover relative"
        />
        <div className="absolute top-1/3 left-0 right-0 ">
          <h1 className="text-center text-lime-900 text-7xl font-bold">Blog</h1>
          <p className="text-lime-900 text-center text-sm font-semibold mt-5">
            " only plants world "
          </p>
        </div>
      </div>
    </section>
  );
};

export default Home;
