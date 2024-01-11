"use client";
import ProjectDetail from "@/components/ProjectDetail";
import Link from "next/link";
import {
    AiFillInstagram,
    AiFillLinkedin,
    AiOutlineWhatsApp,
} from "react-icons/ai";

export default function PetshopProj() {

    const handleRedirect = ()=>{
        // onClick={() =>
                    //     redireckWork(
                    //         "https://landingpage-pets-kdov8wpu7-oclecio94.vercel.app/"
                    //     )
                    // }
    }
    return (
        <div className="img-1 h-screen bg-cover bg-center bg-fixed flex items-center">
            <div className="container mx-auto px-4">
                <div className="max-w-[450px] text-white flex flex-col gap-[40px]">
                    <div>
                        <h1 data-aos="fade-right" className="text-5xl">
                            PetshopProj
                        </h1>
                        <h4 className="text-2xl mt-3"></h4>

                        <ProjectDetail title="Pet Shop"/>
                    </div>
                </div>
            </div>
        </div>
    );
}
