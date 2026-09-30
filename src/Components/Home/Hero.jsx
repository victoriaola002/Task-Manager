import React from "react";
import HeroImg from '../../assets/hero image 1.png' 
const Hero = () => {
  return (
    <div className="mx-auto w-10/12 flex flex-col md:flex-row items-left md:items-center justify-between">
      <div  className="my-4 w-full md:w-1/2 text-center md:text-left">
        <h1 className="font-semibold text-4xl">Manage your Tasks</h1>
        <h1 className="text-[#974FD0] font-semibold text-4xl my-1">TaskDuty</h1>
        <p className="leading-6 text-[#737171]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum <br />
          repudiandae consectetur soluta natus rerum in commodi eius libero <br/>
          dolorem voluptatum minus, ut doloremque sequi blanditiis minima ex <br/>
          dolorem voluptatum minus, ut doloremque sequi blanditiis minima ex <br/>
          mollitia reiciendis delectus suscipit. 
        </p>
        <button className="bg-[#974FD0] px-4 py-2 my-5 text-white rounded">Go To my Tasks</button>
      </div>
      <div className="w-full md:w-1/2 flex justify-center md:justify-end">
        <img src={HeroImg} alt="heroimg" />
      </div>
    </div>
  );
};

export default Hero;
