import Heading from "../Heading";

const Skills = () => {
  return (
    <section className="container mx-auto py-10 px-4">
      <Heading title="Skills" />

      <p className="text-gray-600 -mt-10 mb-10 text-justify">
        Dominamos diversas linguagens de programação, como Typescript,
        Javascript, C#, Python e PHP. Além disso, estamos familiarizados com
        frameworks e plataformas populares, como ReactNative, .NET, Laravel,
        Node, React e Next, o que nos permite criar sites e aplicativos
        personalizados, robustos e de alto desempenho. Também possuímos
        expertise em design responsivo, UX/UI, integração de APIs e banco de
        dados, garantindo que nossos projetos sejam funcionais, intuitivos e
        escaláveis.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 border-2 border-[#ff4D41] rounded-md p-4 drop-shadow-md">
        <div>
          <p>React.js</p>
          <div className="relative bg-gray-400 h-[4px] mt-2">
            <div className="bg-[#ff4D41] absolute h-[4px] w-[85%]"></div>
          </div>
        </div>
        <div>
          <p>Node.js</p>
          <div className="relative bg-gray-400 h-[4px] mt-2">
            <div className="bg-[#ff4D41] absolute h-[4px] w-[90%]"></div>
          </div>
        </div>
        <div>
          <p>Next.js</p>
          <div className="relative bg-gray-400 h-[4px] mt-2">
            <div className="bg-[#ff4D41] absolute h-[4px] w-[80%]"></div>
          </div>
        </div>
        <div>
          <p>PHP</p>
          <div className="relative bg-gray-400 h-[4px] mt-2">
            <div className="bg-[#ff4D41] absolute h-[4px] w-[75%]"></div>
          </div>
        </div>
        <div>
          <p>C#</p>
          <div className="relative bg-gray-400 h-[4px] mt-2">
            <div className="bg-[#ff4D41] absolute h-[4px] w-[85%]"></div>
          </div>
        </div>
        <div>
          <p>Javascript</p>
          <div className="relative bg-gray-400 h-[4px] mt-2">
            <div className="bg-[#ff4D41] absolute h-[4px] w-[95%]"></div>
          </div>
        </div>
        <div>
          <p>Laravel</p>
          <div className="relative bg-gray-400 h-[4px] mt-2">
            <div className="bg-[#ff4D41] absolute h-[4px] w-[75%]"></div>
          </div>
        </div>
        <div>
          <p>Typescript</p>
          <div className="relative bg-gray-400 h-[4px] mt-2">
            <div className="bg-[#ff4D41] absolute h-[4px] w-[85%]"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
