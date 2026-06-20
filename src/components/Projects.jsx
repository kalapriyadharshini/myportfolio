// function Projects() {

//   const projects = [
//     {
//       name: "Aquarium Fish E-commerce",
//       desc: "Online store with cart and checkout system.",
//       img: "/project1.png"
//     },
//     {
//       name: "File Upload System",
//       desc: "File upload system using Node.js and Multer.",
//       img: "/project2.png"
//     }
//   ]

//   return (
//     <section id="projects">

//       <h2 className="section-title">Projects</h2>

//       <div className="project-grid">

//         {projects.map((project) => (

//           <div className="project-card" key={project.name}>

//             <img src={project.img} alt={project.name} />

//             <h3>{project.name}</h3>

//             <p>{project.desc}</p>

//             <div className="project-buttons">

//               <button className="btn">Live Demo</button>

//               <button className="btn-outline">GitHub</button>

//             </div>

//           </div>

//         ))}

//       </div>

//     </section>
//   )
// }

// export default Projects



// function Projects(){

// return(

// <section id="projects" className="projects">

// <h2>Projects</h2>

// <div className="project-grid">

// <div className="project-card">

// <h3>Portfolio Website</h3>

// <p>Personal portfolio built with React.</p>

// <button>View Code</button>

// </div>

// <div className="project-card">

// <h3>E-commerce Website</h3>

// <p>Online shopping platform.</p>

// <button>View Code</button>

// </div>

// </div>

// </section>

// )

// }

// export default Projects


import portfolio from '../assets/portfolio.png';
import ecommerceimg from '../assets/ecommerceimg.png';

function Projects(){

return(

<section id="projects" className="projects">

<h2 className="section-title">Projects</h2>

<div className="project-grid">

<div className="project-card">
  <a
    href="https://myportfolio-alpha-ecru.vercel.app/"
    target="_blank"
    rel="noopener noreferrer"
  >
    <img
  src={portfolio}
  alt="Portfolio Website"
  className="project-img"
/>

    <div className="project-content">
      <h3>Portfolio Website</h3>

      <p>
        Personal portfolio built with React.js and modern UI design.
      </p>

      <div className="project-tags">
        <span>React</span>
        <span>CSS</span>
        <span>Portfolio</span>
      </div>
    </div>
  </a>
</div>

{/* <div className="project-card">

<h3>E-commerce Website</h3>

<p>Online shopping platform.</p>

<button className="btn">View Code</button>

</div> */}
<div className="project-card">
   <a
    href="https://voluble-figolla-369912.netlify.app/"
    target="_blank"
    rel="noopener noreferrer"
  >
    <img
      src={ecommerceimg}
      alt="E-commerce Website"
      className="project-img"
    />

    <div className="project-content">
      <h3>E-commerce Website</h3>

      <p>
        Full-stack e-commerce platform with product management, cart, wishlist, checkout and order tracking features.
      </p>

      <div className="project-tags">
        <span>React</span>
        <span>Node.js</span>
        <span>MongoDB</span>
      </div>
    </div>
  </a>
</div>

</div>

</section>

)

}

export default Projects