import clecio from "../../../public/images/members/clecio.jpg";
import thaina from "../../../public/images/members/thaina.jpg";
import Heading from "@/components/Heading";
import MemberProfile from "@/components/MemberProfile";

const Team = () => {

    const ApresentationTeamText = (): React.ReactElement => {
        return (
            <p className="lg:w-2/3  leading-relaxed text-base text-justify">
                Somos movidos pela busca incessante por soluções inovadoras e pela
                excelência em cada linha de código que escrevemos. Colaboramos de
                forma harmoniosa, compartilhando conhecimento e ideias, para
                entregar projetos de alto impacto e qualidade excepcional.
            </p>
        );
    }
    return (
        <section id="sobre" className="container mx-auto py-10 px-4">
            <Heading title="Nosso Time" />
            <div
                data-aos="fade-up"
                className="grid grid-cols-2 md:grid-cols-1 gap-4 mt-4 p-4 border-2 rounded-md">

                <div data-aos="fade-right" className="flex flex-wrap -m-4">
                    <MemberProfile
                        src={clecio}
                        name="Oclecio A. Sousa"
                        assignment="Dev Full Stack"
                        description="Habilidades tanto no front-end quanto no back-end do
                        desenvolvimento web."
                    />

                    <MemberProfile
                        src={thaina}
                        name="Thaina F. Silva"
                        assignment="Designer e TI"
                        description=" Experiência prática em banco de dados, e conhecimento Técnico
                        em Hardware e Software. Foco em Frontend - Javascript."
                    />


                    <MemberProfile
                        name="Steve F. Silva"
                        assignment="Dev Full Stack"
                        description="Sólida expertise em .NET, Javascript, Typerscript, Banco de
                        dados, Modelagem de dados e Testes."
                    />

                    <MemberProfile
                        name="Roger F. Silva"
                        assignment="Dev Full Stack"
                        description="Habilidades tanto no front-end quanto no back-end do
                        desenvolvimento web."
                    />

                    <MemberProfile
                        name="Thais"
                        assignment="DBA"
                        description="Especialista em gerenciar, otimizar e garantir a integridade
                        dos bancos de dados."
                    />


                    <MemberProfile
                        name="Nycole F. Silva"
                        assignment="Designer"
                        description=" Habilidades em Figma na criação de designs atraentes e
                        funcionais bem como protótipos e layouts responsivos para sites e
                        aplicativos."
                    />
                </div>
            </div >
        </section >
    );
};

export default Team;
