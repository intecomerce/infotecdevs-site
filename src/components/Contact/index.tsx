import Heading from "../Heading";

const Contact = () => {
  return (
    <section id="contato" className="container mx-auto py-10 px-4">
      <Heading title="Entre em contato" />
      <form
        data-aos="fade-up"
        action="#"
        className="flex flex-col gap-8 border-2 border-gray-300 rounded-md p-4 drop-shadow-md"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
          <button data-aos="fade-up" type="submit" className="btn">
            Enviar Mensagem
          </button>
        </div>
      </form>
    </section>
  );
};

export default Contact;
