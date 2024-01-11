"use client";
import ProjectDetail from "@/components/ProjectDetail";

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
                    <ProjectDetail title="Pet Shop"/>
                </div>
            </div>
        </div>
    );
}
