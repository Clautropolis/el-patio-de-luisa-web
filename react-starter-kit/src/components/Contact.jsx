

function Contact() {
  return (
    <section className="contact">
        <h2 className="contact__title">¿quieres venir al patio?</h2>
        <p className="contact__text">Si eres artista y te gustaría venir a presentar tus canciones, estaremos encantados de que conocerte.</p>
        <p className="contact__text">Rellena el formulario y nos pondremos en contacto contigo para agendar una fecha.</p>
        <form action="" className="contact__form">
            <input type="text" placeholder="Nombre" className="contact__form--input"/>
            <input type="email" placeholder="Email" className="contact__form--input"/>
            <input type="text" placeholder="Link a tus redes o canal de Youtube" className="contact__form--input"/>
            <input type="text" placeholder="Comentarios" className="contact__form--input"/>
            <input type="submit" className="contact__form--submit"/>
        </form>
    </section>
  )
}

export default Contact