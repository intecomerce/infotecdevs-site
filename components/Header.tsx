"use client";
import Link from "next/link";
import { FiMenu } from "react-icons/fi";

const Header = ({ toggleSidebar }: any) => {
  return (
    <nav className="bg-white fixed top-0 w-[100%] z-10">
      <div className="container mx-auto flex justify-between items-center py-4 px-4">
        <div className="text-[24px] font-bold">InfotecDevs</div>
        <div className="hidden md:flex gap-6">
          <Link href={"/"} className="hover:text-gray-600">
            Inicio
          </Link>
          <Link href={"#sobre"} className="hover:text-gray-600">
            Sobre
          </Link>
          <Link href={"#portfolio"} className="hover:text-gray-600">
            Portfolio
          </Link>
          <Link href={"#membros"} className="hover:text-gray-600">
            Membros
          </Link>
          <Link href={"#contato"} className="hover:text-gray-600">
            Contato
          </Link>
        </div>
        <Link
          href={"/mensagem"}
          className="hidden md:flex text-gray-600 border border-gray-600 px-4 rounded-[5px] items-center gap-2 hover:bg-gray-600 hover:text-white transition duration-200"
        >
          Enviar Mensagem
        </Link>
        <div className="md:hidden text-[24px]" onClick={toggleSidebar}>
          <FiMenu />
        </div>
      </div>
    </nav>
  );
};

export default Header;
