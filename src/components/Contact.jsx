function Contact() {
  return (
    <section id="contact">

      <h2 className="section-title">Contact Me</h2>

      <form className="contact-form">

        <input type="text" placeholder="Your Name" required />

        <input type="email" placeholder="Your Email" required />

        <textarea placeholder="Your Message"></textarea>

        <button className="btn">Send Message</button>

      </form>

    </section>
  )
}

export default Contact