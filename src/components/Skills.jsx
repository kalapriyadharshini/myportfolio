function Skills() {

  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Node.js",
    "Express",
    "MongoDB",
    "MySQL"
  ]

  return (
    <section id="skills">

      <h2 className="section-title">Tech Stack</h2>

      <div className="skills-grid">

        {skills.map((skill) => (
          <div className="skill-card" key={skill}>
            {skill}
          </div>
        ))}

      </div>

    </section>
  )
}

export default Skills