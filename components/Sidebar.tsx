"use client";
import { RiCloseFill } from "react-icons/ri";
import Link from "next/link";

const Sidebar = ({ isOpen, toggleSidebar }: any) => {
  return (
    <div
      className={`w-screen h-screen ${
        isOpen ? "fixed" : "hidden"
      } top-0 left-0 bg-gray-800 z-20 text-white grid place-items-center`}
    >
      <div
        className="absolute top-0 right-0 mr-[30px] mt-[10px] text-[24px] hover:cursor-ppointer"
        onClick={toggleSidebar}
      >
        <RiCloseFill />
      </div>

      <div className="flex flex-col gap-4 text-[28px]">
        <Link className="hover:text-gray-600" href={"/"}>
          Inicio
        </Link>
        <Link className="hover:text-gray-600" href={"#sobre"}>
          Sobre
        </Link>
        <Link className="hover:text-gray-600" href={"#portfolio"}>
          Portfolio
        </Link>
        <Link className="hover:text-gray-600" href={"#membros"}>
          Membros
        </Link>
        <Link className="hover:text-gray-600" href={"#contato"}>
          Contato
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
