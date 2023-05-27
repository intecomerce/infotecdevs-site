"use client";

export default function Home() {
  return (
    <div className="img-1 h-screen bg-cover bg-center bg-fixed flex items-center">
      <div className="container mx-auto px-4">
        <div className="max-w-[450px] text-white flex flex-col gap-[40px]">
          <div>
            <h1 className="text-5xl">INFOTECDEVS</h1>
            <h4 className="text-2xl mt-3"></h4>
          </div>
          <div className="bg-gray-600 h-[2px] w-[40px]"></div>
          <div>
            <p>Somos um grupo de desenvolvedores formado por freelancers</p>
            <button className="btn">Ler Mais</button>
          </div>
        </div>
      </div>
    </div>
  );
}
