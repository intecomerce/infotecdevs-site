"use client";

import Heading from "../../components/Heading";
import Image from "next/image";
import work1 from "../../../public/images/works/work1.png";
import work2 from "../../../public/images/works/work2.png";
import work3 from "../../../public/images/works/work3.png";
import work4 from "../../../public/images/works/work4.png";
import work5 from "../../../public/images/works/work5.png";

import ticTacToe from "../../../public/images/works/jogodavelha.png";
import Project from "../../components/Project";
import { useRouter } from 'next/navigation';

const Work = () => {
    const router = useRouter();
    const redireckWork = (uri: string): void => {
        window.open(uri, "_blank");
    };

    const handleRedirect = (path: string) => {
        router.push(path);
    };

    return (
        <section
            data-aos="fade-up"
            id="portfolio"
            className="container mx-auto py-10 px-4"
        >
            <Heading title="Projetos Criativos" />

            <div className="grid grid-cols-3 gap-4">
                <Project
                    title="Cuidando do seu Pet"
                    src={work5}
                    onClick={() => handleRedirect('/work/petshop')}
                />
                <Project
                    title="Restaurante de comida orgânica"
                    src={work3}
                    onClick={() => redireckWork("https://organo-oclecio94.vercel.app/")}
                />
                <Project
                    title="Ecommerce"
                    src={work4}
                    onClick={() => console.log("click")}
                />
                <Project
                    title="Tela Login e Cadastro"
                    src={work1}
                    onClick={() =>
                        redireckWork("https://oclecio94.github.io/Login-e-Cadastro/")
                    }
                />
                <Project
                    title="Jogo da Velha"
                    src={ticTacToe}
                    onClick={() => console.log("click")}
                />
                <Project
                    title="Hortifruti"
                    src={work2}
                    onClick={() =>
                        redireckWork("https://oclecio94.github.io/Lojinha-Horti-Fruti/")
                    }
                />
            </div>
        </section>
    );
};

export default Work;
