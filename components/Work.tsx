import Heading from "./Heading";
import Image from "next/image";
import work1 from "../public/images/work1.png";
import work2 from "../public/images/work2.png";
import work3 from "../public/images/work3.png";
import work4 from "../public/images/work4.png";
import work5 from "../public/images/work1.png";

const Work = () => {
  return (
    <section id="portfolio" className="container mx-auto py-10 px-4">
      <Heading title="Projetos Criativos" />

      <div className="grid grid-cols-3 gap-4">
        <div className="row-span-1 relative group">
          <Image src={work1} alt="image" />
          <div className="bg-[#000000bd] absolute w-[100%] top-0 opacity-0 transition duration-500 group-hover:opacity-100 grid place_items-center text-white">
            Titulo do projeto
          </div>
        </div>

        <div className="relative group">
          <Image src={work2} alt="image" />
          <div className="bg-[#000000bd] absolute w-[100%] top-0 opacity-0 transition duration-500 group-hover:opacity-100 grid place_items-center text-white">
            Titulo do projeto
          </div>
        </div>
        <div className="relative group">
          <Image src={work3} alt="image" />
          <div className="bg-[#000000bd] absolute w-[100%] top-0 opacity-0 transition duration-500 group-hover:opacity-100 grid place_items-center text-white">
            Titulo do projeto
          </div>
        </div>

        <div className="relative group">
          <Image src={work4} alt="image" />
          <div className="bg-[#000000bd] absolute w-[100%] top-0 opacity-0 transition duration-500 group-hover:opacity-100 grid place_items-center text-white">
            Titulo do projeto
          </div>
        </div>

        <div className="relative group">
          <Image src={work5} alt="image" />
          <div className="bg-[#000000bd] absolute w-[100%] top-0 opacity-0 transition duration-500 group-hover:opacity-100 grid place_items-center text-white">
            Titulo do projeto
          </div>
        </div>
        <div className="relative group">
          <Image src={work2} alt="image" />
          <div className="bg-[#000000bd] absolute w-[100%] top-0 opacity-0 transition duration-500 group-hover:opacity-100 grid place_items-center text-white">
            Titulo do projeto
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;
