import Box from "@/components/Box";
import {
    AiFillGithub,
    AiFillLinkedin,
    AiOutlineWhatsApp,
} from "react-icons/ai";
import PageTemplate from "@/components/PageTemplate";
import "./styles.css";

const Contact = () => {
    return (
        <PageTemplate title="Encontre-nos">
            <Box width={60}>
                <div className="data-contact">
                    <label>Email:</label>
                    <label>steve.evets00@gmail.com</label>
                </div>
                <div className="data-contact">
                    <label>Telefone:</label>
                    <label>(11)9.9768-1306</label>
                </div>
                <section className="network-container">
                    <AiFillLinkedin className="network-icon" />
                    <AiOutlineWhatsApp className="network-icon" />
                    <AiFillGithub className="network-icon" />
                </section>
            </Box>
        </PageTemplate>
    );
};

export default Contact;
