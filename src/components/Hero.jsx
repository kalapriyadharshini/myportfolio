// function Hero() {
//   return (
//     <section id="home" className="hero">

//       <div className="hero-content">

//         <h1>Hello, I'm <span>Kala Priyadharshini</span></h1>

//         <h2>Full Stack Web Developer</h2>

//         <p>
//           I build modern web applications using
//           React, Node.js, Express and MongoDB.
//         </p>

//         <div className="hero-buttons">

//           <a href="#projects">
//             <button className="btn">View Projects</button>
//           </a>

//           <a href="/resume.pdf" download>
//             <button className="btn-outline">Download Resume</button>
//           </a>

//         </div>

//       </div>

//     </section>
//   )
// }

// export default Hero


import { Typewriter } from "react-simple-typewriter"

function Hero() {

  return (

    <section id="home" className="hero">

      <h1>Hello I'm <span>Kala Priyadharshini Mohandoss</span></h1>

      <h2>

        <Typewriter
          words={['Full Stack  Web Developer','MERN Stack Developer']}
          loop={true}
          cursor
          cursorStyle="|"
          typeSpeed={80}
          deleteSpeed={50}
          delaySpeed={2000}
        />

      </h2>

      <p>I build modern web applications.</p>

      <div className="hero-buttons">

        <a href="#projects">
          <button className="btn">View Projects</button>
        </a>

        <a href="/resume.pdf">
          <button className="btn-outline">Download Resume</button>
        </a>

      </div>

    </section>

  )

}

export default Hero