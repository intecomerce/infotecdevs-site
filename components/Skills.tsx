import Heading from "./Heading";

const Skills = () => {
  return (
    <section id="membros" className="container mx-auto py-10 px-4">
      <Heading title="Skills" />

      <p className="text-gray-600 -mt-10 mb-10">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque ullam
        enim itaque inventore molestiae quae ipsam harum nam explicabo, fuga quo
        dolor vitae accusantium tenetur maiores voluptatibus ducimus eius iste!
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <p>React.js</p>
          <div className="relative bg-gray-400 h-[4px] mt-2">
            <div className="bg-[#ff4D41] absolute h-[4px] w-[80%]"></div>
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
      </div>
    </section>
  );
};

export default Skills;
