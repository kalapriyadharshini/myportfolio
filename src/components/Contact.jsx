// function Contact() {
//   return (
//     <section id="contact">

//       <h2 className="section-title">Contact Me</h2>

//       <form className="contact-form">

//         <input type="text" placeholder="Your Name" required />

//         <input type="email" placeholder="Your Email" required />

//         <textarea placeholder="Your Message"></textarea>

//         <button className="btn">Send Message</button>

//       </form>

//     </section>
//   )
// }

// export default Contact



// function Contact(){

// return(

// <section id="contact" className="contact">

// <h2>Contact Me</h2>

// <p>Email: kalapriya32003@gmail.com</p>

// <p>LinkedIn: linkedin.com/in/kala-priyadharshini-mohandoss</p>

// </section>

// )

// }

// export default Contact



// function Contact(){

// return(

// <section id="contact" className="contact">

// <h2 className="section-title">Contact Me</h2>

// <div className="contact-box">

// <p>Email: kalapriya32003@gmail.com</p>

// <p>LinkedIn: linkedin.com/in/kala-priyadharshini-mohandoss</p>

// </div>

// </section>

// )

// }

// export default Contact




import { FaEnvelope, FaLinkedin } from "react-icons/fa";

function Contact() {
  return (
    <section id="contact" className="contact">
      <h2 className="section-title">Let's Connect</h2>

      <div className="contact-box">
  {/* MERN Stack Developer focused on creating modern, scalable web applications. Feel free to connect regarding opportunities, collaborations, or projects. */}
<p className="contact-text">
  Passionate about building modern web applications and continuously enhancing my skills. Open to opportunities, collaborations, and exciting projects.
</p>
        

        <div className="contact-links">
         <a
  href="https://mail.google.com/mail/?view=cm&fs=1&to=kalapriya32003@gmail.com"
  target="_blank"
  rel="noopener noreferrer"
  className="contact-link"
>
            <FaEnvelope />
            <span>Email Me</span>
          </a>

          <a
            href="https://www.linkedin.com/in/kala-priyadharshini-mohandoss"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link"
          >
            <FaLinkedin />
            <span>LinkedIn</span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;