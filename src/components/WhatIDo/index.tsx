import React from "react";
import Heading from "../Heading";
import { RiLightbulbFlashLine } from "react-icons/ri";

const WhatIDo = () => {
  return (
    <section id="trabalhos" className="container mx-auto py-10 px-4">
      <Heading title="O que nós fazemos" />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="shadow-lg flex flex-col gap-4 px-8 py-10 bg-gray-600 text-white">
          <RiLightbulbFlashLine className="text-[28px]" />
          <h2 className="font-medium text-[20px]">Frontend</h2>
          <p className="text-justify">
            Nossa equipe é especializada em criar sites personalizados que
            refletem a identidade e os objetivos de cada cliente. Utilizamos as
            mais recentes tecnologias e frameworks para criar interfaces
            intuitivas e atraentes, garantindo uma experiência de usuário
            excepcional. Desde sites institucionais até plataformas de comércio
            eletrônico, oferecemos soluções sob medida que impulsionam a
            presença online e geram resultados tangíveis.
          </p>
        </div>
        <div className="shadow-lg flex flex-col gap-4 px-8 py-10 bg-gray-600 text-white">
          <RiLightbulbFlashLine className="text-[28px]" />
          <h2 className="font-medium text-[20px]">Backend</h2>
          <p className="text-justify">
            Especialistas em construir o backbone de aplicativos e sites
            robustos e escaláveis. Utilizando tecnologias de ponta,
            desenvolvemos a lógica de negócios, a manipulação de dados e a
            integração de APIs necessárias para fornecer funcionalidades
            poderosas aos nossos clientes. Com uma abordagem orientada a
            resultados, garantimos que o backend seja seguro, eficiente e capaz
            de lidar com altas demandas de tráfego e processamento.
          </p>
        </div>
        <div className="shadow-lg flex flex-col gap-4 px-8 py-10 bg-gray-600 text-white">
          <RiLightbulbFlashLine className="text-[28px]" />
          <h2 className="font-medium text-[20px]">Banco de dados</h2>
          <p className="text-justify">
            Posuimos expertise no gerenciamento de bancos de dados, garantindo
            que seus dados sejam armazenados, organizados e recuperados de forma
            eficiente e segura. Trabalhamos com uma variedade de sistemas de
            banco de dados, como MySQL, PostgreSQL e MongoDB, e temos
            experiência em modelagem de dados e otimização de consultas.
            Oferecemos soluções personalizadas que atendem às suas necessidades
            específicas e garantem a integridade e confidencialidade dos seus
            dados.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhatIDo;
