"use client";
import Link from "next/link";
import {
  AiFillInstagram,
  AiFillLinkedin,
  AiOutlineWhatsApp,
} from "react-icons/ai";

export default function Home() {
  return (
    <div className="img-1 h-screen bg-cover bg-center bg-fixed flex items-center">
      <div className="container mx-auto px-4">
        <div className="max-w-[450px] text-white flex flex-col gap-[40px]">
          <div>
            <h1 data-aos="fade-right" className="text-5xl">
              INFOTECDEVS
            </h1>
            <h4 className="text-2xl mt-3"></h4>
          </div>
          <div className="bg-gray-600 h-[2px] w-[40px]"></div>
          <div>
            <p data-aos="fade-up" className="text-justify">
              Somos um grupo de desenvolvedores de sites e aplicativos
              apaixonados por transformar ideias em realidade digital.
              Combinamos nossa expertise técnica e criativa para criar soluções
              digitais inovadoras que atendem às necessidades e superam as
              expectativas dos nossos clientes.{" "}
            </p>
            <div className="flex justify-center items-center md:justify-start">
              <Link data-aos="fade-up" className="btn" href={"/about"}>
                Saber Mais
              </Link>
            </div>
          </div>
          <div
            data-aos="fade-up"
            className="text-5xl flex justify-center items-center gap-16 py-3 text-white md:justify-start"
          >
            <AiFillInstagram />
            <AiFillLinkedin />
            <AiOutlineWhatsApp />
          </div>
        </div>
      </div>
    </div>
  );
}
