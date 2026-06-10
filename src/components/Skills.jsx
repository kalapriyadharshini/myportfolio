// function Skills() {

//   const skills = [
//     "HTML",
//     "CSS",
//     "JavaScript",
//     "React",
//     "Node.js",
//     "Express",
//     "MongoDB",
//     "MySQL"
//   ]

//   return (
//     <section id="skills">

//       <h2 className="section-title">Tech Stack</h2>

//       <div className="skills-grid">

//         {skills.map((skill) => (
//           <div className="skill-card" key={skill}>
//             {skill}
//           </div>
//         ))}

//       </div>

//     </section>
//   )
// }

// export default Skills



// function Skills(){

// return(

// <section id="skills" className="skills">

// <h2>Skills</h2>

// <div className="skills-grid">

// <div>HTML</div>
// <div>CSS</div>
// <div>JavaScript</div>
// <div>React</div>
// <div>Node.js</div>
// <div>MongoDB</div>

// </div>

// </section>

// )

// }

// export default Skills







// function Skills() {

//   const skills = [
//     "HTML", "CSS", "JavaScript", "React",
//     "Node.js", "MongoDB"
//   ]

//   return (
//     <section id="skills" className="skills">

//       <h2 className="section-title">The Tech Stack</h2>

//       <div className="skills-grid">
//         {skills.map((skill, index) => (
//           <div className="skill-card" key={index}>
//             <h3>{skill}</h3>
//             <span>Technology</span>
//           </div>
//         ))}
//       </div>

//     </section>
//   )
// }
// export default Skills

function Skills() {
  const skills = [
    "HTML", "CSS", "JavaScript", "React",
    "Node.js", "MongoDB"
  ]
  return (
    <section id="skills" className="skills">
      <h2 className="section-title">The Tech Stack</h2>
      {/* <div className="skills-slider">
        <div className="skills-track">
          {[...skills, ...skills].map((skill, index) => (
            <div className="skill-card" key={index}>
              <h3>{skill}</h3>
              <span>Technology</span>
            </div>
          ))}

        </div>
      </div> */}
      <div className="skills-slider">
  <div className="skills-track">
    {[...skills, ...skills].map((skill, index) => (
      <div className="skill-card" key={index}>
        <h3>{skill}</h3>
        <span>Technology</span>
      </div>
    ))}
  </div>
</div>
      {/* <div className="skills-grid">
  {skills.map((skill, index) => (
    <div className="skill-card" key={index}>
      <h3>{skill}</h3>
      <span>Technology</span>
    </div>
  ))}
</div> */}
    </section>
  )
}
export default Skills