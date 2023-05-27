import React from "react";
import Heading from "./Heading";
import { RiLightbulbFlashLine } from "react-icons/ri";

const WhatIDo = () => {
  return (
    <section className="container mx-auto py-10 px-4">
      <Heading title="O que nós fazemos" />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="shadow-lg flex flex-col gap-4 px-8 py-10 bg-gray-600 text-white">
          <RiLightbulbFlashLine className="text-[28px]" />
          <h2 className="font-medium text-[20px]">Desingns Criativos</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab
            veritatis fugit inventore cum quo, voluptatibus nobis possimus
            repellendus at soluta natus, reiciendis, pariatur non a minus
            officia suscipit sapiente sint?
          </p>
        </div>
        <div className="shadow-lg flex flex-col gap-4 px-8 py-10 bg-gray-600 text-white">
          <RiLightbulbFlashLine className="text-[28px]" />
          <h2 className="font-medium text-[20px]">Desingns Criativos</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab
            veritatis fugit inventore cum quo, voluptatibus nobis possimus
            repellendus at soluta natus, reiciendis, pariatur non a minus
            officia suscipit sapiente sint?
          </p>
        </div>
        <div className="shadow-lg flex flex-col gap-4 px-8 py-10 bg-gray-600 text-white">
          <RiLightbulbFlashLine className="text-[28px]" />
          <h2 className="font-medium text-[20px]">Desingns Criativos</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab
            veritatis fugit inventore cum quo, voluptatibus nobis possimus
            repellendus at soluta natus, reiciendis, pariatur non a minus
            officia suscipit sapiente sint?
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhatIDo;
