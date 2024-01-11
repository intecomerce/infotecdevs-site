import React from "react";
import Image from "next/image";

interface ProjetoProps {
  title: string;
}
const ProjectDetail: React.FC<ProjetoProps> = ({ title }) => {
  return (
    <div
      className="row-span-1 relative group drop-shadow-2xl"
    >
      {/* <Image src={src} alt="image" /> */}
      <div
        className="bg-[#000000bd] 
                    absolute w-[100%] 
                    top-0 opacity-0 
                    transition 
                    duration-500 
                    group-hover:opacity-100 
                    grid 
                    place_items-center 
                    text-white
                    text-center
                    "
      >
        {title}
      </div>
    </div>
  );
};

export default ProjectDetail;
