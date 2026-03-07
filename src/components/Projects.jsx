function Projects() {

  const projects = [
    {
      name: "Aquarium Fish E-commerce",
      desc: "Online store with cart and checkout system.",
      img: "/project1.png"
    },
    {
      name: "File Upload System",
      desc: "File upload system using Node.js and Multer.",
      img: "/project2.png"
    }
  ]

  return (
    <section id="projects">

      <h2 className="section-title">Projects</h2>

      <div className="project-grid">

        {projects.map((project) => (

          <div className="project-card" key={project.name}>

            <img src={project.img} alt={project.name} />

            <h3>{project.name}</h3>

            <p>{project.desc}</p>

            <div className="project-buttons">

              <button className="btn">Live Demo</button>

              <button className="btn-outline">GitHub</button>

            </div>

          </div>

        ))}

      </div>

    </section>
  )
}

export default Projects