import PageTemplate from "@/components/PageTemplate";
import "./styles.css";
import Button from "@/components/Button";

const Message = () => {
    return (
        <PageTemplate title="Entre em contato">
                <form
                    data-aos="fade-up"
                    action="#"
                    className="form-container"
                >
                    <div className="form-row-2">
                        <input
                            type="text"
                            placeholder="Nome"
                            className="inputStyle"
                            required
                        />
                        <input
                            type="email"
                            placeholder="Email"
                            className="inputStyle"
                            required
                        />
                    </div>
                    <input
                        type="text"
                        placeholder="Sobre..."
                        className="inputStyle"
                        required
                    />
                    <textarea
                        rows={6}
                        placeholder="Mensagem..."
                        className="inputStyle"
                        required
                    ></textarea>
                    <div>
                        <Button title="Enviar Mensagem" onPress={()=>console.log("A")}/>
                        <button
                            data-aos="fade-up"
                            type="submit"
                            className="font-bold hidden md:flex text-gray-600 border border-gray-600 px-4 py-1.5 rounded-[5px] items-center gap-2 hover:bg-gray-600 hover:text-white transition duration-200">
                            Enviar Mensagem
                        </button>
                    </div>
                </form>
        </PageTemplate>
    );
};

export default Message;
