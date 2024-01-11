import Image, { StaticImageData } from "next/image";
import { AiFillInstagram, AiFillLinkedin, AiOutlineWhatsApp } from "react-icons/ai";
import hacker from "../../../public/images/members/hacker.jpg";
interface IMemberProfile {
    name: string;
    src?: StaticImageData | null;
    assignment: string;
    description: string;
};

const MemberProfile: React.FC<IMemberProfile> = ({ name, src, assignment, description }) => {

    return (
        <div className="p-4 lg:w-1/2">
            <div className="flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                <Image
                    alt="integrante"
                    className="flex-shrink-0 rounded-full w-40 h-40 object-cover object-center sm:mb-0 mb-4"
                    src={src ?? hacker}
                />
                <div className="flex-grow sm:pl-8">
                    <h2 className="title-font font-medium text-lg text-gray-900">
                        {name}
                    </h2>
                    <h3 className="text-gray-500 mb-3">
                        {assignment}
                    </h3>
                    <p className="mb-4 text-justify">
                        {description}
                    </p>
                    <span className="inline-flex">
                        <a className="text-gray-500">
                            <AiFillInstagram className="w-5 h-5" />
                        </a>
                        <a className="ml-2 text-gray-500">
                            <AiFillLinkedin className="w-5 h-5" />
                        </a>
                        <a className="ml-2 text-gray-500">
                            <AiOutlineWhatsApp className="w-5 h-5" />
                        </a>
                    </span>
                </div>
            </div>
        </div>
    );
};

export default MemberProfile;
