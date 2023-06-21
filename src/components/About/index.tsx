import Image from "next/image";
import Link from "next/link";
import Heading from "../Heading";
import image from "../../../public/images/site/business.jpg";
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
              <div>20.05.2023</div>
              <div>ADS</div>
              <div>www.infotecdevs.com.br</div>
              <div>Web e Mobile</div>
              <div>Cotia-SP</div>
            </div>
          </div>
          <div className="max-w-[800px]">
            <h2 className="font-bold mt-16 mb-10">
              Desenvolvedores Frontend e Backend
            </h2>
            <p className="text-gray-600 text-justify">
              Nossa equipe altamente qualificada está sempre atualizada com as
              últimas tendências e tecnologias, garantindo que nossos projetos
              sejam construídos com os mais altos padrões de qualidade. Seja
              você um pequeno negócio em busca de uma presença online impactante
              ou uma grande empresa em busca de uma plataforma personalizada,
              estamos prontos para colaborar e tornar sua visão digital em uma
              realidade impressionante. Junte-se a nós e descubra como podemos
              transformar sua ideia em um site ou aplicativo de sucesso.
            </p>
            <Link href={"#membros"}>
              <button className="btn">Devs</button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
