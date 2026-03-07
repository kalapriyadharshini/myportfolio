function Hero() {
  return (
    <section id="home" className="hero">

      <div className="hero-content">

        <h1>Hello, I'm <span>Kala Priyadharshini</span></h1>

        <h2>Full Stack Web Developer</h2>

        <p>
          I build modern web applications using
          React, Node.js, Express and MongoDB.
        </p>

        <div className="hero-buttons">

          <a href="#projects">
            <button className="btn">View Projects</button>
          </a>

          <a href="/resume.pdf" download>
            <button className="btn-outline">Download Resume</button>
          </a>

        </div>

      </div>

    </section>
  )
}

export default Hero