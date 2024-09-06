export default function ContactForm() {
  return (
    <div>
      <form>
        <label className="contact-label">Nome</label>
        <input className="contact-input" type="text" name="name"/>
        <label className="contact-label">E-mail</label>
        <input className="contact-input" type="text" name="email"/>
        <label className="contact-label">Telefone</label>
        <input className="contact-input" type="text" name="phone"/>
        <textarea name="massage" />
        <input type="submit" value="Enviar" />
      </form>
    </div>
  )
}