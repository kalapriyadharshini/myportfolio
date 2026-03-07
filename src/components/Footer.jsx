import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa"

function Footer() {
  return (
    <footer>

      <div className="social-icons">

        <a href="https://github.com/yourusername">
          <FaGithub />
        </a>

        <a href="https://linkedin.com/in/yourusername">
          <FaLinkedin />
        </a>

        <a href="mailto:yourmail@gmail.com">
          <FaEnvelope />
        </a>

      </div>

      <p>© 2026 Kala Priyadharshini</p>

    </footer>
  )
}

export default Footer