import { cwd } from "process";

interface IBox {
    width: number;
    children: React.ReactElement | any;
  }
  
  const Box: React.FC<IBox> = ({ width, children }) => {
    console.warn(width);

    return (
      <div className={`grid place-items-center border-2 w-[${width}%]  shadow-lg border-gray-300 rounded-md p-4 drop-shadow-md`}>
        {children}
      </div>
    );
  };
  
  export default Box;
  