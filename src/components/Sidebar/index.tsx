"use client";
import { RiCloseFill } from "react-icons/ri";
import Link from "next/link";

const Sidebar = ({ isOpen, toggleSidebar, setIsOpen }: any) => {
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
        <Link
          className="hover:text-gray-600"
          href={"/"}
          onClick={() => setIsOpen(!isOpen)}
        >
          Inicio
        </Link>
        <Link
          className="hover:text-gray-600"
          href={"#sobre"}
          onClick={() => setIsOpen(!isOpen)}
        >
          Sobre
        </Link>
        <Link
          className="hover:text-gray-600"
          href={"#portfolio"}
          onClick={() => setIsOpen(!isOpen)}
        >
          Portfolio
        </Link>
        <Link
          className="hover:text-gray-600"
          href={"#membros"}
          onClick={() => setIsOpen(!isOpen)}
        >
          Membros
        </Link>
        <Link
          className="hover:text-gray-600"
          href={"#contato"}
          onClick={() => setIsOpen(!isOpen)}
        >
          Contato
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
