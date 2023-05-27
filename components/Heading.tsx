const Heading = ({ title }: any) => {
  return (
    <div className="text-[#232940] text-[32px] font-medium flex items-center gap-4 py-16">
      {title}
      <div className="bg-gray-600 h-[2px] w-[40px] trans-y-1"></div>
    </div>
  );
};

export default Heading;
