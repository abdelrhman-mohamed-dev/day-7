import React from "react";
import profileImage from "../assets/profile.jpeg";

const Porfile = () => {
  return (
    <div className="w-full h-screen flex justify-between items-center gap-5 p-4 max-md:flex-col">
      <img
        className="h-40 w-40 rounded-full object-cover"
        src={profileImage}
        alt="person"
      />
      <div>
        <h1 className="text-3xl font-bold mb-5">Abderhman mohamed</h1>
        <p className="text-lg font-semibold">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam sint
          repudiandae sapiente molestiae vero voluptates nesciunt eligendi,
          doloribus ab, delectus impedit, dolor ipsum reprehenderit incidunt
          vel. Iste quo nam harum!
        </p>
      </div>
    </div>
  );
};

export default Porfile;
