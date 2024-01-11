import Heading from "../Heading";

interface IPageTemplate {
    title: string;
    children: React.ReactElement | any;
    classe?: string;
}

const PageTemplate: React.FC<IPageTemplate> = ({ title, children, classe }) => {
    return (
        <div className={`w-full py-10 px-4`}>
            <Heading title={title} />
            <div className={classe ?? 'grid place-items-center'}>
                {children}
            </div>
        </div>
    );
};

export default PageTemplate;
