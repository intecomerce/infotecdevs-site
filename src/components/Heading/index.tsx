import React from 'react';

interface IHeading {
  title: string;
}

const Heading: React.FC<IHeading> = ({ title }) => {
  const headingClasses = `
    text-[#232940]
    text-[32px]
    font-medium
    flex
    items-center
    gap-2
    py-4
  `;

  const lineClasses = `
    bg-gray-600
    h-[2px]
    w-[40px]
    trans-y-1
  `;

  return (
    <div data-aos="fade-right" className={headingClasses}>
      {title}
      <div className={lineClasses}></div>
    </div>
  );
};

export default Heading;
