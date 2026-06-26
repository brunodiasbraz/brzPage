import { ArrowRight, CheckCircle2 } from 'lucide-react';

const handleContactSubmit = (event) => {
  event.preventDefault();
  event.currentTarget.reset();
  window.alert('Contato recebido. Em breve retornaremos para conversar.');
};

function ContactSection({ context = 'sua operação' }) {
  return (
    <section id="contato" className="section contact-section">
      <div className="contact-copy">
        <p className="eyebrow">Próximo passo</p>
        <h2>Vamos entender {context} e indicar o melhor caminho.</h2>
        <p>
          Conte rapidamente o cenário atual, o objetivo do projeto e quais
          processos você quer melhorar. A partir disso, retornamos com uma
          proposta mais alinhada.
        </p>
        <ul>
          <li>
            <CheckCircle2 size={19} aria-hidden="true" />
            Diagnóstico do fluxo atual
          </li>
          <li>
            <CheckCircle2 size={19} aria-hidden="true" />
            Sugestão de arquitetura e funcionalidades
          </li>
          <li>
            <CheckCircle2 size={19} aria-hidden="true" />
            Próximos passos para implantação
          </li>
        </ul>
      </div>

      <form className="contact-form" onSubmit={handleContactSubmit}>
        <label>
          Nome
          <input name="name" type="text" placeholder="Seu nome" required />
        </label>
        <label>
          E-mail
          <input name="email" type="email" placeholder="voce@empresa.com" required />
        </label>
        <label>
          Telefone
          <input name="phone" type="tel" placeholder="(00) 00000-0000" required />
        </label>
        <label>
          Mensagem
          <textarea
            name="message"
            placeholder="Conte rapidamente sobre sua necessidade"
            rows="4"
            required
          />
        </label>
        <button className="primary-button full-width" type="submit">
          Solicitar contato
          <ArrowRight size={18} aria-hidden="true" />
        </button>
      </form>
    </section>
  );
}

export default ContactSection;
