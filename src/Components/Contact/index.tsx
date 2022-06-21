import styles from './contact.module.scss';


export default function Contact() {
  return (
    <main className={styles.pageContact}>
      <form>
        <label htmlFor="nomesobrenome">Nome e sobrenome</label>
        <input type="text" id="nomesobrenome" required />

        <label id="email">Email</label>
        <input type="email" id="email" required placeholder="seuemail@dominio.com" />

        <label id="telefone">Telefone</label>
        <input type="tel" id="telefone" required placeholder="(XX) XXXX XXXX" />

        <label htmlFor="mensagem"> Mensagens</label>
        <textarea id="mensagem" required></textarea>


        <fieldset>
          <legend>Como prefere o nosso contato?</legend>
          <label htmlFor="radio-email"><input type="radio" name="contato" value="email" id="radio-email" />Email</label>

          <label htmlFor="radio-telefone"><input type="radio" name="contato" value="Telefone" id="radio-telefone" />Telefone</label>

          <label htmlFor="whatsapp"> <input type="radio" name="contato" value="whatsapp" id="whatsapp" checked />WhatsApp</label>

        </fieldset>

        <fieldset>
          <legend>Qual Horário prefere ser atendido?</legend>
          <select>
            <option>Manhã</option>
            <option>Tarde</option>
            <option>Noite</option>
          </select>
        </fieldset>

        <input type="submit" name="contato" value="Enviar formulário" />

      </form>
    </main >

  )
}