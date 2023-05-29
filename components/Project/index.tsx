
import React from 'react';
import Image from "next/image";

interface ProjetoProps {
    title: string,
    src: any;
    onClick: () => void;
}
const Project: React.FC<ProjetoProps> = ({ title, src, onClick }) => {
    return (
        <div className="row-span-1 relative group">
            <Image src={src} alt="image" />
            <div className="bg-[#000000bd] 
            absolute w-[100%] 
            top-0 opacity-0 
            transition 
            duration-500 
            group-hover:opacity-100 
            grid 
            place_items-center 
            text-white
            text-center">
                {title}
            </div>
        </div>
    )
}

export default Project