import Image from "next/image";
import clecio from "../../../public/images/members/clecio.jpg";
import thaina from "../../../public/images/members/thaina.jpg";
import hacker from "../../../public/images/members/hacker.jpg";
import {
  AiFillInstagram,
  AiFillLinkedin,
  AiOutlineWhatsApp,
} from "react-icons/ai";

const Members = () => {
  return (
    <section id="membros" className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="text-2xl font-medium title-font mb-4 text-gray-900 tracking-widest">
            Nosso Time
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-justify">
            Somos movidos pela busca incessante por soluções inovadoras e pela
            excelência em cada linha de código que escrevemos. Colaboramos de
            forma harmoniosa, compartilhando conhecimento e ideias, para
            entregar projetos de alto impacto e qualidade excepcional.
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          <div className="p-4 lg:w-1/2">
            <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
              <Image
                alt="integrante"
                className="flex-shrink-0 rounded-full w-48 h-48 object-cover object-center sm:mb-0 mb-4"
                src={clecio}
              />
              <div className="flex-grow sm:pl-8">
                <h2 className="title-font font-medium text-lg text-gray-900">
                  Oclecio A Sousa
                </h2>
                <h3 className="text-gray-500 mb-3">Dev Full Stack</h3>
                <p className="mb-4 text-justify">
                  Habilidades tanto no front-end quanto no back-end do
                  desenvolvimento web.
                </p>
                <span className="inline-flex">
                  <a className="text-gray-500">
                    <AiFillInstagram className="w-5 h-5" />
                  </a>
                  <a className="ml-2 text-gray-500">
                    <AiFillLinkedin className="w-5 h-5" />
                  </a>
                  <a className="ml-2 text-gray-500">
                    <AiOutlineWhatsApp className="w-5 h-5" />
                  </a>
                </span>
              </div>
            </div>
          </div>
          <div className="p-4 lg:w-1/2">
            <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
              <Image
                alt="integrante"
                className="flex-shrink-0 rounded-full w-48 h-48 object-cover object-center sm:mb-0 mb-4"
                src={thaina}
              />
              <div className="flex-grow sm:pl-8">
                <h2 className="title-font font-medium text-lg text-gray-900">
                  Thaina F Silva
                </h2>
                <h3 className="text-gray-500 mb-3">Designer e TI</h3>
                <p className="mb-4 text-justify">
                  Experiência prática em banco de dados, e conhecimento Técnico
                  em Hardware e Software. Foco em Frontend - Javascript.
                </p>
                <span className="inline-flex">
                  <a className="text-gray-500">
                    <AiFillInstagram className="w-5 h-5" />
                  </a>
                  <a className="ml-2 text-gray-500">
                    <AiFillLinkedin className="w-5 h-5" />
                  </a>
                  <a className="ml-2 text-gray-500">
                    <AiOutlineWhatsApp className="w-5 h-5" />
                  </a>
                </span>
              </div>
            </div>
          </div>
          <div className="p-4 lg:w-1/2">
            <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
              <Image
                alt="integrante"
                className="flex-shrink-0 rounded-full w-48 h-48 object-cover object-center sm:mb-0 mb-4"
                src={hacker}
              />
              <div className="flex-grow sm:pl-8">
                <h2 className="title-font font-medium text-lg text-gray-900">
                  Steve F Silva
                </h2>
                <h3 className="text-gray-500 mb-3">Dev Full Stack</h3>
                <p className="mb-4 text-justify">
                  Sólida expertise em .NET, Javascript, Typerscript, Banco de
                  dados, Modelagem de dados e Testes.
                </p>
                <span className="inline-flex">
                  <a className="text-gray-500">
                    <AiFillInstagram className="w-5 h-5" />
                  </a>
                  <a className="ml-2 text-gray-500">
                    <AiFillLinkedin className="w-5 h-5" />
                  </a>
                  <a className="ml-2 text-gray-500">
                    <AiOutlineWhatsApp className="w-5 h-5" />
                  </a>
                </span>
              </div>
            </div>
          </div>
          <div className="p-4 lg:w-1/2">
            <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
              <Image
                alt="integrante"
                className="flex-shrink-0 rounded-full w-48 h-48 object-cover object-center sm:mb-0 mb-4"
                src={hacker}
              />
              <div className="flex-grow sm:pl-8">
                <h2 className="title-font font-medium text-lg text-gray-900">
                  Roger F silva
                </h2>
                <h3 className="text-gray-500 mb-3">Dev Full Stack</h3>
                <p className="mb-4 text-justify">
                  Habilidades tanto no front-end quanto no back-end do
                  desenvolvimento web.
                </p>
                <span className="inline-flex">
                  <a className="text-gray-500">
                    <AiFillInstagram className="w-5 h-5" />
                  </a>
                  <a className="ml-2 text-gray-500">
                    <AiFillLinkedin className="w-5 h-5" />
                  </a>
                  <a className="ml-2 text-gray-500">
                    <AiOutlineWhatsApp className="w-5 h-5" />
                  </a>
                </span>
              </div>
            </div>
          </div>
          <div className="p-4 lg:w-1/2">
            <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
              <Image
                alt="integrante"
                className="flex-shrink-0 rounded-full w-48 h-48 object-cover object-center sm:mb-0 mb-4"
                src={hacker}
              />
              <div className="flex-grow sm:pl-8">
                <h2 className="title-font font-medium text-lg text-gray-900">
                  Thais
                </h2>
                <h3 className="text-gray-500 mb-3">DBA</h3>
                <p className="mb-4 text-justify">
                  Especialista em gerenciar, otimizar e garantir a integridade
                  dos bancos de dados.
                </p>
                <span className="inline-flex">
                  <a className="text-gray-500">
                    <AiFillInstagram className="w-5 h-5" />
                  </a>
                  <a className="ml-2 text-gray-500">
                    <AiFillLinkedin className="w-5 h-5" />
                  </a>
                  <a className="ml-2 text-gray-500">
                    <AiOutlineWhatsApp className="w-5 h-5" />
                  </a>
                </span>
              </div>
            </div>
          </div>
          <div className="p-4 lg:w-1/2">
            <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
              <Image
                alt="integrante"
                className="flex-shrink-0 rounded-full w-48 h-48 object-cover object-center sm:mb-0 mb-4"
                src={hacker}
              />
              <div className="flex-grow sm:pl-8">
                <h2 className="title-font font-medium text-lg text-gray-900">
                  Nycole
                </h2>
                <h3 className="text-gray-500 mb-3">Web Designer</h3>
                <p className="mb-4 text-justify">
                  Habilidades em Figma capaz de criar designs atraentes,
                  funcionais, protótipos e layouts responsivos para sites e
                  aplicativos.
                </p>
                <span className="inline-flex">
                  <a className="text-gray-500">
                    <AiFillInstagram className="w-5 h-5" />
                  </a>
                  <a className="ml-2 text-gray-500">
                    <AiFillLinkedin className="w-5 h-5" />
                  </a>
                  <a className="ml-2 text-gray-500">
                    <AiOutlineWhatsApp className="w-5 h-5" />
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Members;
