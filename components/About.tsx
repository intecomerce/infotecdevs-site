import Image from "next/image";
import Heading from "./Heading";
import image from "../public/images/business.jpg";
import { AiOutlineGift } from "react-icons/ai";
import { FiBookOpen } from "react-icons/fi";
import { BsGlobe2 } from "react-icons/bs";
import { TbPacman } from "react-icons/tb";
import { IoLocationOutline } from "react-icons/io5";

const About = () => {
  return (
    <section id="sobre" className="container mx-auto py-10 px-4">
      <Heading title="Sobre nós" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-[60px]">
        <div>
          <Image src={image} alt="imagem"></Image>
        </div>
        <div>
          <div className="flex flex-items justify-between w-[350px]">
            <div className="flex flex-col gap-6">
              <div className="flex gap-4 items-center font-medium">
                <AiOutlineGift className="text-gray-600 text-[22px]" />
                Fundada
              </div>
              <div className="flex gap-4 items-center font-medium">
                <FiBookOpen className="text-gray-600 text-[22px]" />
                Estudos
              </div>
              <div className="flex gap-4 items-center font-medium">
                <BsGlobe2 className="text-gray-600 text-[22px]" />
                Website
              </div>
              <div className="flex gap-4 items-center font-medium">
                <TbPacman className="text-gray-600 text-[22px]" />
                Interesses
              </div>
              <div className="flex gap-4 items-center font-medium">
                <IoLocationOutline className="text-gray-600 text-[22px]" />
                Localização
              </div>
            </div>
            <div className="flex flex-col gap-6 text-gray-600">
              <div>:</div>
              <div>:</div>
              <div>:</div>
              <div>:</div>
              <div>:</div>
            </div>
            <div className="flex flex-col gap-6 text-gray-600">
              <div>2023.09.1999</div>
              <div>ADS</div>
              <div>www.infotecdevs.com.br</div>
              <div>WEB</div>
              <div>Cotia-SP</div>
            </div>
          </div>
          <div className="max-w-[800px]">
            <h2 className="font-bold mt-16 mb-10">
              Desenvolvedores Frontend e Backend
            </h2>
            <p className="text-gray-600">
              Olá! somos o grupo de devs INFOTECMANIA. Formados por Devs
              Frontend e Backend, somos dedicados e apaixonados pelo nosso
              trabalho. Com devs de 2 anos de experiência na area.
            </p>
            <button className="btn">Devs</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
